context('Enter values for login page', () =>
{
    
    beforeEach('Login', () =>
    {
        cy.visit('login')
    })

    it('Enters a value for User Id', () =>
    {
        cy.get('[data-cy="userid"]')
            .type('test')
        cy.get('[data-cy="password"]')
            .type('test')
        cy.get('[data-cy="submit"]')
            .click()            

    })
}
)