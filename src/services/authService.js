// import axios from 'axios';
import axiosHandler from "./axios-interceptor";

export class AuthService {

    async signIn(signIn) {

        // console.log(axiosHandler.defaults.baseURL)
        const token = (await axiosHandler.post('/auth/sign-in', signIn)).data
        localStorage.setItem('token', token.access_token);
    }

    async getProfile() {

        // console.log(axiosHandler.defaults.baseURL)
        let user = (await axiosHandler.get('/auth/profile')).data;
        localStorage.setItem('user', JSON.stringify(user));
    }
}