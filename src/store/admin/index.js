import firebase from 'firebase'
import router from '../../router';

export default {
    namespaced: true,
    state: {
        comentarios: [],
        pedidos: [],
        usuario: '',
        errorMessage: ''
    },
    mutations: {
        //COMENTARIOS-------------------
        GET_COMMENTS(state, comentarios) {
            state.comentarios = comentarios;
        },
        GET_ORDERS(state, pedidos) {
            state.pedidos = pedidos;
        },
        //AUTH
        LOG_IN(state, user) {
            state.usuario = user;
            console.log(state.usuario)

        },
        LOG_OUT(state) {
            state.usuario = ''
        },
        //error
        ERROR(state, error) {
            state.errorMessage = error
        }

    },
    actions: {
        //PRODUCTOS-------------------
        async addProduct({ commit }, product) {
            try {
                let carga = await firebase
                    .firestore()
                    .collection('cervezas')
                    .add(product);
            } catch { error => console.log(error) }
        },
        deleteProduct({ commit }, id) {
            firebase
                .firestore()
                .collection('cervezas')
                .doc(id)
                .delete()
                .then(() => alert('Producto eliminado'))
        },
        updateProduct({ commit }, producto) {
            let data = producto.data
            data.ABV = Number(data.ABV)
            data.IBU = Number(data.IBU)
            data.volumen = Number(data.volumen)
            data.stock = Number(data.stock)
            data.precio = Number(data.precio)

            firebase
                .firestore()
                .collection('cervezas')
                .doc(producto.id)
                .update(data)
        },
        //PEDIDOS
        getPedidos({ commit }) {
            firebase
                .firestore()
                .collection('pedidos')
                .onSnapshot(snapshot => {
                    let pedidos = []
                    snapshot.forEach(comentario => {
                        pedidos.push({
                            data: comentario.data(),
                            id: comentario.id
                        })
                    })

                    commit("GET_ORDERS", pedidos)
                })
        },
        pedidoEntregado({ commit }, id) {
            firebase
                .firestore()
                .collection('pedidos')
                .doc(id)
                .update({ entregado: true })
        },
        pedidoNoEntregado({ commit }, id) {
            firebase
                .firestore()
                .collection('pedidos')
                .doc(id)
                .update({ entregado: false })
        },
        //COMENTARIOS-------------------
        getComments({ commit }) {
            firebase
                .firestore()
                .collection('comentarios')
                .onSnapshot(snapshot => {
                    let comentarios = []
                    snapshot.forEach(comentario => {
                        comentarios.push({
                            data: comentario.data(),
                            id: comentario.id
                        })
                    })

                    commit("GET_COMMENTS", comentarios)
                })
        },
        deleteComment({ commit }, id) {
            firebase
                .firestore()
                .collection('comentarios')
                .doc(id)
                .delete()
                .then(() => alert('Comentario eliminado'))
        },
        //AUTH
        async createUSer({ commit }, user) {
            try {
                let crearUsuario = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(user.email, user.password)

                delete user.password

                let usuarioAFirestore = await firebase
                    .firestore()
                    .collection('usuarios')
                    .add(user)
                return true
            } catch (error) {
                commit('ERROR', error.message)
                return false
            }
        },
        async signInWithEmailAndPass({ commit }, user) {
            try {
                const login = await firebase
                    .auth()
                    .signInWithEmailAndPassword(user.email, user.password);

                const snapshot = await firebase
                    .firestore()
                    .collection("usuarios")
                    .where("email", "==", user.email)
                    .get();

                snapshot.forEach((doc) => {
                    commit("LOG_IN", doc.data());
                });

                router.push({ name: 'Admin' })
                return true;
            }
            catch {
                error => {
                    console.log(error)
                    commit('ERROR', error.message)
                    return false
                }
            }

        },
        logOut({ commit }) {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    commit('LOG_OUT')
                    alert("Sesión cerrada");
                    router.push({ name: 'Home' });
                });
        },
    },
    modules: {
    }
}
