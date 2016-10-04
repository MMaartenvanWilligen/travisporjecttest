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
    this.inputUsername().then(function (elm) {
        elm.getAttribute("value").then(function (value) {
            d.fulfill(value);
        });
    });
    return d.promise;
};

/* @desc method set input field username
 * need to manually handle the Promise so it can be handled by the mocha framework in first-test.js
 * @return promise
 * */
Login.prototype.inputUsernameSetValue = function (inputText) {
    var d = webdriver.promise.defer();
    this.inputUsername().then(function (elm) {
        elm.sendKeys(inputText);
        d.fulfill(elm);
    });
    return d.promise;
};

Login.prototype.inputPassword = function () {
    var d = webdriver.promise.defer();
    this.driver.findElement(webdriver.By.id("userpass")).then(function (elm) {
        d.fulfill(elm);
    });
    return d.promise;
};

Login.prototype.inputPasswordGetValue = function () {
    var d = webdriver.promise.defer();
    this.inputPassword().then(function (elm) {
        elm.getAttribute("value").then(function (value) {
            d.fulfill(value);
        });
    });
    return d.promise;
};

Login.prototype.inputPasswordSetValue = function (inputText) {
    var d = webdriver.promise.defer();
    this.inputPassword().then(function (elm) {
        elm.sendKeys(inputText);
        d.fulfill(elm);
    });
    return d.promise;
};

Login.prototype.submitButton = function () {
    var d = webdriver.promise.defer();
    this.driver.findElement(webdriver.By.id('submit')).then(function (elm) {
        d.fulfill(elm);
    });
    return d.promise;
};

Login.prototype.submitClick = function () {
    var d = webdriver.promise.defer();
    this.submitButton().then(function (elm) {
        elm.click();
        d.fulfill(elm);
    });
    return d.promise
};

Login.prototype.ErrorHandlingFormSpan = function () {
    var d = webdriver.promise.defer();
    this.driver.findElement(webdriver.By.className("mdl-textfield__error")).then(function (elm) {
        d.fulfill(elm);
    });
    return d.promise;
};

Login.prototype.loginProcess = function (Username, password) {
    var d = webdriver.promise.defer();
    this.inputUsernameSetValue(Username);
    this.inputPasswordSetValue(password);
    this.submitClick().then(function () {
        d.fulfill();
    });

    return d.promise;
};

module.exports = Login;


