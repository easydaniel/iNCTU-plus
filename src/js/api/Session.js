import ApiFetch from './Base'

export default {
    post: (data) => ApiFetch('/session/', {
        method: 'POST',
        body: data
    })
}
