const carlo = require('carlo');
const path = require('path');
const os = require('os');
const runServer = require('../server/index.js');

(async () => {
  let app;
  try {
    app = await carlo.launch(
      {
        bgcolor: '#e6e8ec',
        width: 800,
        height: 648 + 24,
        // icon: path.join(__dirname, '/app_icon.png'),
        channel: ['canary', 'stable'],
        localDataDir: path.join(os.homedir(), '.myApp'),
      });
  } catch(e) {
    // New window is opened in the running instance.
    console.log('Reusing the running instance', e);
    return;
  }

  app.on('exit', () => process.exit());
  // New windows are opened when this app is started again from command line.
  app.on('window', window => window.load('index.html'));
  app.serveFolder(path.join(__dirname, '..', 'dist'));
  runServer();
  await app.load('index.html');
})();
