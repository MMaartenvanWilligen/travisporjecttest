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

    this.driver.wait(until.elementLocated(By.id('username')), 5000).then(function(elm) {
        return elm;
    });

    //return this.driver.findElement(webdriver.By.id("username"));
   //inputUserName.sendKeys('Maarten');

};

Login.prototype.inputUsernameGetValue = function () {

    this.driver.wait(until.elementLocated(By.id('username')), 5000).then(function(elm) {
        return elm;
    });

};

Login.prototype.inputUsernameSetValue =  function () {

    driver.wait(until.elementLocated(By.name('username')), 5 * 1000).then(function(elm) {
        elm.sendKeys("Admin");
    });
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


