
export class ProductPage {

    validateProductPage() {
        cy.url().should('include', '/inventory.html')
        cy.get('[data-test="title"]').should('have.text', 'Products').and('be.visible')
    }
    validateProductName(productName) {
        cy.get('[data-test="inventory-item-name"]').contains(productName).should('be.visible')
    }
    validateProductDescription(productName, description) {
        cy.get('[data-test="inventory-item-name"]').contains(productName).parents('[data-test="inventory-item"]')
            .find('[data-test="inventory-item-desc"]').should('be.visible').and('contain.text', description)
    }
    validateProductPrice(productName, price) {
        cy.get('[data-test="inventory-item-name"]').contains(productName).parents('[data-test="inventory-item"]')
            .find('[data-test="inventory-item-price"]').should('be.visible').and('contain.text', price)
    }
    sortProductsListing(sortOption) {
        cy.get('[data-test="product-sort-container"]').select(sortOption)
    }
    validateProductSorting(sortOption) {
        // ---- NAME SORTING ----
        if (sortOption === 'A-Z' || sortOption === 'Z-A') {

            cy.get('[data-test="inventory-item-name"]').then($items => {

                const names = [...$items].map(el =>
                    el.innerText.trim().toLowerCase()
                )

                const sortedAsc = [...names].sort((a, b) => a.localeCompare(b))
                const sortedDesc = [...sortedAsc].reverse()

                if (sortOption === 'A-Z') {
                    expect(names).to.deep.equal(sortedAsc)
                } else {
                    expect(names).to.deep.equal(sortedDesc)
                }
            })
        }

        // ---- PRICE SORTING ----
        else if (
            sortOption === 'Price Low to High' ||
            sortOption === 'Price High to Low'
        ) {

            cy.get('[data-test="inventory-item-price"]').then($prices => {

                const prices = [...$prices].map(el =>
                    parseFloat(el.innerText.replace('$', ''))
                )

                const sortedAsc = [...prices].sort((a, b) => a - b)
                const sortedDesc = [...sortedAsc].reverse()

                if (sortOption === 'Price Low to High') {
                    expect(prices).to.deep.equal(sortedAsc)
                } else {
                    expect(prices).to.deep.equal(sortedDesc)
                }
            })
        }
    }
    addProductToCart(productName) {
        cy.get('[data-test="inventory-item-name"]').contains(productName).parents('[data-test="inventory-item"]')
            .find('[data-test*="add-to-cart-"]').should('contain.text', 'Add to cart').click()
    }
}