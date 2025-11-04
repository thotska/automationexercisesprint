import { SignupLoginPage } from '../../pages/signUpLoginPage';
import { BasePage } from '../../pages/basepage';
import { ProductsPage } from '../../pages/productsPage';
import {test} from '@playwright/test';
import { Homepage } from '../../pages/homepage';

test.describe('Search Product', () => {
    test('should search for a product successfully', async ({ page }) => {
        const homepage = new Homepage(page);
        const productsPage = new ProductsPage(page);
        const basePage = new BasePage(page);

        await page.goto(process.env.baseUrl!);
        await homepage.verifyHomePage();
        await basePage.clickOnTopNavigationBarLink('Products');
        await productsPage.searchForProduct('T-Shirt');
        await productsPage.verifyProductsInSearchResults('T-Shirt');
    });
});
        