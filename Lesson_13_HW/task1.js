/**
 * 1.
 Test Case: Стан активності елемента
 Website Tested: http://the-internet.herokuapp.com/dropdown
 Pre-Condition: доступ до Chrome браузера
 Description.
 · Доступитися до випадаючого списку.
 · Перевірити, що 1-ий елемент списку неактивний.
 · Перевірити, що 2-ий елемент списку активний.
 */
import {Builder, By} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import chromeWebdriver from 'chromedriver';

describe('',() => {
    let driver;
    const dropDownLocator = By.id('dropdown');
    const firstElementLocator = By.xpath('*//select[@id="dropdown"]/option[1]');
    const secondElementLocator = By.xpath('*//select[@id="dropdown"]/option[2]');

    chrome.setDefaultService(new chrome.ServiceBuilder(chromeWebdriver.path).build());

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Visit page', async function () {
        await driver.get('http://the-internet.herokuapp.com/dropdown');
        await driver.findElement(dropDownLocator).click();
        await driver.findElement(firstElementLocator).getAttribute('disabled').then((value) => {
            console.log('First element is disabled: ' + value);
        });
        await driver.findElement(secondElementLocator).getAttribute('disabled').then(value => {
            console.log('First element is disabled: ' + value);
        });
    });

    after(() =>  driver && driver.quit());
});
