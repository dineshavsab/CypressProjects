it('Enters a value for User Id', () =>
{
    cy.visit('login')
    cy.get('[data-cy="userid"]')
        .type('test')
    cy.get('[data-cy="password"]')
        .type('testing')
    cy.get('[data-cy="submit"]')
        .click()            

    cy.url().should('eq', `${Cypress.config().baseUrl}unauthorized` )
})
