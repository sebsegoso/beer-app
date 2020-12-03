import firebase from 'firebase'

export default {
    namespaced: true,
    state: {
        cervezas: [],
        cervecerias: [],
        errorMessagePr: ''
    },
    mutations: {
        GET_DATA(state, cervezas) {
            state.cervezas = cervezas;
        },
        GET_BREWERIES(state, cervecerias) {
            state.cervecerias = cervecerias;
        },
        ERROR(state, error) {
            state.errorMessagePr = error
        }
    },
    actions: {
        async getData({ commit }) {
            try {
                let getProducts = await firebase
                    .firestore()
                    .collection('cervezas')
                    .onSnapshot(snap => {
                        let cervezas = []
                        snap.forEach(cerveza => {
                            cervezas.push({
                                data: cerveza.data(),
                                id: cerveza.id
                            })
                        })
                        commit('GET_DATA', cervezas)
                    });

                return true
            } catch (error) {
                commit('ERROR', error.message)
                return false
            }
        },
        async getCervecerias({ commit }) {
            try {
                let getCervecerias = await firebase
                    .firestore()
                    .collection('cervecerias')
                    .onSnapshot(snap => {
                        let cervecerias = []
                        snap.forEach(cerveza => {
                            cervecerias.push({
                                data: cerveza.data(),
                                id: cerveza.id
                            })
                        })
                        commit('GET_BREWERIES', cervecerias)
                    });
                return true
            } catch (error) {
                commit('ERROR', error.message)
                return false
            }
        },
    },
    getters: {
        cervezasNuevas: (state) => {
            let nuevas = state.cervezas.filter(beer => beer.data.nueva === true && beer.data.stock > 0)
            return nuevas
        },
        cervezasConStock: (state) => {
            let conStock = state.cervezas.filter(beer => beer.data.stock > 0)
            return conStock
        },
        detalleCerveza: (state) => (path) => {
            let cervezaElegida = state.cervezas.find(cerveza => cerveza.data.path == path) || { data: {} }

            return cervezaElegida
        },
        resultadoBusqueda: (state, getters) => (busqueda) => {
            let typed = busqueda.trim().toUpperCase()
            let conStock = getters.cervezasConStock || []
            let resultado = conStock.filter(
                c => c.data.nombre.toUpperCase().includes(typed) ||
                    c.data.cerveceria.toUpperCase().includes(typed) ||
                    c.data.estilo.toUpperCase().includes(typed) &&
                    busqueda !== ''
            )
            return resultado
        }
    }
}