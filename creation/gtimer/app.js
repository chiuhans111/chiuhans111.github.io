var https = require('https');
var stream = require('stream')
function httpsGet(url, callback) {
    https.get(url, res => {

        var str = new stream();
        res.on('data', chunk => str.push(chunk));
        res.on('end', () => {
            
            callback(str, res.headers)
        })
    })
}

var fs = require("fs");
httpsGet('https://www.google.com.tw/search?q=1&tbm=isch',
    str => {
        var img = str.match(/<img[^>]*?>/g)
            .map(x => x.match(/src="(.*?)"/)[1]).slice(0, 3);

        img.map(i => {

        })
    })