/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { ProductPage } from "../../PageObjects/ProductPage"

const loginPage = new LoginPage
const productPage = new ProductPage

describe('Product listing > Verify products display correctly, sorting works (A-Z, Z-A, price low-high, price high-low)', () => {

  it('PRODUCT_001 - Verify products display correctly', () => {
    loginPage.loginToApplication('standard_user', 'secret_sauce')
    productPage.validateProductPage()
    productPage.validateProductName('Sauce Labs Backpack')
    productPage.validateProductPrice('Sauce Labs Backpack', '$29.99')
    productPage.validateProductDescription('Sauce Labs Backpack', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
  })

  it('PRODUCT_002 - Verify sorting works (A-Z)', () => {
    loginPage.loginToApplication('standard_user', 'secret_sauce')
    productPage.sortProductsListing('Name (A to Z)')
    productPage.validateProductSorting('A-Z')
    productPage.sortProductsListing('Name (Z to A)')
    productPage.validateProductSorting('Z-A')
  })

  it('PRODUCT_003 - Verify sorting works (Price Low to High)', () => {
    loginPage.loginToApplication('standard_user', 'secret_sauce')
    productPage.sortProductsListing('Price (low to high)')
    productPage.validateProductSorting('Price Low to High')
  })

  it('PRODUCT_004 - Verify sorting works (Price High to Low)', () => {
    loginPage.loginToApplication('standard_user', 'secret_sauce')
    productPage.sortProductsListing('Price (high to low)')
    productPage.validateProductSorting('Price High to Low')
  })
})