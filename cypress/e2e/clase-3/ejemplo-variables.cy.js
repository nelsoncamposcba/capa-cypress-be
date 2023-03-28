/// <reference types="cypress" />


describe('Suite ejemplos variables de entorno', function(){
    it('Opcion 1 - Archivo configuracion', function(){
        cy.log(JSON.stringify(Cypress.env()))
        
        cy.log(Cypress.env('login_url'))
    })


    it.only('Opcion 3 - Por linea de comando', function(){
        cy.log(JSON.stringify(Cypress.env()))
        
        cy.log(Cypress.env('URL'))
    })
})