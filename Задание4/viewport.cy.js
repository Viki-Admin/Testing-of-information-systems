/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://autopremiumgroup.ru/')
  })

  context('Viewport', () => {
    beforeEach(() => {
      cy.visit('https://autopremiumgroup.ru/')
    })

    it('Проверка видимости навигации на различных устройствах', () => {
      // Проверка на мобильном устройстве 
      cy.viewport(320, 480);
      cy.get('.header__middle-line__main__menu').should('not.be.visible'); // Меню должно быть скрыто
      cy.get('.mobile_header__menu-button').should('be.visible').click(); // Кликаем по кнопке меню // Проверяем, что мобильное меню открыто 
      cy.get('.mobile_menu').should('be.visible'); // Убедитесь, что это правильный селектор для открытого меню 
      cy.get('.mobile_menu a').should('be.visible'); // Проверяем, что ссылки в мобильном меню видимы

      // Проверка на большом экране 
      cy.viewport(1920, 1080);
      cy.get('.header__middle-line__main__menu').should('be.visible'); // Меню должно быть видно
      cy.get('.header__middle-line__main__menu a').should('be.visible'); // Проверяем, что ссылки в меню видимы
  });
});

  })
