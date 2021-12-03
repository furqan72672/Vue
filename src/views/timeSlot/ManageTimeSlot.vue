<template>
<div class=" d-flex justify-center align-center my-5">
    <ManagementForm :enableSubmit="true" class="col-5">
        <span class="mx-auto" style="font-size:125%" slot="formTitle">{{item?"Update Time Slot":"Create Time Slot"}}</span>
        <v-form slot="form" class="col-11 mx-auto">
            <span style="font-weight:bold;">Timeslot From</span>
            <div class="d-flex mt-2">
                <v-select v-model="timeFrom" outlined dense label="Hour" color="#23277c" class="mr-5" :items="hours"></v-select>
                <v-select v-model="ofDayFrom" outlined dense label="AM/PM" color="#23277c" :items="amPm"></v-select>
            </div>
            <span style="font-weight:bold;">Timeslot To</span>
            <div class="d-flex mt-2">
                <v-select v-model="timeTo" outlined dense label="Hour" color="#23277c" class="mr-5" :items="hours"></v-select>
                <v-select v-model="ofDayTo" outlined dense label="AM/PM" color="#23277c" :items="amPm"></v-select>
            </div>
        </v-form>
    </ManagementForm>
</div>
</template>

<script>


import ManagementForm from '../../components/ManagementForm.vue'
import {TimeSlots} from '../../services/timeSlots'
import {timeFormatter} from '../../utils/timeFormatter'



export default {
    name:'ManageTimeSlot',
    components:{
        ManagementForm,
    },
    data(){
        return{
            hours:['1','2','3','4','5','6','7','8','9','10','11','12'],
            amPm:['AM','PM'],
            service:new TimeSlots(),
            timeSlot:null,
            ofDayTo:null,
            timeTo:null,
            ofDayFrom:null,
            timeFrom:null,
        }
    },
    async beforeMount(){
        if(!this.$route.query.id) return;
        this.timeSlot=await this.service.getOne(this.$route.query.id);
        this.timeSlot=timeFormatter(this.timeSlot);
        this.timeTo=this.timeSlot.to.split(" ")[0];
        this.ofDayTo=this.timeSlot.to.split(" ")[1];
        this.timeFrom=this.timeSlot.from.split(" ")[0];
        this.ofDayFrom=this.timeSlot.from.split(" ")[1];
    },
}
</script>