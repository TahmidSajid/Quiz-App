import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers:{
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
    },
});

api.interceptors.request.use((config) => {
    let token = localStorage.getItem('token')

    if (token) {
        config.headers.set('Authorization', `Bearer ${token}`)
    }

    return config;
})

export default api;