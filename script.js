var spawn = require('child_process').spawn;
spawn('opa', ['-e', 'entry.js', '-n', '-p', '11005'])
