/**
 * Created by maarten on 19-09-16.
 */
// Object Page

/*constructor
 * sets driver and url
 * */

var driver;
var urllocal;

function Page(driver, url) {

    this.urllocal = url;
    this.driver = driver;
}

/*method
 * get url with driver
 * return
 * */

Page.prototype.getUrl = function() {
   return this.driver.url(this.urllocal);
};

module.exports = Page;



