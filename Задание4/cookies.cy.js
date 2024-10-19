/// <reference types="cypress" />

context('Cookies', () => {
  beforeEach(() => {
      Cypress.Cookies.debug(true)

      cy.visit('https://autopremiumgroup.ru/')

      // Очистка куки перед каждым тестом 
      cy.clearCookies()
  })

  it('cy.setCookie() - установка куки', () => {
      // Устанавливаем куки 
      cy.setCookie('user_session', 'abc123')

      // Проверяем, что куки установлены
      cy.getCookie('user_session').should('have.property', 'value', 'abc123')
  })

  it('cy.getCookie() - получение куки', () => {
      // Устанавливаем куки 
      cy.setCookie('user_session', 'abc123')

      // Получаем куки
      cy.getCookie('user_session').should('have.property', 'value', 'abc123')
  })

  it('cy.getCookies() - получение всех куки для текущего домена', () => {
      // Проверяем, что куки пусты
      cy.getCookies().should('be.empty')

      // Устанавливаем куки 
      cy.setCookie('user_session', 'abc123')
      cy.setCookie('preferences', 'dark_mode')

      // Получаем куки
      cy.getCookies().should('have.length', 2).should((cookies) => {
          expect(cookies[0]).to.have.property('name', 'user_session')
          expect(cookies[1]).to.have.property('name', 'preferences')
      })
  })

  it('cy.clearCookie() - удаление куки', () => {
      // Устанавливаем куки 
      cy.setCookie('user_session', 'abc123')

      // Удаляем куки
      cy.clearCookie('user_session')

      // Проверяем, что куки удалены
      cy.getCookie('user_session').should('be.null')
  })

  it('cy.clearCookies() - удаление всех куки для текущего домена', () => {
      // Устанавливаем куки 
      cy.setCookie('user_session', 'abc123')
      cy.setCookie('preferences', 'dark_mode')

      // Удаляем все куки
      cy.clearCookies()

      // Проверяем, что куки пусты
      cy.getCookies().should('be.empty')
  })

  it('cy.getCookies() - получение всех куки текущего домена', () => {
    // Проверяем, что куки пусты
    cy.getCookies().should('be.empty')

    // Устанавливаем куки
    cy.setCookie('key1', 'value1')
    cy.setCookie('key2', 'value2')

    // Проверяем, что куки установлены 
    cy.getCookies().should('have.length', 2).should((cookies) => {
        expect(cookies[0]).to.have.property('name', 'key1')
        expect(cookies[1]).to.have.property('name', 'key2')
    })
})


  it('cy.clearAllCookies() - удаление всех куки браузера', () => {
      // Устанавливаем куки 
      cy.setCookie('key1', 'value1')
      cy.setCookie('key2', 'value2')

      // Удаляем все куки
      cy.clearAllCookies()

      // Проверяем, что куки пусты
      cy.getAllCookies().should('be.empty')
  })
})
