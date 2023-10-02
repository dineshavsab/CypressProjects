# Steps to Expose reusable stuff as Custom Commands - Very important concept !

Often times, we have to repeat steps or code that tests our application. As an example, you can think of Selecting an Element from DOM to perform various actions like click(), type(), etc., We end up repeating our code that uses a selector to select these elements. The idea of Custom Commands, is that we can expose these repeated code as a helper function, so that we don't have to repeat the code. 

Let us see with a practical example.

This is one of the code that we typically end up writing multiple times

```typescript
cy.get('[data-cy="userid"]').type('test')

cy.get('[data-cy="password"]').type('test')

cy.get('[data-cy="submit"]').click()
```

The above snippet can be re-written to read as

```typescript
cy.getMyElementByName('userid').type('test')

cy.getMyElementByName('password').type('test')

cy.getMyElementByName('submit').click()
```

This will remove the redundant 
`'[data-cy="XXX"]'`
part. This will also enforce standards and reduce errors as we test our application.

## Food for Thought
Think of other things like this that we typically do across our application

Hint: Adding Authorization token?

Now, as we use Typescript in our application and it enforces typesafety, we need to expose these new commands as an Interface and provide the implementation for them

First thing we need to do is think about what would we pass in to these command and what do we expect Cypress to do with that information. 

In this case, we will pass the element name and Cypress should get the element from the DOM. 

To expose this, we need to add our custom method to existing Well known and well defined Cypress methods that are shipped by default with Cypress. These methods are defined in the global namespace called Cypress. Namespaces can be thought of as a collection of interfaces or classes, that performs a certain set of action. Like group all the classes that does Network together or group Logging together, etc.,

Then we need to go the interface that you want to add this method to. In our case, as we are going to do a series of action (chain) that our custom command will provide , we need to add our custom command to the interface called Chainable

So, in summary, we are defining the Command to be at global level, inside the cypress namespace and into the Chainable interface

global->Cypress->Chainable

To do this, let us create a new file called i-chainable.ts under the support folder. In that file, add the below code


``` typescript
import './globalcommand'
import './appcommands'
declare global{
    namespace Cypress {
        interface Chainable {
            getMyElementByName(elementName :string ) : Chainable<Element>;
        }
    }
}
```
The above line of code, defines a contract or interface to the world, which says that, if someone wants to expose a method called getMyElementByName, they need to get a parameter by the name elementName which is of type string and should return to the caller a Chaninable Element. 


Once the interface is defined, we have to implement the interface according to it's definition. To do that, create a new file under e2e/support dir called my-chainable-commands.ts.  In this file, we will provide "OUR" version of getMyElementByName, that uses our hard-coded values for the element selectors. Something like this

```typescript
Cypress.Commands.add("getMyElementByName", (elementName :string ) =>
{
    cy.get(`[data-cy="${elementName}"]`);
})
```

The above code tells Cypress, that I am providing the implementation for a method called "getMyElementByName" which takes a string parameter "elementName" and using Cypress's internal get function, I will search for HTML elements which has a attribute data-cy matching that elementName's value. 

That's it, you have successfully exposed your first command. There will be many such opportunities as you start testing your application. As you go through automating the application, think about where you are repeating the code. For each such instances, think, if it will be beneficial for other testers both outside your application and or inside your application. Depending on that answer, you can expose a Global Command for either for your entire organization or to your team.

