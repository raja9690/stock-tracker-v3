/* Api methods to trigger /functions */
import axios from 'axios'

const post = (data) => {
    return axios.post('/.functions/api-config', {
        body: JSON.stringify(data)
    }).then(response => {
        return response
    })
}

const get = async (functionName) => {
    return axios.get('/.functions/' + functionName).then(response => {
        return response
    })
}

const update = (data) => {
    console.log(data)
    return axios.post('/.functions/update-user-fav', {
        body: JSON.stringify(data)
    }).then(response => {
        return response
    })
}

export default {
    post: post,
    get: get,
    update: update
}