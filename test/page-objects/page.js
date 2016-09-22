/**
 * Created by maarten on 19-09-16.
 */

// Object Page

//constructor
function Page(driver, url) {

    this.driver = driver;
    this.url = url;

}

//method
Page.prototype.getUrl = function () {
    driver.get(this.url);
    return this
};

module.exports = Page;



