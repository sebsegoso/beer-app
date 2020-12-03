describe('Hacer un comentario en el formulario del footer y verificar que aparezca en la tabla de comentarios', () => {
    let nombre = 'Testeando Comentarios'
    let email = 'test@test.test'
    let comentario = 'Estamos probando si los comentarios se están realizando de manera correcta.'

    it('Hacer comentario', () => {
        cy.visit('/')
        cy.get('#FooterFormName').type(nombre)
        cy.get('#FooterFormEmail').type(email)
        cy.get('#FooterFormComment').type(comentario)
        cy.get('#BtnFooterForm').click()
        cy.get('.v-toast__text').should('to.be.visible')
        cy.log('Comentario realizado')
    })

    it('verificar que apareza en tabla de comentarios', () => {
        cy.visit('/login')
            .get('#EmailLogin').type('admin@beerapp.cl')
            .get('#PasswordLogin').type('123456')
            .get('#BtnLogin').click()
            .get('#BtnMenuAdmin').click()
            .get('#ToComentarios').click()
            cy.wait(1500)
            .get('.v-data-table__wrapper').contains(comentario)
    })
})