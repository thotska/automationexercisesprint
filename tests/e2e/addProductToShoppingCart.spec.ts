import {test } from '@playwright/test';
import { Homepage } from '../../pages/homepage';
import { SignupLoginPage } from '../../pages/signUpLoginPage';
import { BasePage } from '../../pages/basepage';
import { ProductsPage } from '../../pages/productsPage';

test.describe('Add Product To Shopping Cart', () => {
    test('should add a product to the shopping cart successfully', async ({ page }) => {
        const homepage = new Homepage(page);
        const signupLoginPage = new SignupLoginPage(page);
        const productsPage = new ProductsPage(page);
        const basePage = new BasePage(page);
        await page.goto(process.env.baseUrl!);
        await homepage.verifyHomePage();
        await basePage.clickOnTopNavigationBarLink('Products');
        await productsPage.addFirstProductToCart();
        await productsPage.clickViewCartLink();
        await productsPage.verifyCartTableVisible();
    });
});