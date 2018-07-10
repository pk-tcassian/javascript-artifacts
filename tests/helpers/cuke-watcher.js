var watch = require('node-watch');
var child_process = require('child_process');
var running = false;
var cucumber;

var JS_EXT = /^.*\.js/i;
var options = ['node_modules/.bin/cucumber-js', 
               'features', 
               '-r', 'step_definitions',
               '-f', 'pretty'];

watch(['./step_definitions', 'script'], {recursive:true}, function(filename) {

  if(!running && filename.match(JS_EXT)) {

    running = true;

    cucumber = child_process.spawn('node', options)
                    .on('exit', function() {
                      running = false;
                    });

    cucumber.stdout.on('data', function(d) {
      console.log(String(d));
    });

    cucumber.stderr.on('data', function(d) {
      console.error(String(d));
    });

  }

});