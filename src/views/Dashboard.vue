<template>

  <div class="d-flex flex-column justify-center align-center">
      <div class="d-flex flex-row justify-center align-center">
        <v-card
          color="blue"
          height="150%"
          class="d-flex flex-column justify-center align-center col-4"
        >
          <v-card-title v-if="dashboardData" class="white--text">{{dashboardData.pending}}</v-card-title>
          <v-card-title v-else class="white--text">offline</v-card-title>
          <v-card-subtitle class="white--text"
            >Pending Appointments</v-card-subtitle
          >
        </v-card>
      <!-- </div> -->
      <!-- <div> -->
        <v-card
          color="purple"
          height="150%"
          class="d-flex flex-column justify-center align-center col-4"
        >
          <v-card-title v-if="dashboardData" class="white--text">{{dashboardData.accepted}}</v-card-title>
          <v-card-title v-else class="white--text">offline</v-card-title>
          <v-card-subtitle class="white--text"
            >Approved Appointments</v-card-subtitle
          >
        </v-card>
      <!-- </div> -->
      <!-- <div> -->
        <v-card
          color="green"
          height="150%"
          class="d-flex flex-column justify-center align-center col-4"
        >
          <v-card-title v-if="dashboardData" class="white--text">{{dashboardData.cancelled}}</v-card-title>
          <v-card-title v-else class="white--text">offline</v-card-title>
          <v-card-subtitle class="white--text"
            >Cancelled Appointments</v-card-subtitle
          >
        </v-card>
      <!-- </div> -->
      <!-- <div> -->
        <v-card
          color="pink"
          height="150%"
          class="d-flex flex-column justify-center align-center col-4"
        >
          <v-card-title v-if="dashboardData" class="white--text">{{dashboardData.completed}}</v-card-title>
          <v-card-title v-else class="white--text">offline</v-card-title>
          <v-card-subtitle class="white--text"
            >Completed Appointments</v-card-subtitle
          >
        </v-card>
      </div>
      <v-card class="my-5 col-10">
        <AppointmentsTable class="elevation-0">
          <span slot="tableTitle">Today's Appointments</span>
        </AppointmentsTable>
      </v-card>
  </div>
</template>



<script>

import AppointmentsTable from '../components/AppointmentsTable.vue'
import {GetAppointments} from '../services/AppointmentsService'


export default {
  name: 'Dashboard',
  components:{
    AppointmentsTable,
  },
  
  data() {
    return {
      dashboardData:null,
      service:new GetAppointments(),
      headers: [
        { text: "Client", value: "client" },
        { text: "Type", value: "type" },
        { text: "Service", value: "service" },
        { text: "Date", value: "date" },
        { text: "Actions", value: "actions" },
      ],
      items: [
        {
          client: null,
          type: null,
          service: null,
          date: null,
          actions: null,
        },
      ],
    };
  },
  async beforeMount(){
    this.dashboardData=await this.service.getDashboard();
    // console.log(this.dashboardData);
  },
};
</script>
