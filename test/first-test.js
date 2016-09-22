var webdriver = require("selenium-webdriver");
var assert = require("assert");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();
// var $ = require('jQuery');


var HomepageObject;
var Home = require("./page-objects/home");

describe("testing javascript in the browser", function () {
    var driver;

    /*before test start a new webdriver. This webdriver uses the saucelabs browser.
     *
     * start selenium webdriver that uses chrome browser on saucelabs
     *
     * */

    before(function () {
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

        } else {
            driver = new webdriver.Builder()
                .withCapabilities({
                    browserName: "chrome"
                }).build();

        }

        /*direct to the demo website
         *
         * Saucelabs has access to local website via tunnel
         *
         * */
        return driver.get("http://localhost:8000/website/index.html");

    });

    /*after the tests quit the driver
     *
     * */

    after(function () {
        // return this.driver.quit();
    });

    describe("text set", function () {

        it("h1 should be awesome", function (done) {
            var headline = driver.findElement(webdriver.By.css('h1'));

            headline.getText().then(function (txt) {
                assert.equal(txt, "awesome");
                done();
            });
        });
    });

    describe('Home page', function () {

        //console.log('HompageObject.constructor is ' + HomepageObject.constructor);
        //HomepageObject = new require("./page-objects/HomePage").constructor(this.driver, this.webdriver);

        homepageObject = new Home(driver, webdriver);

        it('should load the page properly', function () {

        });

        describe('Images', function () {
            it('should be visible in the screen');
            it('should be more then 0px height and width');
            it('should have rel');

        });

        describe('Form', function () {

            describe("before submit", function () {


            });

            describe("test after submit ", function () {
                it("expect status 200 after submit");
                it("should return error for false email");
            });
        });

        describe("buttons", function () {

            it("CTA button should be raised", function (done) {

                button = homepageObject.ctaButton();
                console.log("button" + " " + button);
                    button.getText().then(function (txt) {
                    assert.equal(txt, "RAISED");
                    done();
                });

            });

            it("expect onclick text change to buttontransform", function (done) {

                homepageObject.ctaButtonClick();
                homepageObject.ctaButton().getText().then(function (txt) {
                    assert.equal(txt, "BUTTONTRANSFORM");
                    done();
                });

            });

        });

    });

});
