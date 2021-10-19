import axios from 'axios'

const getAPI = axios.create({
    baseURL: 'https://api.saude.apptime.com.br',
    timeout: 1000,
})

export {
    getAPI
}
