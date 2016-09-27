/**
 * Created by maarten on 26-09-16.
 */

var webdriver = require("selenium-webdriver");
var assert = require("assert");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var Buttons = require("./page-objects/buttons");


describe("Buttons should visible by user", function () {


    var driver;
    var buttonsObject;

    /*
     * before first describe
     * set driver that interact with saucelabs
     * */

    driver = require("./driver").GetDriver();
    console.log("driver is" + " " + driver);


    before(function () {


    });

    after(function () {
        return driver.quit();
    });

    buttonsObject = new Buttons(driver);
    buttonsObject.getUrl();

    describe("should be within screen width and height", function () {


        var heightScreen = window.innerHeight;
        var widthScreen = window.innerWidth;

        console.log(heightScreen + " " + widthScreen);

        var buttons = buttonsObject.arrayAllButtons();

        console.log(buttons);

        it('should be visible in the screen', function () {


        });

    });

    describe("Should be before other elements", function () {

    });

    describe("Should not be behind other elements", function () {

    });

    describe("Should be clickable", function () {

    });

    describe("Button background should not be same color as background", function () {

    });

    describe("Text Should not be same color as background", function () {

    });

    it("Button should be css visible", function () {


    });

});


