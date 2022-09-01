import axios from "axios";

const BACKEND_URL = "http://localhost:8080";

const errorCallback = (error) => {
    console.log(error);
}

export const getUserData = (callback) => {
      axios.get(BACKEND_URL + "/user")
        .then(callback)
        .catch(errorCallback);
}