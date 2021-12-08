<template>
    <AppointmentsTable v-bind:item="data" v-on:reload="load">
        <span slot="tableTitle">Rejected Appointments</span>
    </AppointmentsTable>
</template>


<script>

import AppointmentsTable from './AppointmentsTable.vue'
import {GetAppointments} from '../services/AppointmentsService'
import {dataHandle} from '../utils/dataHandle'


export default {
    name:'ApprovedTable',
    components:{
        AppointmentsTable
    },
    data(){
        return{
            rawData:[],
            data:[],
            service: new GetAppointments(),
        }
    },
    async beforeMount(){
        this.rawData=await this.service.getAllPopulated(2)
        this.data=dataHandle(this.rawData);
    },
    methods:{
        async load(){
            this.data=dataHandle(await this.service.getAllPopulated(2));
        }
    }

}
</script>