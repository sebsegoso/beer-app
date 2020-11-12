import firebase from 'firebase'

export default {
    namespaced: true,
    state: {
    },
    mutations: {
    },
    actions: {
        async addProduct({ commit }, product) {
            try {
                await firebase
                    .firestore()
                    .collection('cervezas')
                    .add(product);

                alert(`Producto agregado: ${product.nombre}`)
            } catch { error => console.log(error) }


        }

    },
    modules: {
    }
}
