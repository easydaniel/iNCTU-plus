import urlTool from 'url'
import uj from 'url-join'
import qs from 'query-string'
import { HOST, VERSION } from './Config'

const combinePayload = (res, payload) => {
    return Promise.resolve(
        res.then((r) => ({
            ...r,
            payload
        }))
    )
}

export default (url, options = {}) => {
    url = uj(HOST, VERSION, url)
    let { body } = options;
    let urlObject = urlTool.parse(url)
    if (!options.method || options.method.toLowerCase() === 'get') {
        urlObject.query = { ...qs.parse(urlObject.query), ...body }
        url = urlTool.format(urlObject)
        delete options.body
    }
    options.credentials = 'include'
    return fetch(url, options).then((res) => {
        const payload = combinePayload(res.json(), body)
        if (res.status >= 200 && res.status < 300) {
            return payload
        } else {
            return Promise.reject(payload)
        }
    })
}
