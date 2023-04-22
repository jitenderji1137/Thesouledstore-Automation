import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
import 'cypress-mochawesome-reporter/register';
