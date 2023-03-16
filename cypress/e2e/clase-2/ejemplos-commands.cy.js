/// <reference types="cypress" />

describe('Test Suite para Commands', function() {
    it('Probando comandos personalizados', function(){
        cy.hola_mundo();
    })

    it('Probando comando personalizado con parametros', function() {
        cy.hola_mundo_persona("Nelson", "Campos")
    })

    it('Probando comando personalizado con wrap', function() {
        cy.get_user_id(1).then(resp => {
            expect(200).to.be.eq(resp.status)
        })
    })
})