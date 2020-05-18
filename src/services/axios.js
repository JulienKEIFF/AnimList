import Axios from 'axios'

class AxiosService {
  constructor() {
  }
  baseURL = process.env.VUE_APP_SERVER_URL || 'http://localhost:3000/api/v1'
  instance = Axios.create({
    baseURL: this.baseURL
  })
}


export default AxiosService

export const AxiosServices = new AxiosService()