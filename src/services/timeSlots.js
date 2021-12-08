import axiosHandler from "./axios-interceptor";


export class TimeSlots{


    async getAll(){
        return (await axiosHandler.get('/time-slot')).data
    }
    
    async getOne(id){
        return (await axiosHandler.get(`/time-slot/${id}`)).data
    }
    
    async update(item){
        return (await axiosHandler.patch('/time-slot',item)).status
    }

    async create(item){
        return (await axiosHandler.post('/time-slot',item)).status
    }
}