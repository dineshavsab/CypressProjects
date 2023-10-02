context('This is one Consolidated test suite that handles the Login user story', () =>
{
    describe('Cypress best practice says that we need to combine all the relevant test cases to complete a User Story together as there are '
     + 'overhead to setup the infrastructure', ()=>
     {
        beforeEach( 'Visit the main page ', ()=>{
            cy.visit('login')
         } );
    
         it('Tests Happy path', () =>
         {
            cy.getMyElementByName('userid').type('test');
            cy.getMyElementByName('password').type('test');
            cy.getMyElementByName('submit').click();
            cy.location('pathname').should('equal', '/homepage');
         });

         it('Tests Unhappy path', () =>
         {
            cy.getMyElementByName('userid').type('test');
            cy.getMyElementByName('password').type('testing');
            cy.getMyElementByName('submit').click();
            cy.location('pathname').should('equal', '/unauthorized');
         });


     } );

    

})