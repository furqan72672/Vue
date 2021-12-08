<template>
<div>
    <div v-if="$route.query.id&&!timeSlot" class="d-flex justify-center align-center my-10">
        <v-progress-circular color="white" indeterminate></v-progress-circular>
        <h2 class="grey--text ml-4">Loading...please wait</h2>
    </div>
<div class=" d-flex justify-center align-center my-5">
    <ManagementForm :enableSubmit="true" class="col-5" @subClicked="updateTime">
        <span class="mx-auto" style="font-size:125%" slot="formTitle">{{$route.query.id?"Update Time Slot":"Create Time Slot"}}</span>
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
    <v-dialog v-model="showDialog">
        <v-card class="d-flex justify-center align-center" width="25vh" height="15vh">
            <h2>Updating</h2>
            <v-progress-circular indeterminate></v-progress-circular>
        </v-card>
    </v-dialog>
    <v-snackbar timeout="2000" v-model="success">Update Successful</v-snackbar>
    <v-snackbar timeout="2000" v-model="failure">Update was not successful</v-snackbar>
</div>
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
            newTimeSlot:{to:null,from:null},
            time:null,
            ofDayTo:null,
            timeTo:null,
            ofDayFrom:null,
            timeFrom:null,
            showDialog:false,
            res:null,
            success:false,
            failure:false,
        }
    },
    async beforeMount(){
        if(!this.$route.query.id) return;
        this.timeSlot=await this.service.getOne(this.$route.query.id);
        this.time=timeFormatter(this.timeSlot);
        this.timeTo=this.time.to.split(" ")[0];
        this.ofDayTo=this.time.to.split(" ")[1];
        this.timeFrom=this.time.from.split(" ")[0];
        this.ofDayFrom=this.time.from.split(" ")[1];
    },
    methods:{
        async updateTime(){
            this.showDialog=true;
            if((this.ofDayFrom==='PM')&&(!(this.timeFrom==="12"))){
                this.timeFrom=`${(parseInt(this.timeFrom)+12)}`;
                console.log(this.timeFrom)
            }
            
            else if((this.ofDayFrom==='AM')&&(this.timeFrom==="12")){
                this.timeFrom=`0`;
            }

            if(this.ofDayTo==='AM'&&this.timeTo==="12"){
                this.timeTo=`0`;
            }
            else if((this.ofDayTo==='PM')&&(!(this.timeTo==="12"))){
                this.timeTo=`${(parseInt(this.timeTo)+12)}`;
            }

            if(this.timeSlot){
                console.log(this.timeSlot);
                this.timeSlot.to=this.timeTo;
                this.timeSlot.from=this.timeFrom;
                this.res=await this.service.update(this.timeSlot);
            }
            else{
                this.newTimeSlot.to=this.timeTo;
                this.newTimeSlot.from=this.timeFrom;
                this.res=await this.service.create(this.newTimeSlot);
            }

            if(this.res==200||this.res==201){
                this.success=true;
                this.$router.push('/time-slots');
            }
            else{
                this.showDialog=false;
                this.failure=true;
            }

        }
    }
}
</script>