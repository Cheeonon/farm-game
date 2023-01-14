import axios from "axios";

const BACKEND_URL = "https://farm-game-api-production.up.railway.app";

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

export const sleep = (callback) => {
    axios.put(BACKEND_URL + "/sleep")
        .then(callback)
        .catch(errorCallback);
}

export const buySeed = (callback, name) => {
    axios.post(BACKEND_URL + "/buy/" + name)
        .then(callback)
        .catch(errorCallback);
}

export const sellPlant = (callback, id) => {
    axios.put(BACKEND_URL + "/sell/" + id)
        .then(callback)
        .catch(errorCallback);
}