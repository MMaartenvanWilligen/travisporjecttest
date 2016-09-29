/**
 * Created by maarten on 19-09-16.
 */
// Object Page

/*constructor
 * sets driver and url
 * */

var driver;
var url;

function Page(driver, url) {

    this.url = url;
    this.driver = driver;
}

/*method
 * get url with driver
 * return
 * */

Page.prototype.getUrl = function () {

     var url = this.driver.get(this.url).then(function() {
         return driver.getCurrentUrl();
     });
    console.log("url"+ " " + url);

    return url;

};

module.exports = Page;



