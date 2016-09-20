var assert = require("assert");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();
// var $ = require('jQuery');

var HomePage = require("./page-objects/HomePage");
var HomepageObject ;

describe("testing javascript in the browser", function () {

    var driver;

    before(function () {
        console.log("before");
        driver = require(" ./GetDriver").GetDriver();
        console.log(driver);
        HomepageObject = new HomePage(driver);
    });

    after(function () {
        return this.driver.quit();
    });

    describe("text set", function () {

        it("h1 should be awesome", function (done) {
            var headline = this.browser.findElement(webdriver.By.css('h1'));

            headline.getText().then(function (txt) {
                assert.equal(txt, "awesome");
                done();
            });
        });
    });

    describe('Home page', function () {


        console.log('HompageObject.constructor is ' + HomepageObject.constructor);

        it('should load the page properly', function () {

        });

        //
        // it('should navigate to login', function () {
        //
        //
        // });
        //
        //
        // it('should navigate to contact', function (done) {
        //     driver.getTitle().then(function (title) {  // WebDriver command
        //         expect(title).toBe('Contact');
        //     });
        //
        //     driver.getTitle().then(function (title) {  // WebDriver command
        //         expect(title).toBe('Google');
        //         it('should load analytics');
        //     });
        // });

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
                HomepageObject.getUrl();
                HomepageObject.ctaButton().getText().then(function (txt) {
                    assert.equal(txt, "RAISED");
                    done();
                });

            });

            it("expect onclick text change to buttontransform", function (done) {

                HomepageObject.ctaButtonClick();
                HomepageObject.ctaButton().getText().then(function (txt) {
                    assert.equal(txt, "BUTTONTRANSFORM");
                    done();
                });

            });

        });

    });

});
