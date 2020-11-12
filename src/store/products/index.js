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
        }
    },
    getters: {
        cervezasNuevas: (state) => {
            let nuevas = state.cervezas.filter(beer => beer.data.nueva === true)
            return nuevas
        },
        detalleCerveza: (state) => (path) => {
            let cervezaElegida = state.cervezas.find(cerveza => cerveza.data.path === path)
            return cervezaElegida
        },
        resultadoBusqueda: (state) => (busqueda) => {
            let typed = busqueda.trim().toUpperCase()
            console.log(`typed: ${typed}`)

            let resultado = state.cervezas.filter(
                c => c.data.nombre.toUpperCase().includes(typed) ||
                    c.data.cerveceria.toUpperCase().includes(typed) ||
                    c.data.estilo.toUpperCase().includes(typed) &&
                    busqueda !== ''
            )
            console.log(`Resultado: ${resultado}`)

            return resultado
        }
    }
}