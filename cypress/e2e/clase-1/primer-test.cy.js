/// <reference types="cypress" />


describe("Test suite de TC placeholder", function(){

    it("Llamado a Get Posts", function(){
        cy.request("https://jsonplaceholder.typicode.com/posts").then(resp => {
            //cy.log(JSON.stringify(resp.body))


            cy.log('Status Code: ' + resp.status)
            cy.log('Body: ' + JSON.stringify(resp.body))
            cy.log('Headers: ' + JSON.stringify(resp.headers))
            cy.log('Duration: ' + resp.duration)
        });
    })

    it("Llamado a GET Posts", function(){
        cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then(pepito => {
            cy.log(JSON.stringify(pepito.body))
        });
    })

    it("Llamado a POST posts", function(){
        cy.request("POST", "https://jsonplaceholder.typicode.com/posts", JSON.stringify({title: 'foo', body: 'bar',userId: 1 })).then(resp => {
            cy.log('Status code: ' + resp.status)

            cy.log('Body: ' + JSON.stringify(resp.body))
        }) 
    })

    it("Llamado a POST posts otro formato", function(){
        let body_request = JSON.stringify({title: 'foo', body: 'bar',userId: 1 });

        cy.request({
            method: 'POST',
            url: "https://jsonplaceholder.typicode.com/posts",
            body: body_request,
            failOnStatusCode: false
        }).then(resp => {
            cy.log('Status code: ' + resp.status)

            cy.log('Body: ' + JSON.stringify(resp.body))
        })
    })
})