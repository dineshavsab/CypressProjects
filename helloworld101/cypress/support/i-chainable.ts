
import './my-chainable-commands'

declare global{
    namespace Cypress {
        interface Chainable {
            getMyElementByName(elementName :string ) : Chainable<Element>;
        }
    }
}