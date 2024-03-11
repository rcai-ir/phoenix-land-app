import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://viraweb123.ir",
    headers:{
        "Content-Type": "application/json",
    }
})

export default axiosInstance;