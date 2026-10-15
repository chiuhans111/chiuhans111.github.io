var p = require('child_process');
p.exec('webpack ./main.js ./dist/AI.js --optimize-minimize');
