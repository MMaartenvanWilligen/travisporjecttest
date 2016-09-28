/**
 * Created by maarten on 19-09-16.
 */
/*var webdriver = require("selenium-webdriver");*/

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
        var driver = require('webdriverio').remote({
            user: process.env.SAUCE_USERNAME,
            key: process.env.SAUCE_ACCESS_KEY,
            host: 'localhost',
            port: 4445,
            desiredCapabilities: {
                browserName: 'chrome'
            }
        });

        return driver;

    } else {
        driver = require('webdriverio').remote({
            desiredCapabilities: {
                browserName: "chrome"
            }

        }).init();

        return driver;
    }

};


module.exports.GetDriver = GetDriver;

