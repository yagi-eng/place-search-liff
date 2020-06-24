import qs from "qs";

export class RequestClient {
    constructor(axios) {
        this.axios = axios
    }

    async get(uri, params = {}) {
        const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
        const query = queryString.length > 0 ? `${uri}?${queryString}` : uri
        return await this.axios.$get(query)
    }

    async post(uri, param = {}) {
        var urlSearchParams = new URLSearchParams()
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                var val = param[key];
                urlSearchParams.append(key, val)
            }
        }
        return await this.axios.$post(uri, urlSearchParams)
    }
}

export function createRequestClient(axios) {
    return new RequestClient(axios)
}