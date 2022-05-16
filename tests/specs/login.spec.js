const { test } = require('@playwright/test');
const {LoginPage} = require("../pages/login.page");


test.describe('User should not to be logged in ', () => {

    test('with incorrect credentials @login', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await test.step("Login with incorrect credentials and check error message", async()=> {
            await loginPage.login();
        });
    });
});
