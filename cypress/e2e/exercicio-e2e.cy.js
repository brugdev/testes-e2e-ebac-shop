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


    it('Deve comprar 4  um produto', () => {
        cy.comprarProduto("Ingrid Running Jacket","Augusta Pullover Jacket","Josie Yoga Jacket","Stellar Solar Jacket" )

        
    });
    
  
    });




