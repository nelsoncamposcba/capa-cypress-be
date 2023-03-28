/// <reference types="cypress" />

describe('Suite de ejemplos para comandos varios', function(){
    it('Ejemplo de wait', function(){
        cy.wait(10000)

        cy.log('Antes de cy.wait()')

        cy.wait(10000)
        cy.wait(10000)

        cy.log('Despues de cy.wait()')

        cy.wait(10000)
    })


    it('Ejemplo de pause', function(){
        cy.log('Antes de cy.pause()')

        cy.pause()

        cy.log('Despues de cy.pause()')
    })

    it('Ejemplo de debug', function(){
        cy.log('Antes de cy.debug()')
        cy.debug()

        cy.request('https://jsonplaceholder.typicode.com/todos/1')

        cy.log('Despues de cy.debug()')
        cy.debug()
    })
})