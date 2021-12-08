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
    name:'CompletedTable',
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
        this.rawData=await this.service.getAllPopulated(4)
        this.data=dataHandle(this.rawData);
    },
    methods:{
        async load(){
            this.data=dataHandle(await this.service.getAllPopulated(4));
        }
    }

}
</script>