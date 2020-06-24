import { createRequestClient } from '~/store/request-client';

export const state = () => ({
    searchPlaces: [],
    favoritePlaces: [],
})

export const actions = {
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
    mutateSearchPlaces(state, payload) {
        state.searchPlaces = payload.GoogleMapOutputs ? state.searchPlaces.concat(payload.GoogleMapOutputs) : []
    },
    mutateFavoritePlaces(state, payload) {
        state.favoritePlaces = payload.GoogleMapOutputs ? state.favoritePlaces.concat(payload.GoogleMapOutputs) : []
    },
}

export const getters = {
    getSearchPlaces(state) {
        return state.searchPlaces
    },
    getFavoritePlaces(state) {
        return state.favoritePlaces
    },
}