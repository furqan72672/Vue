<template>
    <div>
    <v-dialog persistent v-model="show">
        <v-card class="pb-4" width="50vh">
            <div v-if="showPop">
            <div class="d-flex flex-column justify-center align-center">
            <v-card-title><slot></slot> Appointment</v-card-title>
            <v-card-subtitle class="my-4">Are you sure you want to <slot></slot> this appointment</v-card-subtitle>
            </div>
            
            <div class="d-flex mr-4">
                <v-spacer></v-spacer>
                <v-btn color="#23277c" class="white--text mr-4" @click="show=!show">No</v-btn>
                <v-btn color="#23277c" class="white--text" @click="yesClicked()">Yes</v-btn>
            </div>
            </div>
            <div v-if="load" class="d-flex justify-center align-center">
                <h2 class="mx-3 my-10">Updating</h2>
                <v-progress-circular indeterminate ></v-progress-circular>
            </div>
        </v-card>
    </v-dialog>
    <v-snackbar timeout="2000" v-if="showSnack">Update was not Successful</v-snackbar>
    </div>
</template>

<script>


import {GetAppointments} from '../services/AppointmentsService';



export default {
    name:'ConfirmationDialog',
    data(){
        return{
            service:new GetAppointments(),
            res:null,
            showPop:true,
            load:false,
            showSnack:false,
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
            this.showPop=false;
            this.load=true;
            this.res=await this.service.updateStatus(this.id,this.status);
            console.log(this.res.status);
            if(this.res||this.res===200||this.res===201){
                this.$emit('done');
            }
            else{
                this.showSnack=true
            }
            // this.show=false;
            this.showPop=true;
            this.load=false;
        }
    }
}
</script>


<style scoped>
    .abc{
        position: relative;
        bottom: ;
    }
</style>