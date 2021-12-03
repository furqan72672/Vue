import axiosHandler from "./axios-interceptor";


export class TimeSlots{


    async getAll(){
        return (await axiosHandler.get('/time-slot')).data
    }
    
    async getOne(id){
        return (await axiosHandler.get(`/time-slot/${id}`)).data
    }
}