/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { ProductPage } from "../../PageObjects/ProductPage"
import { CartPage } from "../../PageObjects/CartPage"
import { CheckoutPage } from "../../PageObjects/CheckoutPage"

const loginPage = new LoginPage
const productPage = new ProductPage
const cartPage = new CartPage
const checkoutPage = new CheckoutPage

describe('Checkout flow > Complete purchase end-to-end: cart → checkout info → confirmation, Checkout validation', () => {

  it('CHECKOUT_001 - Complete checkout process for a single product', () => {
    loginPage.loginToApplication('standard_user', 'secret_sauce')
    productPage.validateProductPage()
    productPage.addProductToCart('Sauce Labs Backpack')
    cartPage.validateCartBadgeCount(1)
    cartPage.openCart()
    cartPage.validateCartContents('Sauce Labs Backpack', '$29.99')
    cartPage.clickCheckoutButton()
    checkoutPage.addCheckoutInformation('John', 'Doe', '12345')
    checkoutPage.validateOrderDetails({
      productName: 'Sauce Labs Backpack',
      price: '$29.99',
      paymentInfo: 'SauceCard #31337',
      shippingInfo: 'Free Pony Express Delivery!',
      itemTotal: 'Item total: $29.99',
      tax: 'Tax: $2.40',
      total: 'Total: $32.39'
    })
    checkoutPage.clickFinishButton()
  })

})