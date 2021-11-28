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
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);

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
            timeSlots:[]
        }
    },
    beforeMount(){
        this.axios.get('https://api.servicemywoodymail.com/time-slot',{
            headers:{
                Authorization:'Bearer '+localStorage.getItem('token')
            }
        }).then((res)=>{
            if(res.status===200){
                this.timeSlots=res.data;
            }
            console.log(this.timeSlots);
        });
    },
}
</script>