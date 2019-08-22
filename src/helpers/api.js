/**
 *  Created by Nirav Bhimani
 **/

// import axios from "axios";
import { axiosInstance } from "./axiosInstance";

class API {
  // POST Request
  registerUser = data => {

    axiosInstance.post('user/register', data).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
    // axios({
    //   method: "post",
    //   url: "http://localhost:8031/api/user/register",
    //   data
    // })
    //   .then(response => response)
    //   .catch(error => console.log(error));
  };

  loginUser = (data, accessToken) => {
    axiosInstance.post('user/login', data).then(response => {
      console.log(response);
      accessToken(response.data.data.accessToken);
    }).catch(error => {
      console.log(error);
    })

    // axios({
    //   method: "post",
    //   url: "http://localhost:8031/api/user/login",
    //   data: data
    // })
    //   .then(response => accessToken(response.data.data.accessToken))
    //   .catch(error => console.log(error));
  };
  // GET Request
}

const instance = new API();
export default instance;
