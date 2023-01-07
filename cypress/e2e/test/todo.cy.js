/// <reference types="cypress" />

describe('example to-do app', () => {
  
  it('visit cypress page', () => {
    cy.visit('/')
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  })
})
