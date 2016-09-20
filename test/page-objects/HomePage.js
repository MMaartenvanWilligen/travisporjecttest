/**
 * Created by maarten on 19-09-16.
 */

var Page = require("./Page");

// subclass Homepage extends page
HomePage.prototype = Object.create(Page.prototype);
HomePage.prototype.constructor = HomePage;

//constructor
function HomePage(webdriver) {

    Page.call(this, webdriver, "http://localhost:8000/website/index.html");

}

//method click on cta button
HomePage.prototype.ctaButtonClick = function () {

    var button = this.webdriver.findElement(webdriver.By.id("raisedbutton"));
    button.click();
    return this
};

//method return cta button
HomePage.prototype.ctaButton = function () {

    return this.webdriver.findElement(webdriver.By.id("raisedbutton"));
};

module.export = HomePage;






