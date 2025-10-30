import {test } from '@playwright/test';
import { Homepage } from '../../pages/homepage';
import { SignupLoginPage } from '../../pages/signUpLoginPage';
import { BasePage } from '../../pages/basepage';
import { faker } from '@faker-js/faker';

test.describe('Sign In with Invalid Credentials', () => {
    test('should show an error message when signing in with invalid credentials', async ({ page }) => {
        const homepage = new Homepage(page);
        const signupLoginPage = new SignupLoginPage(page);
        const basePage = new BasePage(page);
        
        await page.goto(process.env.baseUrl!);
        await homepage.verifyHomePage();
        await basePage.clickOnTopNavigationBarLink('Signup / Login');
        await signupLoginPage.verifySignupLoginPage();
        await signupLoginPage.enterEmailAndPasswordToLogin(faker.internet.email(), faker.internet.password());
        await signupLoginPage.verifyIncorrectEmailOrPasswordMessage();
    });
});
