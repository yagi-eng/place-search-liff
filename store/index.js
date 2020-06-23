import { createRequestClient } from '~/store/request-client';

export const state = () => ({
    searchPlaces: [],
})

export const actions = {
    async searchPlaces({ commit }, payload) {
        const client = createRequestClient(this.$axios)
        const res = await client.get(payload.uri, payload.params)
        commit('mutateSearchPlaces', res)
    }
}

export const mutations = {
    mutateSearchPlaces(state, payload) {
        state.searchPlaces = payload.GoogleMapOutputs ? state.searchPlaces.concat(payload.GoogleMapOutputs) : []
        console.log(state.searchPlaces)
    },
}

export const getters = {
    getSearchPlaces(state) {
        return state.searchPlaces
    },
}