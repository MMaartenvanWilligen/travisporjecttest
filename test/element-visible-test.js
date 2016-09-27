/**
 * Created by maarten on 26-09-16.
 */

var webdriver = require("selenium-webdriver");
var assert = require("assert");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var Buttons = require("./page-objects/buttons");



Describe("Buttons should visible by user", function () {


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

    Describe("should be within screen width and height", function () {

        var heightScreen = driver.manage().window().getSize().getHeight();
        var widthScreen = driver.manage().window().getSize().getWidth();

        console.log(heightScreen + " " + widthScreen);

        var buttons = buttonsObject.arrayAllButtons();

        console.log(buttons);

    });

    Describe("Should be before other elements", function () {

    });

    Describe("Should not be behind other elements", function () {

    });

    Describe("Should be clickable", function () {

    });

    Describe("Button background should not be same color as background", function () {

    });

    Describe("Text Should not be same color as background", function () {

    });

    it("Button should be css visible", function () {



    });

});


