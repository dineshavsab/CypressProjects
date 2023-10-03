
import type {userAddressData, userData } from '../../fixtures/userdata.model'

it('Loads data from Fixture to test scenarios', () =>
{
    // Define what type of data can you expect from json
    // in this case it's an array of userData
    // This will come in very handy to avoid any typos as you are coding
    // and be typesafe !!!

    //You need specify the property name you are interested 
    // from the object that you are expecting in the its()

    // in the then -  /* Again use the same name to chain the types through the block */
    // Now if you accidentally type user.name or something else where a property is 
    // not defined in the interface, typescript will throw exception
    // That is SO NEAT !   

    /*
    cy.fixture< { userNewData : userAddressData[]}>('userData.json')
    .its('userAddress')
    .should('be.an', 'array')
    .then( (userExtendedData) =>
    {
        userExtendedData.forEach( userSingleData => {
            // Whateven action 
        })
    }
    )
    */


    cy.fixture< {users : userData[]} >('userData.json')
    .its('userData') 
    .should('be.an',  'array')
    .then( (users : userData[] ) =>
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

