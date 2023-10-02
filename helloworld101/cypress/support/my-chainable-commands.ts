
Cypress.Commands.add("getMyElementByName", (elementName :string ) =>
{
    cy.get(`[data-cy="${elementName}"]`);
})