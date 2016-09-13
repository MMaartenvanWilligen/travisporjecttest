console.log("test");

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});


require('chromedriver');

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until


var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

  driver.get('http://www.google.com/ncr');


driver.get('https://www.google.co.uk').then(function() {
  driver.findElement({name: 'q'}).then(function(input) {
    input.sendKeys('maartenvanwilligen.nl');
    input.sendKeys(webdriver.Key.ENTER);
  });
});

driver.sleep(1000);



describe('firstgoogleresult', function() {

var link = driver.findElement(By.xpath("//div['@id=srg']/div[1]/div[1]/h3[1]/a[1]"))
 // var link = driver.findElement(By.xpath("//a[@href='http://maartenvanwilligen.nl/']"))

link.getText().then(function(text) {
var pageTitle = 'Maarten van Willigen';


  describe('#indexOf()', function() {
    it('should return true when first result', function() {
      assert.equal(-1, text.indexOf(pageTitle));
    });

  });
  
});

  console.log(text); 
  console.log('portfolio maarten van willigen in top result?');
  console.log(text.indexOf(pageTitle) !== -1);
});

driver.quit();

