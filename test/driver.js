/**
 * Created by maarten on 19-09-16.
 */
var webdriver = require("selenium-webdriver");
var driver;

function getDriver() {

    if (!driver) {

        return this.buildDriver();
    } else {
        return driver
    }

}


Driver.prototype.buildDriver = function () {

    if (process.env.SAUCE_USERNAME != undefined) {
        driver = new webdriver.Builder()
            .usingServer('http://' + process.env.SAUCE_USERNAME + ':' + process.env.SAUCE_ACCESS_KEY + '@ondemand.saucelabs.com:80/wd/hub')
            .withCapabilities({
                'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
                build: process.env.TRAVIS_BUILD_NUMBER,
                username: process.env.SAUCE_USERNAME,
                accessKey: process.env.SAUCE_ACCESS_KEY,
                browserName: "chrome"
            }).build();
    } else {
        driver = new webdriver.Builder()
            .withCapabilities({
                browserName: "chrome"
            }).build();
    }

    return driver;

};

module.export.getDriver = getDriver;






