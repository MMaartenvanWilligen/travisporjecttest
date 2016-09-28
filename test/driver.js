/**
 * Created by maarten on 19-09-16.
 */
/*var webdriver = require("selenium-webdriver");*/
var webdriverjs = require('webdriverio');
var driver;

function GetDriver() {

    if (!driver) {
        driver = buildDriver();
        return driver;
    } else {
        return driver
    }

}

var buildDriver = function () {

    console.log("getDriver");

    if (process.env.SAUCE_USERNAME != undefined) {
        console.log("suace user name defined");
        driver = webdriverjs.remote({
            host: 'http://' + process.env.SAUCE_USERNAME + ':' + process.env.SAUCE_ACCESS_KEY + '@ondemand.saucelabs.com:80/wd/hub',
            desiredCapabilities: {
                user: process.env.SAUCE_USERNAME,
                key: process.env.SAUCE_ACCESS_KEY,
                browserName: 'chrome',
                'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
                'idle-timeout': 30000,
                build: process.env.TRAVIS_BUILD_NUMBER
            }
        }).init()
           .url("http://localhost:8000/website/index.html");

        return driver;

    } else {
        driver = webdriverjs.remote({
            desiredCapabilities: {
                browserName: "chrome"
            }

        }).init();

        return driver;
    }

};


module.exports.GetDriver = GetDriver;

