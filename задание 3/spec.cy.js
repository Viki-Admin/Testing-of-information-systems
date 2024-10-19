describe('SauceDemo Tests', () => {
  
  it('should log in with valid credentials', () => {
    cy.visit('https://www.saucedemo.com');
    
    // Заполнение формы логина и авторизация
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Проверка, что после авторизации открыта страница товаров
    cy.url().should('include', '/inventory.html');
  });

  it('should sort products by price (low to high)', () => {
    // Логинимся
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Сортировка по возрастанию цены
    cy.get('.product_sort_container').select('Price (low to high)');
    
    // Проверка, что цены отсортированы по возрастанию
    cy.get('.inventory_item_price').then((prices) => {
      const priceValues = [...prices].map(price => parseFloat(price.innerText.replace('$', '')));
      expect(priceValues).to.deep.equal(priceValues.sort((a, b) => a - b));
    });
  });

  it('should add two products to cart and complete the order', () => {
    // Логинимся
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Добавляем два товара в корзину
    cy.get('.btn_inventory').eq(0).click();
    cy.get('.btn_inventory').eq(1).click();

    // Переходим в корзину
    cy.get('.shopping_cart_link').click();

    // Проверка, что в корзине два товара
    cy.get('.cart_item').should('have.length', 2);

    // Начинаем оформление заказа
    cy.get('#checkout').click();

    // Заполняем данные для оформления заказа
    cy.get('#first-name').type('Test');
    cy.get('#last-name').type('User');
    cy.get('#postal-code').type('12345');
    cy.get('#continue').click();

    // Завершаем заказ
    cy.get('#finish').click();

    // Проверка успешности оформления заказа
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  });

});