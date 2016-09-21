/**
 * Created by maarten on 19-09-16.
 */

// var Page = require("./page");

/*
* constructor HomePage object
*
* driver
* */
function HomePage(driver) {

    // Page.call(this, webdriver, "http://localhost:8000/website/index.html");
    this.driver = driver;
    console.log(driver);

}

// subclass Homepage extends page
// HomePage.prototype = Object.create(Page.prototype);
// HomePage.prototype.constructor = HomePage;

/*method click on cta button
*
* */

HomePage.prototype.ctaButtonClick = function () {

    var button = this.driver.findElement(webdriver.By.id("raisedbutton"));
    button.click();

};

/*method return cta button
*
*
* */
HomePage.prototype.ctaButton = function () {

    return this.driver.findElement(webdriver.By.id("raisedbutton"));
};

/*
* export HomePage
* */
module.export = HomePage;






