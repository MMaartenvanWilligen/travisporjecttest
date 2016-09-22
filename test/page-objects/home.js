/**
 * Created by maarten on 19-09-16.
 */
// var webdriver = require("selenium-webdriver");
// var Page = require("./page");

/*
* constructor HomePage object
*
* driver
* */

var webdriver = require("selenium-webdriver");

function Home(driver, webdriver) {

    // Page.call(this, webdriver, "http://localhost:8000/website/index.html");
    this.driver = driver;
    //this.webdriver = webdriver;
    console.log("driver" + " " + this.driver);


}

// subclass Homepage extends page
// HomePage.prototype = Object.create(Page.prototype);
// HomePage.prototype.constructor = HomePage;

/*method click on cta button
*
* */

Home.prototype.ctaButtonClick = function () {
    this.driver.get("http://localhost:8000/website/index.html");
    var button = this.driver.findElement(webdriver.By.id("raisedbutton"));
    button.click();
    return this
};

/*method return cta button
*
*
* */
Home.prototype.ctaButton = function () {

    // this.driver.get("http://localhost:8000/website/index.html");
    return this.driver.findElement(webdriver.By.id("raisedbutton"));
};

/*
* export HomePage
* */
module.exports = Home;






