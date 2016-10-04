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

    describe("Should login on login page", function () {

        driver = "";

        /*
         * @desc before test initialize driver
         * */

        before(function (done) {
            driver = require("./driver").GetDriver();
            done();
        });

        it("should open the loginPage", function () {
            loginPage = new Login(driver);
            return loginPage.getUrl().then(function () {
                loginPage.currentUrl().then(function (url) {
                    console.log(url);
                    console.log("url" + url.toString());
                    //assert.equal(url, loginPage.url);
                })
            });
        });

        it("The title should be 'Login page'", function () {
            // Since we want the title from the page,
            return driver.getTitle().then(function (title) {
                assert.equal(title, "Login page");
            });
        });

        it("should set value username field to 'Admin'", function () {
            return loginPage.inputUsernameSetValue("Admin12").then(function () {
                loginPage.inputUsernameGetValue().then(function (value) {
                    assert.equal(value, "Admin");
                });
            });
        });

        it("should set value password field to 'Password'", function () {
            return loginPage.inputPasswordSetValue("Password").then(function () {
                loginPage.inputPasswordGetValue().then(function (value) {
                    assert.equal(value, "Password");
                });
            });
        });

        it("should not return errors", function () {
            return loginPage.ErrorHandlingFormSpan().then(function (elm) {
                elm.isDisplayed().then(function (bool) {
                    assert.equal(false, bool)
                })
            })
        });

        it("after submit should go to index", function () {
            return loginPage.submitClick().then(function () {
                driver.getTitle().then(function (title) {
                    assert.equal(title, "Home Page");
                });
            });

        });
    });

    describe("Should login", function () {

        driver = "";

        /*
         * @desc before test initialize driver
         * */

        before(function (done) {
            driver = require("./driver").GetDriver();
            done();
        });

        it("should open the loginPage", function () {
            return loginPage.getUrl();
        });

        /*
         * login
         * */

        it("should login", function () {
            return loginPage.loginProcess().then(function () {
                driver.getTitle().then(function (title) {
                    assert.equal(title, "Home Page");
                });
            });
        });
    });


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
            return homepage.getUrl();
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
})
;
