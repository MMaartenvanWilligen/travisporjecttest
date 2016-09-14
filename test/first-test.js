var client = require('webdriverio').remote({
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    host: 'localhost',
    port: 63342
    desiredCapabilities: {
        browserName: 'chrome'
    }
});

client
    .init()
    .url('http://localhost:63342/travisprojecttest/Website/index.html')
    .getTitle().then(console.log)
    .end();