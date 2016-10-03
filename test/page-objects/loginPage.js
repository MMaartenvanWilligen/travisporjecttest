/**
 * Created by maarten on 29-09-16.
 */
var webdriver = require("selenium-webdriver");
var Page = require("./page");
var until = webdriver.until;

/*
 * constructor HomePage object
 *
 * @param driver
 * */

function Login(driver) {

    Page.call(this, driver, "http://localhost:8000/website/loginPage.html");
    console.log("driver" + " " + driver);
}

// subclass Homepage extends page
Login.prototype = Object.create(Page.prototype);
Login.prototype.constructor = Login;


/* @desc method get input field username
 * need to manually handle the Promise so it can be handled by the mocha framework in first-test.js
 * @return promise of element username field
 * */

Login.prototype.inputUsername = function () {
    var d = webdriver.promise.defer();
    this.driver.findElement(webdriver.By.id("username")).then(function (elm) {
        d.fulfill(elm);
    });
    return d.promise;

    //inputUserName.sendKeys('Maarten');
};

/* @desc method get value of input field username
 * need to manually handle the Promise so it can be handled by the mocha framework in first-test.js
 * @return promise value username
 * */
Login.prototype.inputUsernameGetValue = function () {

    var d = webdriver.promise.defer();
    this.driver.findElement(webdriver.By.id("username")).getText.then(function (text) {
        d.fulfill(text);
    });
    return d.promise;
};

/* @desc method set input field username
 * need to manually handle the Promise so it can be handled by the mocha framework in first-test.js
 * @return promise
 * */
Login.prototype.inputUsernameSetValue = function (inputText) {
    var d = webdriver.promise.defer();
    this.driver.findElement(webdriver.By.id("username")).then(function (elm) {
        elm.sendKeys(inputText);
        d.fulfill(elm);
    });
    return d.promise;
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


