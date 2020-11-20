import firebase from 'firebase'

export default {
    namespaced: true,
    state: {
        cervezas: []
    },
    mutations: {
        GET_DATA(state, cervezas) {
            state.cervezas = cervezas;
        }
    },
    actions: {
        getData({ commit }) {
            firebase
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
        },
        getCervecerias({ commit }) {
            firebase
                .firestore()
                .collection('cervecerias')
                .onSnapshot(snap => {
                    let cervecerias = []
                    snap.forEach(cerveza => {
                        let beerdata = cerveza.data()
                        cervecerias.push({
                            data: beerdata,
                            id: cerveza.id
                        })
                    })
                    // commit('GET_DATA', cervezas)
                });
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
        resultadoBusqueda: (state , getters) => (busqueda) => {
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