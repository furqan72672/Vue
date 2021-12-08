import axios from 'axios'

const axiosHandler = axios.create({
    baseURL: 'http://46.101.81.185:9200',
    timeout: 10000,
    params: {} // do not remove this, its added to add params later in the config
});

axiosHandler.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    // console.log(token)
    if (token) {
        config.headers.common["Authorization"] = 'bearer ' + token;
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})

export default axiosHandler;