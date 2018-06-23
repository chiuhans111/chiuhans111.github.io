"use strict";

// auto kill
/*
CEnemy.prototype.Walk = function () {
    (function (instance) {
        instance.Damage(instance.m_nHealth - 1)
        setTimeout(() => instance.Damage(1), 1000)
    })(this)
    this.m_Sprite.textures = this.m_rgWalkFrames;
    this.m_Sprite.loop = true;
    this.m_Sprite.play();
    this.m_Sprite.onComplete = null;
    this.m_bMoving = true;
};
*/

CEnemyManager.prototype.BuildEnemy = function(){};

CBattleState.prototype.RenderVictoryScreen = function (result) {
    window.G_instance = this;
    this.m_VictoryScreen = new PIXI.Container();

    gServer.ReportScore(
        this.m_Score,
        function (results) {
            console.log('report score result', results)
            var result = results.response
            
            var sps = (result.new_score - result.old_score) / (1000*60*2)
            var tre = (result.next_level_score - result.new_score) / sps

            console.log('Time till level', result.new_level+1);
            console.log(`${Math.floor(tre/1000/60/60)} Hour ${Math.floor(tre/1000/60%60)} Min ${Math.floor(tre/1000%60)} Sec`);
            console.log(`${sps} score / second`);
            
            

            gServer.GetPlayerInfo(function (results) {
                gPlayerInfo = results.response;
                gGame.ChangeState(new CBattleSelectionState(window.G_instance.m_PlanetData.id));
            }, function () { });
        },
        function () {
            GameLoadError();
            gGame.ChangeState(new CBattleSelectionState(window.G_instance.m_PlanetData.id));
        }
    );
};

var max = 0;
var maxx = 1;
var maxy = 1;

CBattleSelect.prototype.SetTile = function (tileX, tileY, tileInfo) {

    window.TILES = this.m_Tiles;
    //console.log(tileInfo)

    if (tileX == 1 && tileY == 1) {
        // console.log('start set tile')
        max = 0;
        maxx = 1;
        maxy = 1;
    }

    if (!tileInfo.captured) {
        var love = tileInfo.progress + tileInfo.difficulty
        if (love > max) {
            max = love
            maxx = tileX
            maxy = tileY
        }
    }



    if (tileX == k_NumMapTilesW - 1 && tileY == 7) {
        // console.log('tile set done')
    }


    var tileIdx = _GetTileIdx(tileX, tileY);

    if (tileIdx < this.m_Tiles.length && null != this.m_Tiles[tileIdx]) {
        var oldTile = this.m_Tiles[tileIdx];
        oldTile.SetData(tileInfo);
    }
    else {
        var tile = new CBattleTile(this.m_Resources, tileInfo);
        this.m_Tiles[tileIdx] = tile;
        this.m_Container.addChild(tile);

        tile.x = 1 + this.m_TileSizeX * tileX;
        tile.y = 1 + this.m_TileSizeY * tileY;
    }
}


function GameLoadError() {
    console.trace('GameLoadError')
}


