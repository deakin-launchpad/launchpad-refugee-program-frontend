/**
 *  Created by Nirav Bhimani
 **/

// import { axiosInstance } from "./axiosInstance";
import axios from 'axios'

class API {
  // POST Request
  registerUser = data => {
    console.log(data)
    axios({
      method: 'post',
      url: 'http://10.140.16.209:8011/api/user/register',
      data: data
    })
      .then(response => response)
      .catch(error => console.log(error))
  }
  loginUser = (data, accessToken) => {
    axios({
      method: 'post',
      url: 'http://10.1.40.16.209:8011/api/user/login',
      data: data
    })
      .then(response => accessToken(response.data.data.accessToken))
      .catch(error => console.log(error))
  }
  // GET Request
}

const instance = new API()
export default instance
