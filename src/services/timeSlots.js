import axiosHandler from "./axios-interceptor";


export class TimeSlots{


    async getAll(){
        return (await axiosHandler.get('https://api.servicemywoodymail.com/time-slot')).data
    }
}