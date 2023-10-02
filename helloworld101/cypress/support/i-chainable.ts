
import './my-chainable-commands'
import './appcommands'

declare global{
    namespace Cypress {
        interface Chainable {
            getMyElementByName(elementName :string ) : Chainable<Element>;
        }
    }
}