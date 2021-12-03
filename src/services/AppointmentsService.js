// import axios from 'axios';
import axiosHandler from './axios-interceptor';

export class GetAppointments{

    async getAllPopulated(status){
        return (await axiosHandler.get('/appointment/populated/'+status)).data;
    }

    async getDashboard(){
        return (await axiosHandler.get('/appointment/dashboard/')).data;
    }

    async getOne(id){
        return (await axiosHandler.get(`/appointment/${id}`)).data;
    }
}
