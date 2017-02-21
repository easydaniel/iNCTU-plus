import urlJoin from 'url-join'
import urlTool from 'url'
import qs from 'query-string'
import { HOST, VERSION } from './Config'
import _ from 'lodash'

const combinePayload = (res, payload) => {
    return Promise.resolve(
        res.then((r) => ({
            ...r,
            payload
        }))
    )
}

export default (url, options = {}) => {
    url = urlJoin(HOST, VERSION, url)
    let body = options.body || {}
    let urlObject = urlTool.parse(url)
    if (!options.method || options.method.toLowerCase() === 'get') {
        urlObject.query = _.assign((qs.parse(urlObject.query) || {}), body)
        url = urlTool.format(urlObject)
        delete options.body
    }
    options.credentials = 'include'
    return fetch(url, options).then((res) => {
        if (res.status >= 200 && res.status < 300) {
            return combinePayload(res.json(), body)
        } else {
            return Promise.reject(combinePayload(res.json(), body))
        }
    })
}
