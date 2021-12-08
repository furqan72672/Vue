<template>
    <AppointmentsTable v-bind:item="data" v-bind:approve="true" v-bind:reschedule="true" v-bind:reject="true" v-on:done="load" v-on:reload="load">
        <span slot="tableTitle">Pending Appointments</span>
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
            data:[],
            service: new GetAppointments(),
        }
    },
    async beforeMount(){
        this.data=dataHandle(await this.service.getAllPopulated(0));
    },
    methods:{
        async load(){
            this.data=dataHandle(await this.service.getAllPopulated(0));
        }
    }

}
</script>