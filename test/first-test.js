var webdriver = require("selenium-webdriver");
var assert = require("assert");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();
// var $ = require('jQuery');


var HomepageObject ;

describe("testing javascript in the browser", function () {

    var driver;

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
            // HomepageObject = new HomePage(driver);
        } else {
            driver = new webdriver.Builder()
                .withCapabilities({
                    browserName: "chrome"
                }).build();
            // HomepageObject = new HomePage(driver);
        }

        return driver.get("http://localhost:8000/website/index.html");

    });

    after(function () {
        return this.driver.quit();
    });

    describe("text set", function () {

        it("h1 should be awesome", function (done) {
            var headline = this.browser.findElement(webdriver.By.css('h1'));

            headline.getText().then(function (txt) {
                assert.equal(txt, "awesome");
                done();
            });
        });
    });

    describe('Home page', function () {

        //console.log('HompageObject.constructor is ' + HomepageObject.constructor);
        HomepageObject = new require("./page-objects/HomePage").constructor;

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

                HomepageObject.ctaButtonClick.getText().then(function (txt) {
                    assert.equal(txt, "RAISED");
                    done();
                });

            });

            it("expect onclick text change to buttontransform", function (done) {

                HomepageObject.ctaButtonClick();
                HomepageObject.ctaButton().getText().then(function (txt) {
                    assert.equal(txt, "BUTTONTRANSFORM");
                    done();
                });

            });

        });

    });

});
