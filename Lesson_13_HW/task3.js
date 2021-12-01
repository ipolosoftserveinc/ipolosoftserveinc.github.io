/**
 * 3.
 Test Case: Заповнення форми
 Website Tested: http://formy-project.herokuapp.com/form
 Pre-Condition: доступ до Chrome браузера
 Description.
 · Після завантаженн форми потрібно заповнити текстове поле “First name” значенням “Peter”.
 · Заповнити текстове поле “Last name” значенням “Peterson”.
 · Заповнити текстове поле “Job title” значенням “tester”.
 · Для радіо-батона “Highest level of education” обрати значення “High School”.
 · Для чекбокса “Sex” обрати значення “Male”.
 · Для випадаючого списку “Years of experience:” обрати значення “2-4”.
 · Для поля “Date” ввести значення “12/12/2020”.
 · Перевірити, що після відправлення форми з’являється повідомлення 'The form was successfully submitted!'
 */
import {Builder, By, until} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import chromeWebdriver from 'chromedriver';
import * as assert from "assert";

describe('',() => {
    let driver;
    const firstName = By.id('first-name');
    const lastName = By.id('last-name');
    const jobTitle = By.id('job-title');
    const highSchool = By.id('radio-button-1');
    const male = By.id('checkbox-1');
    const experience = By.id('select-menu');
    const years = By.xpath('*//select[@id="select-menu"]/option[@value="2"]');
    const datepicker = By.id('datepicker');
    const activeDay = By.xpath('*//td[@class="active day"]');
    const alert = By.xpath('*//div[@role="alert"]');
    const submit = By.className('btn');

    chrome.setDefaultService(new chrome.ServiceBuilder(chromeWebdriver.path).build());

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Visit page', async function () {
        await driver.get('http://formy-project.herokuapp.com/form');
    });

    it('Fill out the form', async() => {
        await driver.findElement(firstName).sendKeys('Peter');
        await driver.findElement(lastName).sendKeys('Peterson');
        await driver.findElement(jobTitle).sendKeys('tester');
        await driver.findElement(highSchool).click();
        await driver.findElement(male).click();
        await driver.findElement(experience).click();
        await driver.findElement(years).click();
        await driver.findElement(datepicker).sendKeys('12/12/2020');
        await driver.findElement(activeDay).click();
    });

    it('Submit form', async () => {
        await driver.findElement(submit).click();
    });

    it('Check alert text', async () => {
        await driver.wait(until.elementLocated(alert), 10000);
        await driver.findElement(alert).getText().then(text => assert.strictEqual(text, 'The form was successfully submitted!'));
    });

    after(() =>  driver && driver.quit());
});
