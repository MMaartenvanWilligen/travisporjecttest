/**
 * Created by maarten on 29-09-16.
 */
var webdriver = require("selenium-webdriver");
var Page = require("./page");
var until = webdriver.until;

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

    return this.driver.findElement(webdriver.By.id("username"));

    //inputUserName.sendKeys('Maarten');
};

Login.prototype.inputUsernameGetValue = function () {

    this.driver.wait(until.elementLocated(webdriver.By.id('username')), 5000).then(function (elm) {
        return elm;
    });
};

Login.prototype.inputUsernameSetValue = function (inputText) {
    console.log(inputText);
    UsernameField = this.driver.findElement(webdriver.By.id("username"));
    UsernameField.sendKeys(inputText);
    return this

};

Login.prototype.inputPassword = function () {

};

Login.prototype.inputPasswordGetValue = function () {

};

Login.prototype.inputPasswordSetValue = function () {

};

Login.prototype.submitButton = function () {

    driver.findElement(webdriver.By.id('submit'));
};

Login.prototype.subMitButtonClick = function () {

    driver.findElement(webdriver.id('submit')).click();
    return this
};

module.exports = Login;


