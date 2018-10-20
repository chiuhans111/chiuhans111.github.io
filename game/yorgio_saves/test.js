// ==UserScript==
// @name YORG.IO
// @namespace Violentmonkey Scripts
// @match https://yorg.io/
// @grant none
// ==/UserScript==



if (confirm("you want gems?")) {







    hehe = JSON.parse
    JSON.parse = function (s) {
        let result = hehe(s)
        console.log("---- parse:", result);
        console.groupCollapsed('trace');
        console.trace();
        console.groupEnd('trace');

        // hack

        if (typeof result.gamemode === 'string' && result.stats != null) {
            result.stats.gems = 999999999999999999
            result.stats.points = 999
            result.daySeconds = -138
            result.buildings.map(building => {
                building.storage.Healing = 999
            })

        }


        return result
    }
}