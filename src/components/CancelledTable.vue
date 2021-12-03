<template>
    <AppointmentsTable v-bind:item="data">
        <span slot="tableTitle">Cancelled Appointments</span>
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
        this.data=dataHandle(await this.service.getAllPopulated(1));
    }

}
</script>