import firebase from 'firebase'
export default {
    namespaced: true,
    state: {
        carrito: [],
        pedido: {},
        errorMessage: ''
    },
    mutations: {
        ADDED_TO_CART(state, cerveza) {
            cerveza.data.cart = true
            cerveza.data.cantidad = 1
            state.carrito.push(cerveza)
            localStorage.setItem('carrito', JSON.stringify(state.carrito))
        },
        DELETED_FROM_CART(state, producto) {
            producto.data.cart = false;
            state.carrito = state.carrito.filter(cerveza => cerveza.id !== producto.id)
            localStorage.setItem('carrito', JSON.stringify(state.carrito))
        },
        ADD_ITEM(state, producto) {
            state.carrito = state.carrito.map(p => {
                if (p.id === producto.id) {
                    p.data.cantidad++;
                    return p
                }
                return p;
            })
        },
        SUBSTRACT_ITEM(state, producto) {
            state.carrito = state.carrito.map(p => {
                if (p.id === producto.id) {
                    p.data.cantidad--;
                    return p
                }
                return p;
            })
        },
        ORDER_DONE(state, pedido) {
            state.pedido = pedido
            console.log("Pedido realizado: ", state.pedido)
        },
        ERROR(state, error) {
            state.errorMessage = error
        }
    },
    actions: {
        anadirAlCarrito({ commit, rootState }, id) {
            let cervezaAnadida = rootState.Products.cervezas.find(cerveza => cerveza.id === id);
            commit('ADDED_TO_CART', cervezaAnadida)
        },
        quitarDelCarrito({ commit, state }, id) {
            let buscarEnCarrito = state.carrito.find(cerveza => cerveza.id === id)
            commit('DELETED_FROM_CART', buscarEnCarrito)
        },
        sumarProducto({ commit, state }, id) {
            let buscarEnCarrito = state.carrito.find(cerveza => cerveza.id === id)
            commit('ADD_ITEM', buscarEnCarrito)
        },
        descontarProducto({ commit, state }, id) {
            let buscarEnCarrito = state.carrito.find(cerveza => cerveza.id === id)
            commit('SUBSTRACT_ITEM', buscarEnCarrito)
        },
        async pedidoFinalizado({ commit, state }, pedido) {
            try {
                const db = firebase.firestore()
                //cargar pedido
                let venta = await db.collection('pedidos').add(pedido)
                pedido.id = venta.id
                commit('ORDER_DONE', pedido)
                //Descontar de stock
                state.pedido.productos.forEach(p => {
                    db.collection('cervezas').doc(p.id).update({ stock: p.producto.stock - p.cantidad })
                })
                return true
            } catch (error) {
                commit('ERROR', error.message)
                return false
            }
        },
    },
    getters: {
        cantidadProductos: (state) => {
            let cantidad = 0
            state.carrito.forEach(p => cantidad += p.data.cantidad)
            return cantidad
        },
        subtotal: (state) => {
            let total = 0
            state.carrito.forEach(p => {
                total += (p.data.cantidad * p.data.precio)
            })
            return total
        }
    }
}
