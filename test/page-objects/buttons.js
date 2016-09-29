/**
 * Created by maarten on 27-09-16.
 */



var Page = require("./page");
function Buttons(driver) {

    Page.call(this, driver, "http://localhost:8000/website/index.html")
}

// subclass Buttons extends page
Buttons.prototype = Object.create(Page.prototype);
Buttons.prototype.constructor = Buttons;

Buttons.prototype.arrayAllButtons = function () {

    return
};

Buttons.prototype.CtaButton = function () {

    return
};

Buttons.prototype.getTitle = function () {

    return
};

module.exports = Buttons;