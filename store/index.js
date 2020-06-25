import { createRequestClient } from '~/store/request-client';

export const state = () => ({
    lineIDToken: "",
    searchPlaces: [],
    favoritePlaces: [],
})

export const actions = {
    async setLineIDToken({ commit }, payload) {
        this.$cookies.set('jwt_token', payload)
        commit('mutateLineIDToken', payload)
    },
    login({ commit, dispatch }) {
        liff
            .init({
                liffId: process.env.LIFF_ID
            })
            .then(() => {
                // Webブラウザからアクセスされた場合は、LINEにログインする
                if (!liff.isInClient() && !liff.isLoggedIn()) {
                    window.alert("LINEアカウントにログインしてください。")
                    liff.login({ redirectUri: location.href })
                }
                var token = liff.getIDToken()
                console.log(token)
                this.$cookies.set('jwt_token', token)
                commit('mutateLineIDToken', token)
            })
            .catch(err => {
                console.log("LIFF Initialization failed ", err)
            })
        this.app.router.push('/')
    },
    async searchPlaces({ commit }, payload) {
        const client = createRequestClient(this.$axios)
        const res = await client.get(payload.uri, payload.params)
        commit('mutateSearchPlaces', res)
    },
    async getFavoritePlaces({ commit }, payload) {
        const client = createRequestClient(this.$axios)
        const res = await client.post(payload.uri, payload.params)
        commit('mutateFavoritePlaces', res)
    }
}

export const mutations = {
    mutateLineIDToken(state, idToken) {
        state.lineIDToken = idToken
    },
    mutateSearchPlaces(state, payload) {
        state.searchPlaces = payload.GoogleMapOutputs ? state.searchPlaces.concat(payload.GoogleMapOutputs) : []
    },
    mutateFavoritePlaces(state, payload) {
        state.favoritePlaces = payload.GoogleMapOutputs ? state.favoritePlaces.concat(payload.GoogleMapOutputs) : []
    },
}

export const getters = {
    getLineIDToken(state) {
        return state.lineIDToken
    },
    getSearchPlaces(state) {
        return state.searchPlaces
    },
    getFavoritePlaces(state) {
        return state.favoritePlaces
    },
}