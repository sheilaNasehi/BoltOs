import axios from 'axios'

const serverUrl = 'http://localhost:3001'

export default function query(url, body = {}) {
    return axios.post(serverUrl + url, body)
}