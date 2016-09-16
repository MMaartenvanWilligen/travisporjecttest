var assert = require("assert");
var webdriver = require("selenium-webdriver");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

describe("testing javascript in the browser", function () {

    before(function () {
        if (process.env.SAUCE_USERNAME != undefined) {
            this.browser = new webdriver.Builder()
                .usingServer('http://' + process.env.SAUCE_USERNAME + ':' + process.env.SAUCE_ACCESS_KEY + '@ondemand.saucelabs.com:80/wd/hub')
                .withCapabilities({
                    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
                    build: process.env.TRAVIS_BUILD_NUMBER,
                    username: process.env.SAUCE_USERNAME,
                    accessKey: process.env.SAUCE_ACCESS_KEY,
                    browserName: "chrome"
                }).build();
        } else {
            this.browser = new webdriver.Builder()
                .withCapabilities({
                    browserName: "chrome"
                }).build();
        }

        return this.browser.get("http://localhost:8000/website/index.html");
    });

    after(function () {
        return this.browser.quit();
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

        it('should load the page properly', function () {
            assert.ok(true);
        });


        it('should navigate to login', function () {


        });


        it('should navigate to contact');
        it('should load analytics');
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

      ("./buttont");


    });


});
