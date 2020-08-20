describe('Form App', () => {



    describe('Name input test', () => {
        it('open react app server its running on', () => {
            cy.visit('http://localhost:3000/')
        })

        it('insert an input for username and check', () => {
            cy.get('input[name="username"]')
            .type('Abdi')
            .should('have.value', 'Abdi')
        })
        it('insert an input for email and check', () => {
            cy.get('input[name="email"]')
            .type('abdi@abdi.com')
            .should('have.value', 'abdi@abdi.com')
        })
        it('insert an input for password and check', () => {
            cy.get('input[name="password"]')
            .type('******')
            .should('have.value', '******')
        })

        it("checks checkbox",  () => {
            cy.get('input[name="terms"]')
            .click()
        })
        it("clicks submit", () => {
            cy.get('button')
            .click()
        })


        
            

    })
    describe("check if new input shows", () => {
        it("checks new input is added", () => {
           cy.get(".friend-container") 
           
        })


    })









})