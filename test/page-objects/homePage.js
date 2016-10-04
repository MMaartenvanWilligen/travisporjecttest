/**
 * Created by maarten on 19-09-16.
 */

/*
* @desc page object homepage
*
* */

var webdriver = require("selenium-webdriver");
var Page = require("./page");
var until = webdriver.until;

/*
 * @desc constructor HomePage object
 * @param driver
 * */

function Home(driver) {

    Page.call(this, driver, "http://localhost:8000/website/index.html");
    console.log("driver" + " " + driver);

}

// subclass Homepage extends page
Home.prototype = Object.create(Page.prototype);
Home.prototype.constructor = Home;

/* @desc method get value header
 * need to manually handle the Promise so it can be handled by the mocha framework in first-test.js
 * @return promise of text header
 * */



/* @desc find element raised button
 * need to manually handle the Promise so it can be handled by the mocha framework in first-test.js
 * @return promise raised button element
 * */

Home.prototype.ctaButton = function () {
    var d = webdriver.promise.defer();
    this.driver.findElement(webdriver.By.id("ctaButton")).then(function (elm) {
        d.fulfill(elm);
    });
    return d.promise;
};

/* @desc method click on raised button
 * need to manually handle the Promise so it can be handled by the mocha framework in first-test.js
 * @return promise raised button element
 * */
Home.prototype.ctaButtonClick = function () {

    var d = webdriver.promise.defer();
    this.ctaButton().then(function (elm) {
        elm.click();
        d.fulfill(elm);
    });
    return d.promise;
};



/*
 * @desc export HomePage
 * */

module.exports = Home;






