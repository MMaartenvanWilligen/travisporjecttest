/**
 * Created by maarten on 19-09-16.
 */
var webdriver = require("selenium-webdriver");
var Page = require("./page");
var until = webdriver.until;

/*
 * constructor HomePage object
 *
 * driver
 * */

function Home(driver) {

    Page.call(this, driver, "http://localhost:8000/website/index.html");
    console.log("driver" + " " + driver);

}

// subclass Homepage extends page
Home.prototype = Object.create(Page.prototype);
Home.prototype.constructor = Home;

/* method click on cta button
 *
 * */

Home.prototype.header = function () {
    var d = webdriver.promise.defer();
    this.driver.findElement(webdriver.By.id("header")).getText().then(function(text) {
        d.fulfill(text);
    });
    return d.promise;
};

Home.prototype.ctaButtonClick = function () {
    var element;

    this.driver.wait(until.elementLocated(webdriver.By.id("raisedbutton")), 5000).then(function (elm) {
        element = elm;
        elm.click();
    });

    return element;

    // var button = this.driver.findElement(webdriver.By.id("raisedbutton"));
    // button.click();
    // return this
};

/*method return cta button
 *
 * */

Home.prototype.ctaButton = function () {

    return this.driver.findElement(webdriver.By.id("raisedbutton"));
};

/*
 * export HomePage
 * */

module.exports = Home;






