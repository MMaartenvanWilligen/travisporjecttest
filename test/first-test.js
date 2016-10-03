var webdriver = require("selenium-webdriver");
var until = webdriver.until;
var assert = require("assert");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var Home = require("./page-objects/homePage");
var Login = require("./page-objects/loginPage");
var Contact = require("./page-objects/contactPage");

/*
 * mocha describe
 * promise aware framework
 * */
describe("testing javascript in the browser", function () {

    /*
     * declaring variables
     */

    var driver;
    var homepage;
    var loginPage;
    var contactPage;

    /*
     * @desc test login page
     * */

    describe("Login page", function () {

        driver = "";

        /*
         * before test initialize driver
         *
         * */
        before(function (done) {
            driver = require("./driver").GetDriver();
            done();
        });

        it("should open the loginPage", function () {
            loginPage = new Login(driver);
            return loginPage.getUrl();
        });

        it("The title should be 'Login page'", function () {
            // Since we want the title from the page,
            return driver.getTitle().then(function (title) {
                assert.equal(title, "Login page");
            });
        });

        it("should set value username field to 'Admin'", function () {
            loginPage.inputUsernameSetValue("Admin");
            return loginPage.inputUsernameGetValue().then(function (text) {
                assert.equal(text, "awesome");
            });
        });

        it("should set value password field to 'Password'", function () {
            loginPage.inputUsernameSetValue("Password");
            return loginPage.inputUsernameGetValue().then(function (text) {
                assert.equal(text, "Password");
            });
        });

        it("password should be", function () {
            return loginPage.inputPassword();
        });
    });

    /*
     * @desc test HomePage
     *
     * */

    describe('Home page', function () {

        /* @desc mocha before test
         * need to manually handle the Promise so it can be handled by the mocha framework in first-test.js
         * new Page Object Home
         * Go to url with sauce labs tunnel
         *
         * */

        driver = "";
        before(function (done) {
            driver = require("./driver").GetDriver();
            done();
        });

        it("should open the homepage", function () {
            homepage = new Home(driver);
            return homepage.getUrl();
        });

        it("The title is 'demo website'", function () {
            // Since we want the title from the page, we need to manually handle the Promise
            return driver.getTitle().then(function (title) {
                assert.equal(title, "Home Page");
            });
        });

        it("h1 text should be awesome", function () {
            return homepage.header().then(function (text) {
                assert.equal(text, "awesome");
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
