/**
 * 2.
 Test Case: Наведення мишою на елемент
 Website Tested: http://the-internet.herokuapp.com/hovers
 Pre-Condition: доступ до Chrome браузера
 Description.
 · Знайти елемент, який містить картинку аватарку юзера.
 · Зафіксувати наведення мишою на дану картинку.
 · Перевірити, появу тексту “name: user1” під картинкою.
 */
import {Builder, By} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import chromeWebdriver from 'chromedriver';
import * as assert from "assert";

describe('',() => {
    let driver;
    const ava1 = By.xpath('*//div[@class="figure"][1]');
    const h5 = By.xpath('(*//h5)[1]');

    chrome.setDefaultService(new chrome.ServiceBuilder(chromeWebdriver.path).build());

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Visit page', async function () {
        await driver.get('http://the-internet.herokuapp.com/hovers');
        const actions = driver.actions({ bridge: true });
        const ava = await driver.findElement(ava1);
        await actions.move({origin: ava}).perform();
        await driver.findElement(h5).getText().then(text => assert.strictEqual(text, 'name: user1'));
    });

    after(() =>  driver && driver.quit());
});
