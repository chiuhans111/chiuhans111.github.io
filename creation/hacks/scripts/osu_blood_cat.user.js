// ==UserScript==
// @name OSU Bloodcat download
// @namespace Violentmonkey Scripts
// @match https://osu.ppy.sh/*
// @grant none
// ==/UserScript==

!function (window) {
    let oldlink = null

    window.addEventListener('popstate', e => {
        trygetlink()
    })

    window.addEventListener('load', e => {
        trygetlink()
    })

    setInterval(trygetlink, 500)

    let newbutton = null

    function trygetlink() {
        console.log('hi')
        let prefix = 'https://bloodcat.com/osu/s/'
        let downloadLink = prefix + window.location.href.match(/beatmapsets\/(\d+)/)[1]
        let bar = document.querySelector('.beatmapset-header__buttons')
        if (bar == null) return

        let oldbutton = bar.querySelector('.js-beatmapset-download-link')



        if (newbutton == null) {
            newbutton = oldbutton.cloneNode(true)
            newbutton.querySelector('.btn-osu-big__text-top').textContent = "BloodCat"
            newbutton.style.filter = "hue-rotate(160deg)"
        }

        if (newbutton.parent != bar)
            bar.append(newbutton)

        if (downloadLink == oldlink) return
        oldlink = downloadLink




        newbutton.href = downloadLink


    }


}(window)
