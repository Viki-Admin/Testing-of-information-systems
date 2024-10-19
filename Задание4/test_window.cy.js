/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://autopremiumgroup.ru/')
  })

  it('cy.window() - get the global window object', () => {
    // Проверяем, что объект window существует и имеет свойство 'location'
    cy.window().should('have.property', 'top')
  })

  it('cy.document() - get the document object', () => {
    // Проверяем, что документ имеет свойство 'doctype'
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('cy.title() - get the title', () => {
    // Проверяем, что заголовок страницы включает определённое слово (например, 'Авто')
    cy.title().should('include', 'Авто')
  })
})
