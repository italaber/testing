import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I am at the unconventional calculator', () => {
    cy.visit('assets/index.html')
})

When('I add 1 and 7 together', () => {
    cy.get('#input-number').type(1)
    cy.get('#btn-add').click()
    cy.get('#input-number').clear()
    cy.get('#input-number').type(7)
    cy.get('#btn-add').click()  
})

When('I subtract 8 from 2', () => {
    cy.get('#input-number').type(8)
    cy.get('#btn-add').click()
    cy.get('#input-number').clear()
    cy.get('#input-number').type(2)
    cy.get('#btn-subtract').click()  
})

When('I multiply 3 and 5 together', () => {
    cy.get('#input-number').type(3)
    cy.get('#btn-add').click()
    cy.get('#input-number').clear()
    cy.get('#input-number').type(5)
    cy.get('#btn-multiply').click()  
})

When('I divide 10 by 2', () => {
    cy.get('#input-number').type(10)
    cy.get('#btn-add').click()
    cy.get('#input-number').clear()
    cy.get('#input-number').type(2)
    cy.get('#btn-divide').click()  
})

When('I divide 0 by 0', () => {
    cy.get('#input-number').type(0)
    cy.get('#btn-add').click()
    cy.get('#input-number').clear()
    cy.get('#input-number').type(0)
    cy.get('#btn-divide').click()  
})

When('I add -5 to -5', () => {
    cy.get('#input-number').type(-5)
    cy.get('#btn-add').click()
    cy.get('#input-number').clear()
    cy.get('#input-number').type(-5)
    cy.get('#btn-add').click()  
})

When('I multiply 0.5 by 2', () => {
    cy.get('#input-number').type(0.5)
    cy.get('#btn-add').click()
    cy.get('#input-number').clear()
    cy.get('#input-number').type(2)
    cy.get('#btn-multiply').click()  
})

Then('the result is 8', () => {
    expect(cy.get('#current-result').contains(8))
})

Then('the result is 6', () => {
    expect(cy.get('#current-result').contains(6))
})

Then('the result is 15', () => {
    expect(cy.get('#current-result').contains(15))
})

Then('the result is 5', () => {
    expect(cy.get('#current-result').contains(5))
})

Then('the result is NaN', () => {
    expect(cy.get('#current-result').contains('NaN'))
})

Then('the result is -10', () => {
    expect(cy.get('#current-result').contains(-10))
})

Then('the result is 1', () => {
    expect(cy.get('#current-result').contains(1))
})