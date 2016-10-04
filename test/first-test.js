var webdriver = require("selenium-webdriver");
var until = webdriver.until;
var assert = require("assert");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var Home = require("./page-objects/homePage");

/*
 * mocha describe
 * mocha is promise aware framework
 * */
describe("functional testing in real browser", function () {

    /*
     * declaring variables
     */

    var driver;
    var homepage;

    /*
     * @desc test HomePage
     *
     * */

    describe('Home page', function () {

        /*
         * @desc mocha before, initialize driver
         * */

        driver = "";
        before(function (done) {
            driver = require("./driver").GetDriver();
            done();
        });

        it("should open the homepage", function () {
            homepage = new Home(driver);
            return homepage.getUrl().then(function () {
                homepage.currentUrl().then(function (url) {
                    assert.equal(url, homepage.url);
                })
            });
        });

        it("The title is 'demo website'", function () {
            // Since we want the title from the page, we need to manually handle the Promise
            return driver.getTitle().then(function (title) {
                assert.equal(title, "Home Page");
            });
        });

        it("CTA button should have text raised", function () {
            return homepage.ctaButton().then(function (elm) {
                elm.getText().then(function (txt) {
                    assert.equal(txt, "RAISED");
                });
            });
        });

        it("Expect onclick text change to buttontransform", function () {
            return homepage.ctaButtonClick().then(function (elm) {
                elm.getText().then(function (txt) {
                    assert.equal(txt, "BUTTONTRANSFORM");
                });
            });
        });

    });

    /*
     * @desc mocha after, quit driver
     * */

    after(function () {
        return driver.quit();
    });
});
