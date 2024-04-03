import axios from 'axios';

const axiosInstance = axios.create({
<<<<<<< HEAD
  baseURL: 'https://healthcareplus.oxydoo.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
=======
    baseURL: "https://oxydoo.com",
    headers:{
        "Content-Type": "application/json",
    }
})
>>>>>>> b250076a476487b39b736554ae7b95bcbf660f21

export default axiosInstance;
