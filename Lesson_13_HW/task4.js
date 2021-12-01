/**
 * 4.
 Test Case: Сортування таблиці
 Website Tested: http://the-internet.herokuapp.com/tables
 Pre-Condition: доступ до Chrome браузера
 Description.
 · При переході на сторінку потрібно проскролити до другої таблиці.
 · В 2-ій таблиці натиснути на колонку “Due”.
 · Перевірити, що значення комірок колонки “Due” сортуються в порядку зростання.
 */
import {Builder, By} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import chromeWebdriver from 'chromedriver';
import * as assert from "assert";

describe('',() => {
    let driver;
    const table = By.id('table2');
    const due = By.xpath('*//table[@id="table2"]//th/span[@class="dues"]');
    const dues = By.css('td.dues');
    const sortedArr = ['$50.00', '$50.00', '$51.00', '$100.00'];

    chrome.setDefaultService(new chrome.ServiceBuilder(chromeWebdriver.path).build());

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Visit page', async () => {
        await driver.get('http://the-internet.herokuapp.com/tables');
    });

    it('Sort table', async () => {
        await driver.findElement(due).click();
        let dueValues = await driver.findElements(dues);
        let values = await Promise.all(dueValues.map(element => element.getText()));
        assert.deepStrictEqual(values, sortedArr);
    });

    after(() =>  driver && driver.quit());
});
