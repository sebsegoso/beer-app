// https://docs.cypress.io/api/introduction/api.html

describe('Testeando Inicio de sesión', () => {
  it('Login', () => {
    cy.visit('/login')
    cy.get('#EmailLogin').type('admin@beerapp.cl')
    cy.get('#PasswordLogin').type('123456')
    cy.get('#BtnLogin').click()
  })
})

