
const {expect} = require("@playwright/test");
const {Base_url, Login, Password} = require("../../env/constants.js");

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginWindow = page.locator('[class="wrapper"]');
        this.logo = page.locator('[id="logomini"]');
        this.loginWindowHeader = page.locator('[class="wrapper"] h1');
        this.loginInput = page.locator('[name="username"]');
        this.passwordInput = page.locator('[name="password"]');
        this.loginBtn = page.locator('[type="submit"]');
        this.errorMessage = page.locator('[class="help-block"]').first();
    }

    async setValue(element, value) {
        await element.click({clickCount: 3});
        await element.press('Backspace');
        await element.type(value, {delay: 50});
    }

    async login(){
        await this.page.goto(Base_url);
        await expect(this.page).toHaveURL(Base_url);
        await this.loginWindow.isVisible();
        await this.logo.isVisible();
        await expect(this.loginWindowHeader).toHaveText('AQA internship Login');
        await this.setValue(this.loginInput, Login);
        await this.setValue(this.passwordInput, Password);
        await this.loginBtn.click();
        await this.errorMessage.isVisible();
        await expect(this.errorMessage).toHaveText('No account found with that username.');
    }
}