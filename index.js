'use strict';
var fs = require('fs');
var path = require('path');

var lame = require('lame');
var Speaker = require('speaker');

var audioPath = path.join(__dirname, 'audio/Breakfast-Machine.mp3');

fs.createReadStream(audioPath)
  .pipe(new lame.Decoder())
  .on('format', console.log)
  .pipe(new Speaker());
