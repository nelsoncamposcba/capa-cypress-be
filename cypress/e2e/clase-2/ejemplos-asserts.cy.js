/// <reference types="cypress" />

describe('Suite Test de Asserts', function(){

    it('Ejemplo con GET', function() {
        cy.request('https://jsonplaceholder.typicode.com/todos/1').then(resp => {
            //cy.log(JSON.stringify(resp.body))

            expect(200).to.eq(resp.status)
            expect(resp.body.userId).to.eq(1)
            expect(resp.body.id).to.not.equal(3)
            expect(resp.body.title.toUpperCase()).to.contain("AUT")
            expect(resp.body.completed).to.equal(false)

            expect(resp.body).to.have.property("title")

            //{"userId":1,"id":1,"title":"delectus aut autem","completed":false}
        })
    })
})