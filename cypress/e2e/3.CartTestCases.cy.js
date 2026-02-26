/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { ProductPage } from "../../PageObjects/ProductPage"
import { CartPage } from "../../PageObjects/CartPage"

const loginPage = new LoginPage
const productPage = new ProductPage
const cartPage = new CartPage

describe('Add to cart > Add single/multiple items, verify cart badge updates, verify cart contents, Remove from cart', () => {

  it('CART_001 - Add single product in cart', () => {
    loginPage.loginToApplication('standard_user', 'secret_sauce')
    productPage.validateProductPage()
    productPage.addProductToCart('Sauce Labs Backpack')
    cartPage.validateCartBadgeCount(1)
    cartPage.openCart()
    cartPage.validateCartContents('Sauce Labs Backpack', '$29.99')
  })

  it('CART_002 - Add multiple products in cart', () => {
    loginPage.loginToApplication('standard_user', 'secret_sauce')
    productPage.validateProductPage()
    productPage.addProductToCart('Sauce Labs Backpack')
    productPage.addProductToCart('Sauce Labs Bike Light')
    cartPage.validateCartBadgeCount(2)
    cartPage.openCart()
    cartPage.validateCartContents('Sauce Labs Backpack', '$29.99')
    cartPage.validateCartContents('Sauce Labs Bike Light', '$9.99')
  })
  it('CART_003 - Verify cart badge updates when products are added/removed', () => {
    loginPage.loginToApplication('standard_user', 'secret_sauce')
    productPage.validateProductPage()
    productPage.addProductToCart('Sauce Labs Backpack')
    cartPage.validateCartBadgeCount(1)
    cartPage.openCart()
    cartPage.removeProductFromCart('Sauce Labs Backpack')
    cartPage.validateCartBadgeCount(0)
  })
})