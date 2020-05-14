import Axios from 'axios'

class AxiosService {
  constructor() {
  }
  baseURL = 'http://localhost:3000/api/v1'
  instance = Axios.create({
    baseURL: 'http://localhost:3000/api/v1'
  })

}


export default AxiosService

export const AxiosServices = new AxiosService()