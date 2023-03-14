/// <reference types="cypress" />

describe('Suite de Tarea', function(){
    it('ReqRes GET users by page', function(){
        cy.request({
            url: 'https://reqres.in/api/users?page=2',
            method: 'GET'
        }).then(resp => {
            cy.log('Status: ' + resp.status)
            cy.log('Body: ' + JSON.stringify(resp.body))    
        })
    })

    it('ReqRes GET user by id', function(){
        cy.request({
            url: 'https://reqres.in/api/users/2',
            method: 'GET'
        }).then(r => {
            cy.log(JSON.stringify(r.body))
        })
    })

    it('ReqRes POST create users', function() {
        let request_body = JSON.stringify({"name": "morpheus","job": "leader"})
        
        cy.request({
            url: 'https://reqres.in/api/users',
            method: 'POST',
            body: request_body
        }).then(response => {
            cy.log(response.status)
            cy.log(JSON.stringify(response.body))
        })
    })
    


})