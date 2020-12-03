describe('CRUD y venta+entrega de producto', () => {
    let nombre = 'Cerveza de prueba'
    let cerveceria = 'Test brew'
    let codigo = 'test'
    let estilo = 'Test Pale Ale'
    let origen = 'vscode'
    let ABV = 5
    let IBU = 40
    let foto = 'https://picsum.photos/200'
    let volumen = 473
    let stock = 4
    let precio = 3490
    let path = 'Testing'
    let resena = 'Testeando la creación de un producto'


    it('Crear producto', () => {
        cy.visit('/login')
            .get('#EmailLogin').type('admin@beerapp.cl')
            .get('#PasswordLogin').type('123456')
            .get('#BtnLogin').click()
            .get('#BtnMenuAdmin').click()
            .get('#ToProductos').click()
            .get('.v-expansion-panel-header').click()
            .get('#NewProductNombre').type(nombre)
            .get('#NewProductCerveceria').type(cerveceria)
            .get('#NewProductCodigo').type(codigo)
            .get('#NewProductEstilo').type(estilo)
            .get('#NewProductOrigen').type(origen)
            .get('#NewProductABV').type(ABV)
            .get('#NewProductIBU').type(IBU)
            .get('#NewProductFoto').type(foto)
            .get('#NewProductVolumen').type(volumen)
            .get('#NewProductStock').type(stock)
            .get('#NewProductPrecio').type(precio)
            .get('#NewProductPath').type(path)
            .get(':nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
            .get('#NewProductResena').type(resena)
            .get('#BtnNewProduct').click()
            .get('.v-toast__text').should('to.be.visible')
            .wait(4000)
            .log('producto creado')
    })

    it('Buscarlo en la tienda y buscarlo en el buscador', () => {
        cy.visit('/')
            .get('#CervezasNuevas').contains(nombre)
            .get('#ToCervezas').click()
            .get('#BuscadorCervezas').type(cerveceria)
            .get('.card_product').should('have.length', 1)
            .get(`#BtnCard${codigo}`).click()

    })

    it('Ver vista detalle cerveza, el producto debe aparecer como agregado al carro, ver producto en el carro', () => {
        cy.get(`#DetalleProducto${codigo}`).click()
            .wait(1000)
            .get('#ProductoAgregado').should('to.be.visible')
            .get('#ProductoAgregado').click()
            .get('#AgregarProducto').should('to.be.visible')
            .get('#AgregarProducto').click()
            .get('#ToCarro').click()
            .get('#CantidadProductos').contains('span', 1)
            .get('#SumarProducto').click()
            .get('#SumarProducto').click()
            .get('#CantidadProductos').contains('span', 3)
            .get('#RestarProducto').click()
            .get('#CantidadProductos').contains('span', 2)
            .get('#SumarProducto').click()
            .get('#CantidadProductos').contains('span', 3)
            .log('Producto agregado al carro y botones de aumentar o restar funcionan')
    })

    let nombreCliente = 'Test'
    let apellidos = 'Carro de compras'
    let email = 'testing@carro.cl'
    let telefono = 123456789
    let comentario = "Probando el carro de compras"
    let calle = 'Alameda'
    let numero = 1313
    let departamento = '13C'

    it('Confirmar pedido', () => {
        cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-input--radio-group__input > :nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
            .get('#CartNombre').type(nombreCliente)
            .get('#CartApellidos').type(apellidos)
            .get('#CartEmail').type(email)
            .get('#CartTelefono').type(telefono)
            .get('.v-select__selections').click()
            .get('.v-list-item__title').first().click()
            .get('#CartDireccionCalle').type(calle)
            .get('#CartDireccionNumero').type(numero)
            .get('#CartDireccionDepartamento').type(departamento)
            .get(':nth-child(12) > .v-input__control > .v-input__slot > .v-input--radio-group__input > .v-item--active > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
            .get('#CartComentario').type(comentario)
            .get('#BtnCart').click()
            .get('.v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
            .get('#BtnCartConfirm').click()
            .log('Pedido realizado')
    })


    it('Verificar pedido en admin', () => {
        cy.get('#OrderId').then(($e) => {
            let codigoCompra = $e.text();
            cy.visit('/login')
            cy.get('#EmailLogin').type('admin@beerapp.cl')
            cy.get('#PasswordLogin').type('123456')
            cy.get('#BtnLogin').click()
            cy.get('.v-data-table__wrapper').contains(codigoCompra)
            cy.get(`.DetallePedido${nombreCliente}${telefono}`).first().click()
            cy.get('#entregarPedido').click()
            cy.log('Pedido registrado y marcado como entregado')
        })
    })

    it('Editar producto', () => {
        cy.get('#BtnMenuAdmin').click()
        .get('#ToProductos').click()
        .get('#TablaProductos').contains(codigo)
        .get(`.EditarProducto${codigo}`).click()
        .get("#EditStock").clear().type('0')
        .get('#ConfirmarEdicion').click()
    })


    it('Producto agotado debería NO aparecer', () => {
        cy.visit('/cervezas')
            .get('#BuscadorCervezas').type(cerveceria)
            .get('.card_product').should('have.length', 0)
    })

    it('Eliminar producto creado', () => {
        cy.visit('/login')
            .get('#EmailLogin').type('admin@beerapp.cl')
            .get('#PasswordLogin').type('123456')
            .get('#BtnLogin').click()
            .get('#BtnMenuAdmin').click()
            .get('#ToProductos').click()
            .get('#TablaProductos').contains(codigo)
            .get(`.BorrarProducto${codigo}`).click()
            .log('Producto eliminado')
            .end()
    })
})