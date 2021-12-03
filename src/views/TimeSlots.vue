<template>
    <div class="d-flex justify-center align-center">
        <v-card class="col-10">
            <AppointmentsTable v-bind:header="headers" v-bind:item="timeSlots" v-bind:showBtn="true" v-bind:del="true">
                <span slot="tableTitle">Time Slots</span>
            </AppointmentsTable>
        </v-card>
    </div>
</template>

<script>

import AppointmentsTable from '../components/AppointmentsTable.vue'
import {TimeSlots} from '../services/timeSlots';
import {timeFormatterArr} from '../utils/timeFormatter';

export default {
    name:'TimeSlots',
    components:{
        AppointmentsTable
    },
    data(){
        return{
            headers:[
                {text:'From',value:'from'},
                {text:'To',value:'to'},
                {text:'Actions',value:'actions'},
            ],
            timeSlots:[],
            service:new TimeSlots()
        }
    },
    async beforeMount(){
        this.timeSlots=await this.service.getAll();
        this.timeSlots=timeFormatterArr(this.timeSlots);
    },
}
</script>