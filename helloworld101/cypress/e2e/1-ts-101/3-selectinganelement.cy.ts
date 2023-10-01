

describe("Selects HTML elements from a web page", () =>
{
   it('Selects a HTML element with data-cy selector as data-cy=userid' , () =>
    {
        cy.visit('login')
        cy.get(`[data-cy="userid"]`)
            .type('test')

    })

})