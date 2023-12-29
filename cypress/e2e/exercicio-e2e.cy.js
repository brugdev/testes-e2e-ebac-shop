/// <reference types="cypress" />
let dadosLogin

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {//escolhendo os produtos
        cy.get('.product-block ')//escolhendo primeiro produto
        .contains('Ingrid Running Jacket').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.single_add_to_cart_button').click()//escolhendo primeiro produto
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()// retorno a pagina inicial
        cy.get('.product-block ')//escolhendo segundo produto
        .contains('Augusta Pullover Jacket').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.single_add_to_cart_button').click()//escolhendo segundo produto
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()
        cy.get('.product-block ')//escolhendo terceiro produto
        .contains('Josie Yoga Jacket').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()//escolhendo terceiro produto
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()// retorno a pagina inicial
        cy.get('.product-block ')//escolhendo quarto produto
        .contains('Eos V-Neck Hoodie').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()//escolhendo quarto produto
        
        //finalizando a compra//
        cy.get('#cart > .dropdown-toggle').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        //finalizando a compra//

        // ja cadastrado //
        cy.get('.showlogin').click()
        cy.get('#username').click().type('bruno.teste@teste.com.br')
        cy.get('#password').click().type('teste@123')
        cy.get('.woocommerce-button').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain' , 'Obrigado. Seu pedido foi recebido.')






        })

    
        



        

         
    });




