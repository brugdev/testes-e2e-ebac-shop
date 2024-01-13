// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});





Cypress.Commands.add('comprarProduto', (produto1, produto2, produto3, produto4) => {
    cy.get('.product-block ')//escolhendo primeiro produto
    .contains(produto1).click()
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.single_add_to_cart_button').click()//escolhendo primeiro produto
    cy.get('.logo-in-theme > .logo > a > .logo-img').click()// retorno a pagina inicial
    cy.get('.product-block ')//escolhendo segundo produto
    .contains(produto2).click()
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.single_add_to_cart_button').click()//escolhendo segundo produto
    cy.get('.logo-in-theme > .logo > a > .logo-img').click()
    cy.get('.product-block ')//escolhendo terceiro produto
    .contains(produto3).click()
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.single_add_to_cart_button').click()//escolhendo terceiro produto
    cy.get('.logo-in-theme > .logo > a > .logo-img').click()// retorno a pagina inicial
    cy.get('.product-block ')//escolhendo quarto produto
    .contains(produto4).click()
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.single_add_to_cart_button').click()//escolhendo quarto produto
    
    //finalizando a compra//
    cy.get('#cart > .dropdown-toggle').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
    //finalizando a compra//

    // ja  cadastrado //
    cy.get('.showlogin').click()
    cy.get('#username').click().type('bruno.teste@teste.com.br')
    cy.get('#password').click().type('teste@123')
    cy.get('.woocommerce-button').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.get('.woocommerce-notice').should('contain' , 'Obrigado. Seu pedido foi recebido.')






    })

