<template>
    <AppointmentsTable v-bind:item="data">
        <span slot="tableTitle">Completed Appointments</span>
    </AppointmentsTable>
</template>


<script>

import AppointmentsTable from './AppointmentsTable.vue'
import {GetAppointments} from '../services/AppointmentsService'
import {dataHandle} from '../utils/dataHandle'


export default {
    name:'Completed Table',
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
        this.data=dataHandle(await this.service.getAllPopulated(3));
    }

}
</script>