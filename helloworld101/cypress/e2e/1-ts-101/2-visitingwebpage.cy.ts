
describe('Open a web page' , ()=>
{
    it('Opens a web page',() =>
        {
            cy.visit('login');

            cy.location('pathname').should('equal', '/login')

        }
    )
    
}
);