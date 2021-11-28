<template>
    <AppointmentsTable v-bind:item="data" v-bind:approve="true">
        <span slot="tableTitle">Approved Appointments</span>
    </AppointmentsTable>
</template>


<script>

import AppointmentsTable from './AppointmentsTable.vue'
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(axios,VueAxios)

export default {
    name:'ApprovedTable',
    components:{
        AppointmentsTable
    },
    data(){
        return{
            data:[]
        }
    },
    beforeMount(){
        this.axios.get('https://api.servicemywoodymail.com/appointment/populated/1',{
            headers:{
                Authorization:'Bearer '+localStorage.getItem('token')
            }
        }).then((res)=>{
            this.data=res.data;
            // console.log(`${res.data[0].person.first_name} ${res.data[0].person.last_name}`)
            // this.data[0].type=res.data[0].type
            for(let i=0; i<res.data.length; i++){
                this.data[i].client=`${this.data[i].person.first_name} ${this.data[i].person.last_name}`
                switch(res.data[i].type){
                    case 0:
                        this.data[i].type='Mobile Service';
                        break;
                    default:
                        this.data[i].type='Drop Off';
                        break;
                }
                switch(res.data[i].service){
                    case 0:
                        this.data[i].service='Battery Concern';
                        break;
                    case 1:
                        this.data[i].service='Transmission Concern';
                        break;
                    case 2:
                        this.data[i].service='Break System';
                        break;
                    case 3:
                        this.data[i].service='Heating Issues';
                        break;
                    default:
                        this.data[i].service='Other Issues';
                        break;
                }
            }
            // console.log(this.data);
        })
    }

}
</script>