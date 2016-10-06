/**
 * Created by maarten on 19-09-16.
 */

var driver;
var webdriver = require("selenium-webdriver");


/*
 * @desc build driver if driver is not yet set
 * */
function GetDriver() {

        driver = buildDriver();
        return driver;
}

/*
 * @desc build driver with saucelabs tunnel
 * selenium driver that uses saucelabs
 * saucelabs tunnel needed for suacelabs to access the localhost
 *
 * @return driver
 * */

var buildDriver = function () {

    if (process.env.SAUCE_USERNAME != undefined) {
        console.log("suace user name defined");
        driver = new webdriver.Builder()
            .usingServer('http://' + process.env.SAUCE_USERNAME + ':' + process.env.SAUCE_ACCESS_KEY + '@ondemand.saucelabs.com:80/wd/hub')
            .withCapabilities({
                'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
                build: process.env.TRAVIS_BUILD_NUMBER,
                username: process.env.SAUCE_USERNAME,
                accessKey: process.env.SAUCE_ACCESS_KEY,
                browserName: "chrome"
            }).build();

        return driver;

    } else {
        driver = new webdriver.Builder()
            .withCapabilities({
                browserName: "chrome"
            }).build();

        return driver;
    }

};

module.exports.GetDriver = GetDriver;

