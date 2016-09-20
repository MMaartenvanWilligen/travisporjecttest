/**
 * Created by maarten on 19-09-16.
 */

var page = require("./page");

//constructor
function HomePage(webdriver) {

    page.call(this, webdriver, "http://localhost:8000/website/index.html");

}

//subclass Homepage extends page
HomePage.prototype = Object.create(page.prototype);
HomePage.prototype.constructor = HomePage;


//method click on cta button
HomePage.prototype.ctaButtonClick = function () {

    var button = this.webdriver.findElement(webdriver.By.id("raisedbutton"));
    button.click();
};

//method return cta button
HomePage.prototype.ctaButton = function () {

    return this.webdriver.findElement(webdriver.By.id("raisedbutton"));
};

module.export = HomePage;






