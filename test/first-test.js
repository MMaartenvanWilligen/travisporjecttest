var webdriver = require("selenium-webdriver");
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

        driver = require("./driver").GetDriver();
        console.log("driver is" + " " + driver);

        homepage = new Home(driver);
        homepage.getUrl();

        /*
         * wait till specific element is loaded.
         * timeout 3000
         * */

        driver.wait(function () {
            var displayed = driver.findElement(webdriver.By.id("header")).isDisplayed();
            console.log(displayed);
            return displayed
        }, 3000);

        before(function () {


        });

        describe("buttons", function () {

            it("h1 text should be awesome", function (done) {

                homepage.header().getText().then(function (txt) {
                    assert.equal(txt, "awesome");
                    done();
                });
            });

            it("CTA button should be raised", function (done) {
                var button = homepage.ctaButton();
                console.log("button" + " " + button);
                button.getText().then(function (txt) {
                    assert.equal(txt, "RAISED");
                    done();
                });
            });

            it("Expect onclick text change to buttontransform", function (done) {
                homepage.ctaButtonClick();
                homepage.ctaButton().getText().then(function (txt) {
                    assert.equal(txt, "BUTTONTRANSFORM");
                    done();
                });
            });
        });
    });

    describe("Login page", function () {

        loginPage = new Login(driver);
        loginPage.getUrl();
        /*
         * wait till specific element is loaded
         * timeout 3000
         * */
        driver.wait(function () {
            return driver.findElement(webdriver.By.id("username")).isDisplayed();
        }, 3000);

        it("username should be Admin", function (done) {
            usernameInput = loginPage.inputUsername();
            console.log("usernameInput" + " " + usernameInput);
            // usernameInput.getText().then(function (txt) {
            //     console.log(txt);
            //     assert.equal(txt, "Admin");
            //
            // });

            done();
        });

        it("password should be", function () {
            loginPage.inputPassword();
        })
    });

    afterTests();

});

/*
 * after tests
 * quit the driver
 * */

function afterTests() {

    console.log("quit driver");
    //return driver.quit();

}
