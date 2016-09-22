var webdriver = require("selenium-webdriver");
var assert = require("assert");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var Home = require("./page-objects/home");


describe("testing javascript in the browser", function () {

    var driver;
    var homepage;

    /*
     * before first describe
     * set driver that interact with saucelabs
     * */

    driver = require("./driver").GetDriver();
    console.log("driver is" + " " + driver);

    /*
     * after describe
     * quit the driver
     * */
    before(function () {


    });

    after(function () {
       return driver.quit();
    });

    /*
     * test HomePage
     * */

    describe('Home page', function () {

        /*
         * set Page Object Home
         * Go to local url with sauce labs tunnel
         * ready fo testing
         * */

        homepage = new Home(driver);
        homepage.getUrl();

        it("h1 should be awesome", function (done) {
            homepage.header().getText().then(function (txt) {
                assert.equal(txt, "awesome");
                done();
            });
        });


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

                var button = homepage.ctaButton();
                console.log("button" + " " + button);
                button.getText().then(function (txt) {
                    assert.equal(txt, "RAISED");
                    done();
                });

            });

            it("expect onclick text change to buttontransform", function (done) {

                homepage.ctaButtonClick();
                homepage.ctaButton().getText().then(function (txt) {
                    assert.equal(txt, "BUTTONTRANSFORM");
                    done();
                });

            });

        });

    });

});
