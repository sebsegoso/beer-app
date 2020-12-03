describe('Crear usuario, login&logout y verificar si aparece el nombre de usuario en navbar', () => {
  const nombre = 'Creando Usuario'
  const email = 'test@beerapp.cl'
  const clave = '123456'

  it('Login', () => {
    cy.visit('/login')
    cy.get('#EmailLogin').type('admin@beerapp.cl')
    cy.get('#PasswordLogin').type('123456')
    cy.get('#BtnLogin').click()
  })

  it('Crear Usuario', () => {
    cy.get('#BtnMenuAdmin').click()
    cy.get('#BtnCreateUser').click()
    cy.location('pathname').should('eq', '/admin/crear-usuario')
    cy.get('#NombreCreateUser').type(nombre)
    cy.get('#EmailCreateUser').type(email)
    cy.get('#PassCreateUser').type(clave)
    cy.get('#ConfirmPassCreateUser').type(clave)
    cy.get('#FechaCreateUser').click()
    cy.get('.v-date-picker-years > :nth-child(26)').click()
    cy.get('tbody > :nth-child(1) > :nth-child(2) > .v-btn').click()
    cy.get(':nth-child(3) > :nth-child(4) > .v-btn').click()
    cy.get(':nth-child(6) > #BtnCreateUser').click()
    cy.get('.v-toast__text').should('to.be.visible')
    cy.wait(3000)
  })

  it('Logout', () => {
    cy.get('#BtnMenuAdmin').click()
    cy.get('#BtnLogout').click()
    cy.location('pathname').should('eq', '/')
  })

  it('Iniciar sesión con nuevo usuario y verificar nombre en Navbar', () => {
    cy.visit('/login')
    cy.get('#EmailLogin').type(email)
    cy.get('#PasswordLogin').type(clave)
    cy.get('#BtnLogin').click()
    cy.get('#NombreUsuarioAdmMenu').contains('span', nombre)
    cy.log(`'${nombre}' aparece en navbar`)
  })
});


