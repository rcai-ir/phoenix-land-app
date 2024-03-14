import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://oxydoo.com",
    headers:{
        "Content-Type": "application/json",
    }
})

export default axiosInstance;
