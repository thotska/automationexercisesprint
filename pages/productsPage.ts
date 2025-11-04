import {Locator, Page, expect} from '@playwright/test';
import { BasePage } from './basepage';

export class ProductsPage extends BasePage {
    addToCartButtons: Locator;
    viewCartLink: Locator;
    verifyProductsInCart: Locator;
    searchBar: Locator;
    searchButton: Locator;
    searchResultsText: Locator;
    

    constructor(page: Page) {
        super(page);
        this.addToCartButtons = page.getByText('Add to cart').nth(1)
        this.searchBar = page.getByRole('textbox', { name: 'Search Product' })
        this.viewCartLink = page.getByRole('link', { name: 'View Cart' })
        this.verifyProductsInCart = page.getByRole('table')
        this.searchButton = page.getByRole('button', { name: '' })
        this.searchResultsText = page.getByText('T-Shirt').nth(1)
        
    
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
    async searchForProduct(productName: string): Promise<void> {
        await this.searchBar.fill(productName);
        await this.searchButton.click();
    }
    async verifyProductsInSearchResults(productName: string): Promise<void> {
        await expect(this.searchResultsText).toContainText(productName);
}
}