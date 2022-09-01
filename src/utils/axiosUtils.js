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

export const getMarketData = (callback) => {
    axios.get(BACKEND_URL + "/market")
        .then(callback)
        .catch(errorCallback);
}

export const waterPlant = (callback, id) => {
    axios.put(BACKEND_URL + "/water/" + id)
        .then(callback)
        .catch(errorCallback);
}

export const fertilizePlant = (callback, id) => {
    axios.put(BACKEND_URL + "/fertilize/" + id)
        .then(callback)
        .catch(errorCallback);
}