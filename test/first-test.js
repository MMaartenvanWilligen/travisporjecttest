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
                    username: "Maartenconnect",
                    accessKey: "4fd375a2-a635-42fb-860e-346e4d6691a6",
                    browserName: "chrome"
                }).build();
        } else {
            this.browser = new webdriver.Builder()
                .withCapabilities({
                    browserName: "chrome"
                }).build();
        }

        return this.browser.get("http://sel.maarten.choffice.nl/");
    });

    afterEach(function() {
        return this.browser.quit();
    });

    it("text h1 should be equal to awesome", function(done) {
        var headline = this.browser.findElement(webdriver.By.css('h1'));


        headline.getText().then(function(txt) {
            assert.equal(txt, "sel");
            done();
        });
    });
});
