describe("navigate to amazon.in webside", function () {
    it("search badminton and add it cart", function () {

        cy.visit("https://www.amazon.in/")
        cy.get('#twotabsearchtextbox').type("badminton racket");
        cy.get('#nav-search-submit-button').click();
        cy.xpath('//*[contains(text(),\'Best seller\')]').each((item, index) => {
            cy.wrap(item).invoke('text').then((text) => {
                if (text.includes("Best seller")) {
                    cy.xpath("//*[contains(text(),'Best seller')]//ancestor::*[contains(@class,'s-card-container')]//div[2]//a[contains(@class,'a-link-normal')]").first().invoke('removeAttr', 'target').click()
                    cy.get('#add-to-cart-button').click()
                 cy.get('.a-size-medium-plus').contains('Added to Cart')
                    return false;
                }
            })
            return false;
        })
    });
});