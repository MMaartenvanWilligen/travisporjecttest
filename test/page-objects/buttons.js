/**
 * Created by maarten on 27-09-16.
 */

var webdriver = require("selenium-webdriver");

var Page = require("./page");
function Buttons(driver) {

    Page.call(this, driver, "http://localhost:8000/website/index.html")
}

// subclass Buttons extends page
Buttons.prototype = Object.create(Page.prototype);
Buttons.prototype.constructor = Buttons;

Buttons.prototype.arrayAllButtons = function () {
    var buttons = this.driver.findElement(webdriver.By.className("button"));
    console.log(buttons);
    return buttons;
};

Buttons.prototype.CtaButton = function () {

    return this.driver.element('#raisedbutton');
};

Buttons.prototype.getTitle = function () {

    return this.driver.getTitle().then(console.log)
};

module.exports = Buttons;