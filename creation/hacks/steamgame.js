
/**@type {HTMLIFrameElement} */
var frame;

var countdown = document.createElement('p');

function checkLive() {
    var current = Date.now();
    var delta = current - lastupdate;
    if (delta > 1000 * 60 * 5) {
        lastupdate = current;
        load();
    }

    if (nextLevelTime - smoothnextLevelTime > 1000 * 60 * 60) smoothnextLevelTime = nextLevelTime;
    smoothnextLevelTime += (nextLevelTime - smoothnextLevelTime) * 0.02;
    var ttnl = smoothnextLevelTime - current;
    var nls = Math.floor(ttnl / 1000) % 60
    var nlm = Math.floor(ttnl / 1000 / 60) % 60
    var nlh = Math.floor(ttnl / 1000 / 60 / 60)
    countdown.innerText = `${nlh} hour, ${nlm} min, ${nls} sec`;
    countdown.style.color = 'white';
    countdown.style.marginLeft = '16px';
    setTimeout(() => {
        checkLive();
    }, 14);
}

checkLive();

var scorePerMillis = 5;
var currentScore = 0;
var nextLevelTime = 0;
var smoothnextLevelTime = 0;

function load() {
    console.log('start loading');

    document.body.innerHTML = '';

    if (frame != null) {
        delete frame
    }
    frame = document.createElement('iframe');
    frame.style.width = '100%';
    frame.style.height = '500px';



    function inject() {

        setTimeout(() => {
            var script = frame.contentDocument.createElement('script');

            (function (load, print) {
                frame.contentWindow.restart = function () {
                    load();
                    console.trace('restart');
                }

                frame.contentWindow.report = function (content) {
                    print(content);
                    console.log(content);
                }

                frame.contentWindow.update = function (result) {
                    console.log(result);
                    var current = Date.now();
                    var delta = current - lastupdate;
                    lastupdate = current;
                    if (result.new_score == null) return;
                    scorePerMillis = (result.new_score - result.old_score) / delta;
                    currentScore = result.new_score;
                    nextLevelTime = current + (result.next_level_score - result.new_score) / scorePerMillis;
                }

            })(load, print);

            script.innerHTML = hack.toString() + ';hack.bind(window)(window.restart, window.report, window.update)'
            frame.contentDocument.body.appendChild(script)
        }, 5000);
    }

    document.body.appendChild(frame);
    frame.onload = function () {
        console.log("loaded");
        if (frame.contentDocument.readyState == 'complete') {
            inject();
        } else frame.contentDocument.onreadystatechange = function () {
            console.log('ready?', frame.contentDocument.readyState);
            if (frame.contentDocument.readyState == 'complete') {
                inject();
            }
        }
    }
    setTimeout(() => {
        frame.src = 'https://steamcommunity.com/saliengame/play';
    }, 1000);
    var pre = document.createElement('pre');
    pre.style.marginLeft = '16px';
    pre.style.color = 'white';

    document.body.appendChild(pre);
    document.body.appendChild(countdown);
    function print(content) {
        pre.innerHTML = content;
    }
    pre.innerHTML = 'Hello\nWorld';
}
load();


var lastupdate = Date.now();

function hack(restart, report, update) {


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

    // call this when the body is customized!
    CSalien.prototype.UpdateCustomizations = function (salienData) {
        console.log(salienData);
    }


    console.log('hacking started');


    setTimeout(() => {

        gServer.GetPlayerInfo(function (results) {
            gPlayerInfo = results.response;
            gGame.ChangeState(new CBattleSelectionState(gPlayerInfo.active_planet));
            update(results.response);
        }, function () { restart() });
    }, 2000);

    CEnemyManager.prototype.BuildEnemy = function () { };




    CBattleState.prototype.RenderVictoryScreen = function (result) {
        window.G_instance = this;
        this.m_VictoryScreen = new PIXI.Container();

        gServer.ReportScore(
            this.m_Score,
            function (results) {


                console.log('report score result', results)
                var result = results.response

                report(
                    [
                        'current level ' + result.new_level,
                        `${result.new_score} / ${result.next_level_score} ( ${Math.floor(result.new_score / result.next_level_score * 10000) / 100}% )`
                    ].join('\n')
                )

                update(result);


                gServer.GetPlayerInfo(function (results) {
                    gPlayerInfo = results.response;
                    setTimeout(() => {
                        gGame.ChangeState(new CBattleSelectionState(window.G_instance.m_PlanetData.id));
                    }, 2000);
                }, function () { });
            },
            function () {
                GameLoadError();
                gGame.ChangeState(new CBattleSelectionState(window.G_instance.m_PlanetData.id));
            }
        );
    };

    function GameLoadError() {
        // console.trace('GameLoadError')
        // restart();
        console.trace('game load error');
    }


    CBattleSelectionState.prototype.OnLoadComplete = function (loader, resources) {
        //console.log("CBattleSelectionState::OnLoadComplete()");


        if (null == gSalien) {
            gSalien = new CSalien(resources);
        }

        var instance = this;

        this.m_GridContainer = new PIXI.Container();
        this.m_Background = new PIXI.Sprite.fromImage('planet_select_bg');
        this.m_GridBox = new CUIBox(854, 200);

        this.m_Grid = new CBattleSelect(resources, this.m_GridContainer);
        window.Grid = this.m_Grid;


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
        this.m_RewardCountdown = new PIXI.Text('');
        this.m_LeaveButton = new CUIButton(134, 34, 'Leave Planet'.toUpperCase());
        this.m_ZonesRemainingBox = new PIXI.Container();


        var max = 0;
        var maxx = 0;
        var maxy = 0;
        var info = null;
        console.groupCollapsed('tiles');
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
                if ((!params.captured) && params.clanurl) {
                    var rank = - params.progress + params.difficulty * 2;
                    if (rank > max) {
                        max = rank;
                        maxx = i;
                        maxy = j;
                        info = params;
                    }
                }



                console.log('tile:', i, j, params);
            }
        }
        console.groupEnd('tiles');

        ; (function (grid, x, y) {
            console.log('join zone:', maxx, maxy);
            console.log(info);
            setTimeout(() => grid.click(x, y), 2000)
        })(this.m_Grid, maxx, maxy);



        this.m_Logo = new PIXI.Sprite.fromImage('logo');
        this.m_LogoBG = new PIXI.Sprite.fromImage('logo_bg');
        this.m_Ship = new PIXI.Sprite.fromImage('ship');
        this.m_CustomizeButton = CreateCustomizeButton(220, 300);



    };


}