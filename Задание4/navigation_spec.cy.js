/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://autopremiumgroup.ru/');
  });
  
  it('should navigate to the catalog', () => {
    cy.get('.header__bottom-line').within(() => {
      cy.contains('Все').click();
    });
  
    cy.get('.auto-type-links').within(() => {
      cy.contains('Пикапы').click();
    });
  
    cy.location('pathname').should('include', 'katalog-avtomobilej');
  });
  
  it('should navigate to SUV', () => {
    cy.visit('https://autopremiumgroup.ru/katalog-avtomobilej/?type=wagon');
    cy.location('pathname').should('include', 'katalog-avtomobilej');
  });
  
  it('should navigate to sports cars', () => {
    cy.visit('https://autopremiumgroup.ru/katalog-avtomobilej/?type=sport');
    cy.location('pathname').should('include', 'katalog-avtomobilej');
  });
  
  it('should navigate to sedans', () => {
    cy.visit('https://autopremiumgroup.ru/katalog-avtomobilej/?type=sedan');
    cy.location('pathname').should('include', 'katalog-avtomobilej');
  });
  
  it('should navigate to minivans', () => {
    cy.visit('https://autopremiumgroup.ru/katalog-avtomobilej/?type=minivan');
    cy.location('pathname').should('include', 'katalog-avtomobilej');
  });
  
  it('should navigate to buses', () => {
    cy.visit('https://autopremiumgroup.ru/katalog-avtomobilej/?type=bus');
    cy.location('pathname').should('include', 'katalog-avtomobilej');
  });
  
  it('should navigate to electric cars', () => {
    cy.visit('https://autopremiumgroup.ru/katalog-avtomobilej/?type=electric');
    cy.location('pathname').should('include', 'katalog-avtomobilej');
  });
  
  it('should navigate to cars in stock', () => {
    cy.visit('https://autopremiumgroup.ru/avto-v-nalichii/');
    cy.location('pathname').should('include', 'avto-v-nalichii');
  });
  
  it('should navigate to the catalog', () => {
    cy.visit('https://autopremiumgroup.ru/katalog-avtomobilej/');
    cy.location('pathname').should('include', 'katalog-avtomobilej');
  });
  
  it('should navigate to services', () => {
    cy.visit('https://autopremiumgroup.ru/uslugi/');
    cy.location('pathname').should('include', 'uslugi');
  });
  
  it('should navigate to online sales', () => {
    cy.visit('https://autopremiumgroup.ru/landings/online/');
    cy.location('pathname').should('include', 'landings/online');
  });
  
  it('should navigate to leasing', () => {
    cy.visit('https://autopremiumgroup.ru/landings/leasing/');
    cy.location('pathname').should('include', 'landings/leasing');
  });
  
  });
  

