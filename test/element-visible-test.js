/**
 * Created by maarten on 26-09-16.
 */

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





    buttonsObject = new Buttons(driver);
    buttonsObject.getUrl();

    describe("should be within screen width and height", function () {

        // var button = buttonsObject.CtaButton();

        // it('should be visible in the screen', function () {
        //m
        //     console.log("button" + " " + button);
        //     button.getText().then(function (txt) {
        //         console.log(txt);
        //         assert.equal(txt, "RAISED");
        //         done();
        //     });
        //
        // });

        it('should show title', function*() {
           buttonsObject.getTitle();
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




