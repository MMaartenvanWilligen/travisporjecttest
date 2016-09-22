/**
 * Created by maarten on 19-09-16.
 */
// Object Page

/*constructor
 * sets driver and url
 * */

var url;
var driver;

function Page(driver, url) {

    this.url = url;
    this.driver = driver;
}

/*method
 * get url with driver
 * return
 * */

Page.prototype.getUrl = function() {
   return this.driver.get(this.url);
};

module.exports = Page;



