import axios from "axios";

const axiosInstanceBE=axios.create({
    baseURL: import.meta.env.VITE_BE_URL,
    headers:{
        "Content-Type": "application/json",
    },
})


const setAuthToken = (token) => {
    if (token) {
        axiosInstanceBE.defaults.headers['Authorization'] = `Bearer ${token}`;
    } else {
        delete axiosInstanceBE.defaults.headers['Authorization'];
    }
};

export { axiosInstanceBE, setAuthToken };