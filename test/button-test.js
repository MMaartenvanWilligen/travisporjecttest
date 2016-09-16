describe("buttons", function () {

    it("CTA button should be raised", function (done) {

        var button = this.browser.findElement(webdriver.By.id("raisedbutton"));

        button.getText().then(function (txt) {
            assert.equal(txt, "RAISED");
            done();
        });


    });

    it("expect onclick text change to buttontransform", function (done) {

        var button = this.browser.findElement(webdriver.By.id("raisedbutton"));

        button.click();

        button.getText().then(function (txt) {
            assert.equal(txt, "BUTTONTRANSFORM");
            done();
        });

    });

});