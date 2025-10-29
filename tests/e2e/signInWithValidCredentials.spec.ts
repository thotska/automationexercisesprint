import {test } from '@playwright/test';
import { Homepage } from '../../pages/homepage';
import { SignupLoginPage } from '../../pages/signUpLoginPage';
import { BasePage } from '../../pages/basepage';

test.describe('Sign In with Valid Credentials', () => {
    test('should sign in successfully with valid credentials', async ({ page }) => {
        const homepage = new Homepage(page);
        const signupLoginPage = new SignupLoginPage(page);
        const basePage = new BasePage(page);

        await page.goto(process.env.baseUrl!);
        await homepage.verifyHomePage();
        await basePage.clickOnTopNavigationBarLink('Signup / Login');
        await signupLoginPage.verifySignupLoginPage();
        await signupLoginPage.enterEmailAndPasswordToLogin(process.env.userEmail!, process.env.userPassword!)
        await basePage.verifyUserLoggedIn();
    });
}); 