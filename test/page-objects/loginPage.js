/**
 * Created by maarten on 29-09-16.
 */
var webdriver = require("selenium-webdriver");
var Page = require("./page");

/*
 * constructor HomePage object
 *
 * driver
 * */

function Login(driver) {

    Page.call(this, driver, "http://localhost:8000/website/loginPage.html");
    console.log("driver" + " " + driver);

}

// subclass Homepage extends page
Login.prototype = Object.create(Page.prototype);
Login.prototype.constructor = Login;

Login.prototype.inputUsername = function () {

    var usernameInput = this.driver.findElement(webdriver.By.id("username"));
    inputUserName.sendKeys('Maarten');
    return usernameInput;

};

Login.prototype.inputPassword = function () {

};


module.exports = Login;
