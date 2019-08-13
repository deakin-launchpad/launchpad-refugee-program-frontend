/**
 *  Created by Nirav Bhimani
 **/

// import { axiosInstance } from "./axiosInstance";
import axios from "axios";

class API {
  // POST Request
  registerUser = data => {
    axios({
      method: "post",
      url: "http://localhost:8000/api/user/register",
      data
    })
      .then(response => response)
      .catch(error => console.log(error));
  };

  loginUser = (data, accessToken) => {
    axios({
      method: "post",
      url: "http://localhost:8000/api/user/login",
      data: data
    })
      .then(response => accessToken(response.data.data.accessToken))
      .catch(error => console.log(error));
  };
  // GET Request
}

const instance = new API();
export default instance;
