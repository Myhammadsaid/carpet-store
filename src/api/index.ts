import axios from 'axios'

const main_URL = axios.create({
	baseURL: 'https://fakestoreapi.com',
})

export default main_URL
