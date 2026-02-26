
export class CheckoutPage {
    addCheckoutInformation(firstName, lastName, postalCode) {
        cy.get('[data-test="firstName"]').should('be.visible').type(firstName)
        cy.get('[data-test="lastName"]').should('be.visible').type(lastName)
        cy.get('[data-test="postalCode"]').should('be.visible').type(postalCode)
        cy.get('[data-test="continue"]').should('be.visible').click()
        cy.url().should('include', '/checkout-step-two.html')
    }
    validateOrderDetails({
        productName,
        price,
        paymentInfo,
        shippingInfo,
        itemTotal,
        tax,
        total
    }) {
        // Product validation
        if (productName) {
            cy.get('[data-test="inventory-item-name"]').contains(productName).should('be.visible')
        }
        if (price) {
            cy.get('[data-test="inventory-item-price"]').should('be.visible').and('contain.text', price)
        }
        // Payment info
        if (paymentInfo) {
            cy.get('[data-test="payment-info-value"]').should('be.visible').and('have.text', paymentInfo)
        }
        // Shipping info
        if (shippingInfo) {
            cy.get('[data-test="shipping-info-value"]').should('be.visible').and('have.text', shippingInfo)
        }
        // Item total
        if (itemTotal) {
            cy.get('[data-test="subtotal-label"]').should('be.visible').and('have.text', itemTotal)
        }
        // Tax
        if (tax) {
            cy.get('[data-test="tax-label"]').should('be.visible').and('have.text', tax)
        }
        // Final total
        if (total) {
            cy.get('[data-test="total-label"]').should('be.visible').and('have.text', total)
        }
    }
    clickFinishButton() {
        cy.get('[data-test="finish"]').should('be.visible').click()
        cy.url().should('include', '/checkout-complete.html')
        cy.get('[data-test="title"]').should('be.visible').and('have.text', 'Checkout: Complete!')
        cy.get('[data-test="complete-header"]').should('be.visible').and('have.text', 'Thank you for your order!')
    }
}