/**
 * Created by maarten on 04-10-16.
 */

var webdriver = require("selenium-webdriver");
var until = webdriver.until;
var assert = require("assert");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var Login = require("./page-objects/loginPage");

describe("functional testing in real browser", function () {

    /*
     * declaring variables
     */

    var driver;
    var loginpage;

    /*
     * @desc test login page
     * */

    before(function (done) {
        driver = require("./driver").GetDriver();
        done();
        loginpage = new Login(driver);
    });

    describe("Login test", function () {

        /*
         * @desc before test initialize driver
         * */
        // before(function (done) {
        //     driver = require("./driver").GetDriver();
        //     done();
        //     loginpage = new Login(driver);
        // });

        it("should open the loginPage", function () {

            return loginpage.getUrl().then(function () {
                loginpage.currentUrl().then(function (url) {
                    assert.equal(url, loginpage.url);
                })
            });
        });

        it("The title should be 'Login page'", function () {
            return driver.getTitle().then(function (title) {
                assert.equal(title, "Login page");
            });
        });

        it("should set value username field to 'Admin'", function () {
            return loginpage.inputUsernameSetValue("Admin12").then(function () {
                loginpage.inputUsernameGetValue().then(function (value) {
                    assert.equal(value, "Admin");
                });
            });
        });

        it("should set value password field to 'Password'", function () {
            return loginpage.inputPasswordSetValue("Password").then(function () {
                loginpage.inputPasswordGetValue().then(function (value) {
                    assert.equal(value, "Password");
                });
            });
        });

        it("should not show texfield-errors", function () {
            return loginpage.ErrorHandlingFormSpan().then(function (elm) {
                elm.isDisplayed().then(function (bool) {
                    assert.equal(false, bool)
                })
            })
        });

        it("after submit should go to index", function () {
            return loginpage.submitClick().then(function () {
                driver.getTitle().then(function (title) {
                    assert.equal(title, "Home Page");
                });
            });

        });
    });

    describe("Should login whitout intermediate steps", function () {

        /*
         * @desc before test initialize driver
         * */

        it("should open the loginPage", function () {
            return loginpage.getUrl().then(function () {
                loginpage.currentUrl().then(function (url) {
                    assert.equal(url, loginpage.url);
                })
            });
        });

        /*
         * @login directly without checking intermediate steps
         * */

        it("should login", function () {
            return loginpage.loginProcess().then(function () {
                driver.getTitle().then(function (title) {
                    assert.equal(title, "Home Page");
                });
            });
        });
    });

    after(function () {
        return driver.quit();
    });

});
