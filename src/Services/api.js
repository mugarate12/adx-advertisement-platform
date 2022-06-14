import axios from 'axios'

const api = axios.create({
  baseURL: 'https://sales-advertisement-api.herokuapp.com'
})

export default api