CBattleSelectionState.prototype.OnLoadComplete = function (loader, resources) {
    //console.log("CBattleSelectionState::OnLoadComplete()");

    if (null == gSalien) {
        gSalien = new CSalien(resources);
    }

    var instance = this;
    this.m_Background = new PIXI.Sprite.fromImage('planet_select_bg');
    this.m_Background.width = gApp.screen.width;
    this.m_Background.height = gApp.screen.height;

    this.m_GridContainer = new PIXI.Container();
    this.m_GridContainer.x = 408;
    this.m_GridContainer.y = 102;

    const gridBgHeight = 648;
    this.m_GridBox = new CUIBox(854, gridBgHeight);
    this.m_GridBox.SetTitleHeight(44);
    var titleStyle = jQuery.extend({}, k_TextStyleBold);
    titleStyle.fontSize = 20;
    this.m_GridBox.SetTitleStyle(titleStyle);
    this.m_GridBox.SetTitleText(this.m_PlanetData.state.name.toUpperCase());
    this.m_GridBox.x = -24;
    this.m_GridBox.y = -64;
    this.m_GridContainer.addChild(this.m_GridBox);

    this.m_MapImage = new PIXI.Sprite.fromImage('map_bg_' + instance.m_PlanetData.id);
    this.m_GridContainer.addChild(this.m_MapImage);

    this.m_bJoiningPlanet = false;

    // initialize a grid the user can click on
    this.m_Grid = new CBattleSelect(resources, this.m_GridContainer);
    window.Grid = this.m_Grid;

    (function (grid) {
        setTimeout(() => grid.click(maxx, maxy), 1000)
    })(this.m_Grid);


    this.m_Grid.click = function (tileX, tileY) {
        if (instance.m_bJoiningPlanet) {
            return;
        }

        var unPlanetID = instance.m_unPlanetID;
        var zoneIdx = _GetTileIdx(tileX, tileY);

        if (instance.m_PlanetData.zones[zoneIdx].captured) {
            ZoneCaptured();
            return;
        }

        instance.m_bJoiningPlanet = true;

        gServer.JoinZone(
            zoneIdx,
            function (results) {
                gGame.ChangeState(new CBattleState(instance.m_PlanetData, zoneIdx));
                instance.m_bJoiningPlanet = false;
            },
            function (error, eResult) {
                if (eResult !== undefined) {
                    if (eResult == 27) {
                        instance.m_bJoiningPlanet = false;
                        ZoneCaptured();
                        gGame.ChangeState(new CBattleSelectionState(instance.m_PlanetData.id));
                    }
                    else {
                        instance.m_bJoiningPlanet = false;
                        GameLoadError();
                    }
                }
                else {
                    instance.m_bJoiningPlanet = false;
                    GameLoadError();
                }
            }
        );
    };

    this.m_RewardsContainer = new PIXI.Container();
    this.m_RewardsContainer.x = 256;
    this.m_RewardsContainer.y = this.m_GridBox.y + gridBgHeight - 55;

    this.m_PossibleRewardsLabel = new PIXI.Text('Possible rewards:'.toUpperCase());
    this.m_PossibleRewardsLabel.style = {
        fontFamily: k_FontType,
        fontSize: 12,
        fill: "white",
        fontWeight: 'bold',
        align: 'center',
    };
    this.m_PossibleRewardsLabel.anchor.set(0.5, 0.5);
    this.m_RewardsContainer.addChild(this.m_PossibleRewardsLabel);

    // show our game rewards
    for (var idx = 0; idx < this.m_PlanetData.giveaway_apps.length; idx++) {
        const boxScale = 0.80;

        var appId = this.m_PlanetData.giveaway_apps[idx];
        var sprite = new PIXI.Sprite.fromImage('app_' + appId);
        sprite.x = idx * (k_GameBoxW * boxScale + k_GameBoxPadding);
        sprite.y = 12;
        sprite.width = k_GameBoxW * boxScale;
        sprite.height = k_GameBoxH * boxScale;
        sprite.interactive = true;
        sprite.buttonMode = true;
        sprite.appid = appId;
        sprite.pointertap = function () {
            window.open('https://store.steampowered.com/app/' + this.appid + '/?snr=1_saliens_4__salienapps', '_blank');
        };
        this.m_RewardsContainer.addChild(sprite);
    }

    this.m_GridContainer.addChild(this.m_RewardsContainer);

    this.m_PossibleRewardsLabel.x = (this.m_RewardsContainer.width / 2) - 40;

    this.m_RewardCountdown = new PIXI.Text('');
    this.m_RewardCountdown.style = {
        fontFamily: k_FontType,
        fontSize: 14,
        fill: "white",
        fontWeight: 'bolder',
        align: 'center',
    };
    this.m_RewardCountdown.anchor.set(0.5, 0.5);
    this.m_RewardCountdown.x = this.m_PossibleRewardsLabel.x;
    this.m_RewardCountdown.y = this.m_PossibleRewardsLabel.y - 18;
    this.m_RewardsContainer.addChild(this.m_RewardCountdown);

    this.m_rtPlanetCountUp = 0;
    gServer.GetPlayerInfo(function (results) {
        gPlayerInfo = results.response;
        instance.m_rtPlanetCountUp = Date.now();
        var nSecondsOnPlanet = gPlayerInfo.time_on_planet;
        var strTime = PadZerosLeft(Math.floor(nSecondsOnPlanet / 3600), 2) + ':' + PadZerosLeft(Math.floor((nSecondsOnPlanet % 3600) / 60), 2) + ':' + PadZerosLeft(nSecondsOnPlanet % 60, 2);
        instance.m_RewardCountdown.text = 'Time Spent On Planet: '.toUpperCase() + strTime;
    },
        function () { }
    );

    // add button
    this.m_LeaveButton = new CUIButton(134, 34, 'Leave Planet'.toUpperCase());
    this.m_LeaveButton.x = 0;
    this.m_LeaveButton.y = this.m_GridBox.y + gridBgHeight - 55;
    this.m_LeaveButton.click = function (btn) {
        gAudioManager.PlaySound('ui_select_backwards');
        gServer.LeaveGameInstance(
            instance.m_PlanetData.id,
            function () {
                gGame.ChangeState(new CPlanetSelectionState());
            }
        );
    };
    this.m_GridContainer.addChild(this.m_LeaveButton);

    var nEasy = 0;
    var nMedium = 0;
    var nHard = 0;
    //var nBoss = 0;
    this.m_PlanetData.zones.forEach(function (zone) {
        if (zone.captured)
            return;

        if (zone.difficulty == 1)
            ++nEasy;
        else if (zone.difficulty == 2)
            ++nMedium;
        else if (zone.difficulty == 3)
            ++nHard;
    });

    this.m_ZonesRemainingBox = new PIXI.Container();
    this.m_ZonesRemainingBox.x = 660;
    this.m_ZonesRemainingBox.y = 524;
    this.m_GridContainer.addChild(this.m_ZonesRemainingBox);

    this.m_EnemiesRemainingText = new PIXI.Text('Enemy Tiles Remaining:'.toUpperCase());
    this.m_EnemiesRemainingText.style = {
        fontFamily: k_FontType,
        fontSize: 10,
        fill: "white",
        fontWeight: 'bold',
        align: 'left',
    };
    this.m_EnemiesRemainingText.y = -16;
    this.m_EnemiesRemainingText.x = -20;
    this.m_ZonesRemainingBox.addChild(this.m_EnemiesRemainingText);

    this.m_EasySprite = new PIXI.Sprite.fromImage('easy_difficulty');
    this.m_EasySprite.scale.set(0.1, 0.1);
    this.m_EasyText = new PIXI.Text('x' + nEasy);
    this.m_EasyText.x = this.m_EasySprite.x + this.m_EasySprite.width / 2;
    this.m_EasyText.y = this.m_EasySprite.height;
    this.m_EasyText.style = k_TextStyleZoneRemaining;
    this.m_ZonesRemainingBox.addChild(this.m_EasyText);
    this.m_ZonesRemainingBox.addChild(this.m_EasySprite);

    this.m_MediumSprite = new PIXI.Sprite.fromImage('medium_difficulty');
    this.m_MediumSprite.scale.set(0.1, 0.1);
    this.m_MediumSprite.x = this.m_EasySprite.x + this.m_EasySprite.width + k_GameBoxPadding;
    this.m_MediumText = new PIXI.Text('x' + nMedium);
    this.m_MediumText.x = this.m_MediumSprite.x + this.m_MediumSprite.width / 2;
    this.m_MediumText.y = this.m_MediumSprite.height;
    this.m_MediumText.style = k_TextStyleZoneRemaining;
    this.m_ZonesRemainingBox.addChild(this.m_MediumText);
    this.m_ZonesRemainingBox.addChild(this.m_MediumSprite);

    this.m_HardSprite = new PIXI.Sprite.fromImage('hard_difficulty');
    this.m_HardSprite.scale.set(0.1, 0.1);
    this.m_HardSprite.x = this.m_MediumSprite.x + this.m_MediumSprite.width + k_GameBoxPadding;
    this.m_HardText = new PIXI.Text('x' + nHard);
    this.m_HardText.x = this.m_HardSprite.x + this.m_HardSprite.width / 2;
    this.m_HardText.y = this.m_HardSprite.height;
    this.m_HardText.style = k_TextStyleZoneRemaining;
    this.m_ZonesRemainingBox.addChild(this.m_HardText);
    this.m_ZonesRemainingBox.addChild(this.m_HardSprite);

    for (var i = 0; i < k_NumMapTilesW; ++i) {
        for (var j = 0; j < k_NumMapTilesH; ++j) {
            var idx = _GetTileIdx(i, j);
            var zone = this.m_PlanetData.zones[idx];

            var bBoss = false;
            if (zone.type == 4) {
                bBoss = true;
            }
            var bCaptured = false;
            if (zone.captured !== undefined && zone.captured == true) {
                bCaptured = true;
            }

            var difficulty = zone.difficulty;

            var clanavatar = null;
            var clanurl = null;
            if (zone.leader !== undefined) {
                clanurl = zone.leader.url;
                clanavatar = 'clanavatar_' + zone.leader.accountid;
            }

            var progress = 0.0;
            if (zone.capture_progress !== undefined) {
                progress = zone.capture_progress;
            }

            var clans = [];
            if (zone.top_clans !== undefined) {
                clans = zone.top_clans;
            }

            var params = {
                boss: bBoss,
                captured: bCaptured,
                difficulty: difficulty,
                clanurl: clanurl,
                clanavatar: clanavatar,
                progress: progress,
                clans: clans
            };

            this.m_Grid.SetTile(i, j, params);
        }
    }

    this.m_MapImage.width = this.m_Grid.width;
    this.m_MapImage.height = this.m_Grid.height;


    gApp.stage.addChild(this.m_Background);

    this.m_LogoBG = new PIXI.Sprite.fromImage('logo_bg');
    gApp.stage.addChild(this.m_LogoBG);
    this.m_Logo = new PIXI.Sprite.fromImage('logo');
    this.m_Logo.x = 33;
    this.m_Logo.y = 17;
    gApp.stage.addChild(this.m_Logo);

    this.m_Elapsed = 0;
    this.m_Ship = new PIXI.Sprite.fromImage('ship');
    this.m_Ship.x = -8;
    this.m_Ship.y = k_ScreenHeight - this.m_Ship.height + 20;
    gApp.stage.addChild(this.m_Ship);
    this.m_ShipFlag = new PIXI.Sprite.fromImage('ship_flag');
    this.m_ShipFlag.x = 84;
    this.m_ShipFlag.y = 2;
    this.m_ShipFlag.interactive = true;
    this.m_ShipFlag.buttonMode = true;
    this.m_ShipFlag.pointertap = function () {
        ShowRepresentGroupDialog(function (groupid, strAvatarHash) {
            gPlayerInfo.clan_info = {};
            gPlayerInfo.clan_info.accountid = groupid;
            gPlayerInfo.clan_info.avatar = strAvatarHash;
            gGame.ChangeState(new CBattleSelectionState(instance.m_unPlanetID));
        });
    };
    this.m_Ship.addChild(this.m_ShipFlag);

    if (gPlayerInfo.clan_info !== undefined) {
        this.m_ShipFlagClan = new PIXI.Sprite.fromImage('clanavatar_' + gPlayerInfo.clan_info.accountid);
        this.m_ShipFlagClan.x = this.m_ShipFlag.x + 32;
        this.m_ShipFlagClan.y = this.m_ShipFlag.y + 12;
        this.m_Ship.addChild(this.m_ShipFlagClan);
    }
    else if (WebStorage.GetLocal('minigame_joingroupprompt') <= 3) {
        if (WebStorage.GetLocal('minigame_joingroupprompt') !== null) {
            WebStorage.SetLocal('minigame_joingroupprompt', WebStorage.GetLocal('minigame_joingroupprompt') + 1);
        }
        else {
            WebStorage.SetLocal('minigame_joingroupprompt', 1);
        }

        this.m_JoinGroupText = new PIXI.Text('< Choose a group!');
        this.m_JoinGroupText.anchor.set(0, 0.5);
        this.m_JoinGroupText.x = this.m_ShipFlag.x + this.m_ShipFlag.width;
        this.m_JoinGroupText.y = this.m_ShipFlag.y + (this.m_ShipFlag.height / 2) - 10;
        this.m_JoinGroupText.style = {
            fontFamily: k_FontType,
            fontSize: 14,
            fill: 'white',
            align: 'center',
        };
        this.m_Ship.addChild(this.m_JoinGroupText);
    }

    // add the salien to the top
    gSalien.position.set(98, 386);
    gSalien.scale.set(0.13, 0.13);
    this.m_Ship.addChild(gSalien);

    // our info!
    this.m_SalienInfoBox = new CSalienInfoBox();
    this.m_SalienInfoBox.x = 12;
    this.m_SalienInfoBox.y = k_ScreenHeight - 72;
    gApp.stage.addChild(this.m_SalienInfoBox);

    gApp.stage.addChild(this.m_GridContainer);

    // button to customize the salien
    this.m_CustomizeButton = CreateCustomizeButton(220, 300);
    this.m_CustomizeButton.y = k_ScreenHeight - 320;
    gApp.stage.addChild(this.m_CustomizeButton);

    gAudioManager.PlayMusic('galaxy_music', true);

    this.m_AudioIndicator = new PIXI.Sprite.fromImage('sound_toggle');
    this.m_AudioIndicator.x = k_ScreenWidth - this.m_AudioIndicator.width - 10;
    this.m_AudioIndicator.y = k_ScreenHeight - this.m_AudioIndicator.height - 10;
    this.m_AudioIndicator.alpha = gAudioManager.m_Muted ? 0.3 : 1.0;
    this.m_AudioIndicator.interactive = true;
    this.m_AudioIndicator.buttonMode = true;
    this.m_AudioIndicator.pointertap = function () {
        gAudioManager.ToggleMute();
        this.alpha = gAudioManager.m_Muted ? 0.3 : 1.0;
    };
    gApp.stage.addChild(this.m_AudioIndicator);
};