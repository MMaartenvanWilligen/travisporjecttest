var assert = require("assert");
var webdriver = require("selenium-webdriver");

describe("testing javascript in the browser", function() {
    beforeEach(function() {
        if (process.env.SAUCE_USERNAME != undefined) {
            this.browser = new webdriver.Builder()
                .usingServer('http://'+ process.env.SAUCE_USERNAME+':'+process.env.SAUCE_ACCESS_KEY+'@ondemand.saucelabs.com:80/wd/hub')
                .withCapabilities({
                    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
                    build: process.env.TRAVIS_BUILD_NUMBER,
                    username: process.env.SAUCE_USERNAME,
                    accessKey: process.env.SAUCE_ACCESS_KEY,
                    browserName: "chrome"
                }).build();
        } else {
            this.browser = new webdriver.Builder()
                .withCapabilities({
                    browserName: "chrome"
                }).build();
        }

        return this.browser.get("http://localhost:8000/website/index.html");
    });

    afterEach(function() {
        return this.browser.quit();
    });

    describe("testing if text is set", function() {

        it("h1 shuold be awesome", function (done) {
            var headline = this.browser.findElement(webdriver.By.css('h1'));

            // headline.click();

            headline.getText().then(function (txt) {
                assert.equal(txt, "awesome");
                done();
            });
        });


        it("CTA button should be raised", function (done) {
            var button =  this.browser.findElement(webdriver.by.css('button'));

            button.getClass().then(function(classs) {
                assert.equal(classs, "raised");
            };
            done();

        });
    });

});
