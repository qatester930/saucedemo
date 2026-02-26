/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { ProductPage } from "../../PageObjects/ProductPage"

const loginPage = new LoginPage
const productPage = new ProductPage

describe('Login functionality > Valid login, invalid credentials, locked-out user handling', () => { 

  it('LOGIN_001 - Validate User is able to login using Valid credentials', () => {
    cy.visit('/', { timeout: 1000000 }, { failOnStatusCode: false })
    loginPage.enterUsername('standard_user')
    loginPage.enterPassword('secret_sauce')
    loginPage.clickLoginButton()
    productPage.validateProductPage()
  })

  it('LOGIN_002 - Validate User is able to login using invalid credentials', () => {
    cy.visit('/')
    loginPage.enterUsername('invalid_user')
    loginPage.enterPassword('invalid_password')
    loginPage.clickLoginButton()
    loginPage.validateErrorMessage('Epic sadface: Username and password do not match any user in this service')
  })

  it('LOGIN_003 - Validate User is able to login using locked-out credentials', () => {
    cy.visit('/')
    loginPage.enterUsername('locked_out_user')
    loginPage.enterPassword('secret_sauce')
    loginPage.clickLoginButton()
    loginPage.validateErrorMessage('Epic sadface: Sorry, this user has been locked out.')
  })
})