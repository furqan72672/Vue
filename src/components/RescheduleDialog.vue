<template>
    <!-- <div > -->
    <v-dialog persistent v-model="show">
        <v-card class="pb-4 ma-5" width="50vh">
            <v-card-title>Update Appointment Time</v-card-title>
            <v-select dense :items="data"></v-select>
            <!-- <v-date-picker ></v-date-picker> -->
        </v-card>
    </v-dialog>
    <!-- <v-snackbar timeout="2000" v-if="showSnack">Update Successful</v-snackbar> -->
    <!-- </div> -->
</template>

<script>


import {GetAppointments} from '../services/AppointmentsService';



export default {
    name:'RescheduleDialog',
    data(){
        return{
            service:new GetAppointments(),
            data:["1","2","3","4","5","6","7","8"]
        }
    },
    props:{
        status:{
            type:Number,
            default:null,
        },
        show:{
            type:Boolean,
            default:false
        },
        id:{
            type:String,
            default:null
        },
    },
    methods:{
        async yesClicked(){

        }
    }
}
</script>