import * as userData from "../../fixtures/userData.json"
it('Loads data from Fixture to test scenarios', () =>
{
    cy.fixture('userData.json')
    .its('userData')
    .should('be.an',  'array')
    .then( (users ) =>
    {
        users.forEach(user => {
            cy.visit('login')
            cy.getMyElementByName('userid').type(user.userid);
            cy.getMyElementByName('password').type(user.password);
            cy.getMyElementByName('submit').click()
            if(user.userid == user.password)
                cy.location('pathname').should('equal', '/homepage');
            else
                cy.location('pathname').should('equal', '/unauthorized');

        });
    })

})

