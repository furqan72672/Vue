<template>
    <div class="d-flex justify-center align-center">
        <v-card class="col-10">
            <v-tabs >
                <v-tab @click="pendingFunc">PENDING</v-tab>
                <v-tab @click="approvedFunc">APPROVED</v-tab>
                <v-tab @click="rejectedFunc">REJECTED</v-tab>
                <v-tab @click="cancelledFunc">CANCELLED</v-tab>
                <v-tab @click="completedFunc">COMPLETED</v-tab>
            </v-tabs>
            <PendingTable v-if="pending"/>
            <CompletedTable v-if="completed"/>
            <ApprovedTable v-if="approved"/>
            <CancelledTable v-if="cancelled"/>
            <RejectedTable v-if="rejected"/>
        </v-card>
    </div>
</template>

<script>
import PendingTable from '../components/PendingTable.vue'
import CompletedTable from '../components/CompletedTable.vue'
import ApprovedTable from '../components/ApprovedTable.vue'
import CancelledTable from '../components/CancelledTable.vue'
import RejectedTable from '../components/RejectedTable.vue'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios,axios);

export default {
    name:'Appointments',
    components:{
        PendingTable,
        CompletedTable,
        ApprovedTable,
        CancelledTable,
        RejectedTable,
    },
    async beforeMount(){
        this.appointments=await this.axios.get('https://api.servicemywoodymail.com/appointment/dashboard',{
            headers:{
                Authorization: 'Bearer '+localStorage.getItem('token')
            }
        });
        // console.log(this.appointments)
    },
    data(){
        return{
            appointments:null,
            pending:true,
            completed:false,
            cancelled:false,
            approved:false,
            rejected:false,
        }
    },
    methods:{
        pendingFunc(){
            this.pending=true;
            this.completed=false;
            this.cancelled=false;
            this.approved=false;
            this.rejected=false;
        },
        approvedFunc(){
            this.pending=false;
            this.completed=false;
            this.cancelled=false;
            this.approved=true;
            this.rejected=false;
        },
        completedFunc(){
            this.pending=false;
            this.completed=true;
            this.cancelled=false;
            this.approved=false;
            this.rejected=false;
        },
        rejectedFunc(){
            this.pending=false;
            this.completed=false;
            this.cancelled=false;
            this.approved=false;
            this.rejected=true;
        },
        cancelledFunc(){
            this.pending=false;
            this.completed=false;
            this.cancelled=true;
            this.approved=false;
            this.rejected=false;
        },
    }
}
</script>