var webdriver = require("selenium-webdriver");
var assert = require("assert");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var Home = require("./page-objects/homePage");
var Login = require("./page-objects/loginPage");
var Contact = require("./page-objects/contactPage");


describe("testing javascript in the browser", function () {

    var driver;
    var homepage;
    var loginPage;

    /*
     * before first describe
     * set driver that interact with saucelabs
     * */



    /*
     * after describe
     * quit the driver
     * */



    after(function () {
        return driver.quit();
    });


    beforeEach(function(){
        console.log('see.. this function is run EACH time, before each describe()')
    });

    /*
     * test HomePage
     *
     * */
    describe('Home page', function () {

        before(function () {
            driver = require("./driver").GetDriver();
            console.log("driver is" + " " + driver);

            homepage = new Home(driver);
            homepage.getUrl();
        });


        /*
         * set Page Object Home
         * Go to local url with sauce labs tunnel
         * ready fo testing
         * */


        it("h1 text should be awesome", function (done) {
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

            it("Expect onclick text change to buttontransform", function (done) {

                homepage.ctaButtonClick();
                homepage.ctaButton().getText().then(function (txt) {
                    assert.equal(txt, "BUTTONTRANSFORM");
                    done();
                });

            });


        });

    });

    // describe("inlog", function () {
    //
    //     driver = require("./driver").GetDriver();
    //     console.log("driver is" + " " + driver);
    //
    //     loginPage = new Login(driver);
    //     loginPage.getUrl();
    //
    //     it("username should be Maarten", function (done) {
    //        inputUserName =  loginPage.inputUsername();
    //         inputUserName.sendKeys('Cheese');
    //         inputUserName.getText().then(function (txt) {
    //             assert.equal(txt, "Cheese");
    //             done();
    //         });
    //
    //     });
    //
    //     it("password should be", function () {
    //         loginPage.inputPassword();
    //     })
    //
    // });

});
