var Webdriver = require("selenium-webdriver");
var s = require("util").format;
var assert = require('assert');

describe("test", function () {
    it("this", function () {
        var driver = new Webdriver.Builder()
            .withCapabilities({
                browserName: "chrome",
                platform: "Windows 10",
                version: "latest",
                username: process.env.SAUCE_USERNAME,
                accessKey: process.env.SAUCE_ACCESS_KEY,
                // tunnelIdentifier: "Maartenconnect" // matches name of my tunnel
            })
            .usingServer(s("http://%s:%s@ondemand.saucelabs.com:80/wd/hub",
                process.env.SAUCE_USERNAME, process.env.SAUCE_ACCESS_KEY))
            .build();

        return driver.get("http://localhost:63342/travisprojecttest/Website/index.html")
            .then(function () {
                // bunch of Selenium commands
                var searchBox = driver.findElement(webdriver.By.name('button'));
                searchBox.sendKeys('webdriver');
                searchBox.getAttribute('value').then(function (value) {
                    assert.equal(value, 'raised');
//     });

                })
            })
    })
});

// var assert = require('assert'),
//     test = require('selenium-webdriver/testing'),
//     webdriver = require('selenium-webdriver'),
//     SauceLabs = require("saucelabs"),
//     username = process.env.SAUCE_USERNAME,
//     accessKey = process.env.SAUCE_ACCESS_KEY,
//     saucelabs = new SauceLabs({
//       username: username,
//       password: accessKey
//     });
//
// test.describe('Google Search', function() {
//   this.timeout(60000);
//
//   var driver;
//
//   test.beforeEach(function() {
//     var browser = "chrome",
//         // version = process.env.VERSION,
//         // platform = process.env.PLATFORM,
//         server = "http://" + username + ":" + accessKey +
//             "@ondemand.saucelabs.com:80/wd/hub";
//
//     driver = new webdriver.Builder().
//     withCapabilities({
//       'browserName': browser,
//       // 'platform': platform,
//       // 'version': version,
//       'username': username,
//       'accessKey': accessKey
//     }).
//     usingServer(server).
//     build();
//
//     driver.getSession().then(function (sessionid){
//       driver.sessionID = sessionid.id_;
//     });
//
//   });
//
//   test.afterEach(function(done) {
//     var title = this.currentTest.title,
//         passed = (this.currentTest.state === 'passed') ? true : false;
//
//     driver.quit();
//
//     saucelabs.updateJob(driver.sessionID, {
//       name: title,
//       passed: passed
//     }, done);
//   })
//
//   test.it('searching for webdriver using google', function() {
//     driver.get('http://google.com');
//
//     var searchBox = driver.findElement(webdriver.By.name('q'));
//     searchBox.sendKeys('webdriver');
//     searchBox.getAttribute('value').then(function(value) {
//       assert.equal(value, 'webdriver');
//     });
//
//   });
// });


// beforeEach(function() {
//   if (process.env.SAUCE_USERNAME != undefined) {
//     this.browser = new webdriver.Builder()
//         .usingServer('http://'+ process.env.SAUCE_USERNAME+':'+process.env.SAUCE_ACCESS_KEY+'@ondemand.saucelabs.com:80/wd/hub')
//         .withCapabilities({
//           'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
//           build: process.env.TRAVIS_BUILD_NUMBER,
//           username: process.env.SAUCE_USERNAME,
//           accessKey: process.env.SAUCE_ACCESS_KEY,
//           browserName: "chrome"
//         }).build();
//   } else {
//     this.browser = new webdriver.Builder()
//         .withCapabilities({
//           browserName: "chrome"
//         }).build();
//   }
//
//   return this.browser.get("http://localhost:63342/travisprojecttest/Website/index.html");
// });


// var webdriver = require('selenium-webdriver'), // muse use selenium-webdriver version <=2.47.0
//     username = "YOUR_SAUCE_USERNAME",
//     accessKey = "YOUR_SAUCE_ACCESS_KEY",
//     driver;
//
//
//
// driver = webdriver.Remote(
//     command_executor='http://Maartenconnect:4fd375a2-a635-42fb-860e-346e4d6691a6@localhost:4445/wd/hub',
//     desired_capabilities=desired_cap)
//
// usingServer("http://" + username + ":" + accessKey +
//     "@ondemand.saucelabs.com:80/wd/hub").
// build();
//
// driver.get('http://saucelabs.com/test/guinea-pig');
//
// driver.getTitle().then(function (title) {
//   console.log("title is: " + title);
// });
//
// driver.quit();

//
// var assert = require('assert');
// describe('String#split', function(){
//   it('should return an array', function(){
//     assert(Array.isArray('a,b,c'.split(',')));
//   });
// })


