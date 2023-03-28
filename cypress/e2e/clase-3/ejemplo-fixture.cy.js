/// <reference types="cypress" />


describe('Suite ejemplos fixture', function(){
    it('Fixture', function(){
        cy.fixture('example.json').then(e => {
            cy.log('name: ' + e.name)
            cy.log('email: ' + e.email)
            cy.log('body: ' + e.body)
        })
    })

    it('Fixture dos', function(){
        cy.fixture('response/usuario-uno.json').then(e => {
            cy.log('name: ' + e.name)
            cy.log('id: ' + e.id)

            expect(1).to.equal(e.id)
        })
    })


    it('Fixture tres', function(){
        cy.fixture('array_example.json').then(lista => {
            lista.forEach(element => {
                if(element.id === 1){
                    cy.log('name: ' + element.name)
                    cy.log('id: ' + element.id)    
                }
            });
        })
    })

    it.only('Fixture cuatro', function(){
        cy.request(Cypress.env('jsonplaceholder') + Cypress.env('todos') + '/1').then(resp => {
            cy.log(JSON.stringify(resp.body))

            cy.fixture('response/usuario-uno.json').then(e => {    
                expect(resp.body.id).to.equal(e.id)
            })
    
        })
    })

})