it('Enters a value for User Id using Custom Commands', () =>
{
    cy.visit('login')
    /* BEFORE 
    cy.get('[data-cy="userid"]')
        .type('test')
    cy.get('[data-cy="password"]')
        .type('test')
    cy.get('[data-cy="submit"]')
        .click()            
    */

    // AFTER
    cy.getMyElementByName("userid")
    .type('test');
    cy.getMyElementByName("password")
    .type('test');
    cy.getMyElementByName('submit')
    .click();  
        

    cy.location('pathname').should('equal', '/homepage')
})
