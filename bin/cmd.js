#!/usr/bin/env node
var path = require('path');

var spawn = require('child_process').spawn;
var fork = require('child_process').fork;

var argv = require('minimist')(process.argv.slice(2));
var command = argv._[0];
var args = argv._.slice(1);

var songPath = path.join(__dirname, '../index.js');

var playSong = fork(songPath, {
  silent: true
});

var child = spawn(command, args, {
  stdio: 'inherit'
});

child.on('close', function () {
  playSong.kill();
});
