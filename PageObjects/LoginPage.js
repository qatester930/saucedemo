
export class LoginPage {

    enterUsername(username) {
        cy.get('[id="user-name"]').should('have.attr', 'placeholder', 'Username').type(username)
    }

    enterPassword(password) {
        cy.get('[id="password"]').should('have.attr', 'placeholder', 'Password').type(password)
    }

    clickLoginButton() {
        cy.get('[id="login-button"]').should('have.value', 'Login').click()
    }
    validateErrorMessage(message) {
        cy.get('[data-test="error"]').should('be.visible').and('contain.text', message)
    }

    loginToApplication(username, password) {
        cy.visit('/')
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLoginButton()
    }
}