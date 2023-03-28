/// <reference types="cypress" />


describe('Suite ejemplos Hooks', function(){
    before(function(){
        cy.log('Soy el hook before')
    })

    beforeEach(function(){
        cy.log('Soy el hook beforeEach')
    })

    it('Test Case 1', function(){})

    it.only('Test Case 2', function(){})

    it('Test Case 3', function(){})

    afterEach(function(){
        cy.log('Soy el hook afterEach')
    })

    after(function(){
        cy.log('Soy el hook after')
    })
})