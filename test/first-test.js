var webdriver = require("selenium-webdriver");
var until = webdriver.until;
var assert = require("assert");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var Home = require("./page-objects/homePage");
var Login = require("./page-objects/loginPage");
var Contact = require("./page-objects/contactPage");


describe("testing javascript in the browser", function () {

    /*
     * declaring variables
     */

    var driver;
    var homepage;
    var loginPage;
    var contactPage;

    /*
     * test HomePage
     *
     * */

    describe('Home page', function () {

        /*
         * before
         * set new driver that interact with saucelabs
         *
         * set Page Object Home
         * Go to local url with sauce labs tunnel
         * ready for testing
         * */

        driver = "";
        before(function (done) {
            console.log("before");
            driver = require("./driver").GetDriver();
            console.log("driver is" + " " + driver);
            done();
        });

        it("should open the homepage", function () {
            homepage = new Home(driver);
            return homepage.getUrl();
        });

        /*
         * wait till specific element is loaded.
         * timeout 3000
         * */

        // driver.wait(function () {
        //     var displayed = driver.findElement(webdriver.By.id("header")).isDisplayed();
        //     console.log(displayed);
        //     return displayed
        // }, 3000);

        it("The title is 'demo website'", function () {
            // Since we want the title from the page, we need to manually handle the Promise
            return driver.getTitle().then(function (title) {
                assert.equal(title, "demo website");
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

        after(function () {
            return driver.quit();
        });

    });

    describe("Login page", function () {

        driver = "";
        before(function (done) {
            console.log("before");
            driver = require("./driver").GetDriver();
            console.log("driver is" + " " + driver);
            done();
        });

        it("should open the homepage", function () {
            loginPage = new Login(driver);
            loginPage.getUrl();
        });
        /*
         * wait till specific element is loaded
         * timeout 3000
         * */
        // driver.wait(function () {
        //     return driver.findElement(webdriver.By.id("username")).isDisplayed();
        // }, 3000);

        it("username should be Admin", function (done) {
            inputUsername = loginPage.inputUsername();
            console.log("usernameInput" + " " + inputUsername);
            console.log("usernameInput" + " " + loginPage.inputUsername());
            // usernameInput.getText().then(function (txt) {
            //     console.log(txt);
            //     assert.equal(txt, "Admin");
            //
            // });
            done();
        });

        it("password should be", function () {
            loginPage.inputPassword();
        });
    });
    //afterTests();
    after(function () {
        return driver.quit();
    });
});

/*
 * after tests
 * quit the driver
 * */

// function afterTests() {
//
//     console.log("quit driver");
//     //return driver.quit();
//
// }
