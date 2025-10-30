import {Locator, Page, expect} from '@playwright/test';
import { BasePage } from './basepage';

export class ProductsPage extends BasePage {
    addToCartButtons: Locator;
    viewCartLink: Locator;
    verifyProductsInCart: Locator;
    

    constructor(page: Page) {
        super(page);
        this.addToCartButtons = page.getByText('Add to cart').nth(1)
        this.viewCartLink = page.getByRole('link', { name: 'View Cart' })
        this.verifyProductsInCart = page.getByRole('table')
        
    
    }

    async addFirstProductToCart(): Promise<void> {
        await this.addToCartButtons.click();
    }
    async clickViewCartLink(): Promise<void> {
        await this.viewCartLink.click();
    }
    async verifyCartTableVisible(): Promise<void> {
        await this.verifyProductsInCart.isVisible();
    }
}