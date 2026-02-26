
export class CartPage {
    validateCartBadgeCount(count) {
        if(count > 0) {
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text', count)
        } else {
            cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
        }
    }
    openCart() {
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible').click()
        cy.url().should('include', '/cart.html')
        cy.get('[data-test="title"]').should('be.visible').and('have.text', 'Your Cart')
    }
    validateCartContents(productName, price) {
        cy.get('[data-test="inventory-item-name"]').contains(productName).should('be.visible').parents('[data-test="inventory-item"]')
            .find('[data-test="inventory-item-price"]').should('be.visible').and('contain.text', price)
    }
    removeProductFromCart(productName) {
        cy.get('[data-test="inventory-item-name"]').contains(productName).should('be.visible').parents('[data-test="inventory-item"]')
            .find('.cart_button[id*="remove-"]').contains('Remove').should('be.visible').click()
    }
    clickCheckoutButton() {
        cy.get('[id="checkout"]').should('be.visible').click()
        cy.url().should('include', '/checkout-step-one.html')
    }
}