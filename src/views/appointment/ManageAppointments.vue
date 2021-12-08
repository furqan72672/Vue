<template>
<div>
    <div v-if="!item" class="d-flex justify-center align-center my-10">
        <v-progress-circular color="white" indeterminate></v-progress-circular>
        <h2 class="grey--text ml-4">Loading...please wait</h2>
    </div>
<div class=" d-flex justify-center align-center my-5" v-if="item">
    <ManagementForm :rej="rej" :app="app" :enableSubmit="false" class="col-5" @rejClicked="updateStatus(data._id,2)" @appClicked="updateStatus(data._id,1)">
        <span class="mx-auto" style="font-size:125%" slot="formTitle">{{item?"Update Appointment":"Create Appointment"}}</span>
        <v-form slot="form" class="col-11 mx-auto">
            <v-text-field outlined dense readonly label="Appointment Type" color="#23277c" v-model="item.type"></v-text-field>
            <v-text-field outlined dense readonly label="Service Type" color="#23277c" v-model="item.service"></v-text-field>
            <v-textarea outlined dense readonly label="Description" color="#23277c" v-model="item.description"></v-textarea>
            <v-text-field outlined dense readonly label="Preffered Date" color="#23277c" v-model="date"></v-text-field>
            <v-text-field outlined dense readonly label="Preffered Time Slot" color="#23277c" v-model="timeSlot"></v-text-field>
            <span style="font-weight:bold;">Address</span>
            <div class="d-flex mt-2">
                <v-text-field outlined dense readonly label="Address" color="#23277c" v-model="item.address" class="mr-5"></v-text-field>
                <v-text-field outlined dense readonly label="State" color="#23277c" v-model="item.state"></v-text-field>
            </div>
            <div class="d-flex">
                <v-text-field outlined dense readonly label="city" color="#23277c" v-model="item.city" class="mr-5"></v-text-field>
                <v-text-field outlined dense readonly label="Zip" color="#23277c" v-model="item.zip"></v-text-field>
            </div>
            <span style="font-weight:bold;">Vehicle Detail</span>
            <div class="d-flex mt-2">
                <v-text-field outlined dense readonly label="Year" color="#23277c" v-model="item.vehicle.year" class="mr-5"></v-text-field>
                <v-text-field outlined dense readonly label="Make" color="#23277c" v-model="item.vehicle.make"></v-text-field>
            </div>
            <div class="d-flex">
                <v-text-field outlined dense readonly label="Model" color="#23277c" v-model="item.vehicle.model" class="mr-5"></v-text-field>
                <v-text-field outlined dense readonly label="VIN" color="#23277c" v-model="item.vehicle.vin"></v-text-field>
            </div>
            <span style="font-weight:bold;">Client Detail</span>
            <div class="d-flex mt-2">
                <v-text-field outlined dense readonly label="First Name" color="#23277c" v-model="item.person.first_name" class="mr-5"></v-text-field>
                <v-text-field outlined dense readonly label="Last Name" color="#23277c" v-model="item.person.last_name"></v-text-field>
            </div>
            <div class="d-flex">
                <v-text-field outlined dense readonly label="Email" color="#23277c" v-model="item.person.username" class="mr-5"></v-text-field>
                <v-text-field outlined dense readonly label="Phone #" color="#23277c" v-model="item.person.phone"></v-text-field>
            </div>
            <v-snackbar timeout="2000" v-model="showSnack">Updated Successfully</v-snackbar>
        </v-form>
    </ManagementForm>
</div>
</div>
</template>


<script>
import { timeFormatter } from '../../utils/timeFormatter';
import ManagementForm from '/VueJSApps/woody/src/components/ManagementForm.vue';
import {dateFormatter} from '/VueJSApps/woody/src/utils/dateFormatter'
import {GetAppointments} from '../../services/AppointmentsService'
import {dataHandleSingle} from '../../utils/dataHandle'


export default {
    name:'ManageAppointments',
    components:{
        ManagementForm,
    },
    data(){
        return{
            data:null,
            service:new GetAppointments(),
            item:null,
            time:null,
            timeSlot:null,
            date:null,
            newStatus:null,
            showSnack:false,
            rej:false,
            app:false
        }
    },
    methods:{
        async updateStatus(id,status){
            this.newStatus=await this.service.updateStatus(id,status)
            if(this.newStatus===200){
                this.showSnack=true;
                this.$router.push('/appointments')
            }
            console.log(this.newStatus);

        }
    },
    async beforeMount(){
        if(this.$route.query.id){
            this.data= this.item= await this.service.getOne(this.$route.query.id)
            this.time=timeFormatter(this.item.time_slot)
            this.timeSlot=`${this.time.from} - ${this.time.to}`
            this.date=dateFormatter(this.item.date)
            this.item=dataHandleSingle(this.item)
        }
        if(this.data.status===0){
            this.rej=true;
            this.app=true;
        }
    },
}
</script>