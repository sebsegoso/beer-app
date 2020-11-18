import firebase from 'firebase'

export default {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        async sendFeedback({ commit }, comentario) {
            try {
                const enviarComentario = await firebase
                                                .firestore()
                                                .collection('comentarios')
                                                .add(comentario);

                return true
                
            } catch (error) {
                alert(error)
                return false
            }
        }
    }

}
