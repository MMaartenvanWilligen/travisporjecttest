/**
 * Created by maarten on 19-09-16.
 */
var webdriver = require("selenium-webdriver");
var Page = require("./page");

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

      return this.driver.findElement(webdriver.By.css('h1'));
};


Home.prototype.ctaButtonClick = function () {

    var button = this.driver.findElement(webdriver.By.id("raisedbutton"));
    button.click();
    return this
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






