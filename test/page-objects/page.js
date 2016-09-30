/**
 * Created by maarten on 19-09-16.
 */
// Object Page
var webdriver = require("selenium-webdriver");
var until = webdriver.until;

var driver;
var url;

/*constructor
 * sets driver and url
 * */

function Page(driver, url) {

    this.url = url;
    this.driver = driver;
}

/* method
 * get url with driver
 * return
 * */

Page.prototype.getUrl = function () {

    this.driver.get(this.url);

    this.driver.wait(until.urlIs(this.url), 10000);

};

module.exports = Page;



