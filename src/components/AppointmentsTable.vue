<template>
  <div>
    <v-data-table :headers="header" :items="item" loading="showLoading">
      <template v-slot:top >
        <div class="d-flex flex-row mt-5">
            <span
              class="font-weight-bold"
              style="font-size: 150%; text-align: center;"
              >
              <slot name="tableTitle">Table Title</slot>
            </span>
          <v-spacer></v-spacer>
          <v-text-field dense outlined placeholder="Search" background-color="white"></v-text-field>
          <v-btn v-if="showBtn" color="#23277c" class="white--text" v-on:click="addNew">+ Add New</v-btn>
          <v-btn icon @click="reload"
            ><v-icon>mdi-reload</v-icon></v-btn
          >
        </div>
      </template>
      <template v-slot:item.date="{item}">
        <v-chip color="red" style="font-weight:bold;">
          {{formatter(item.date)}}
        </v-chip>
      </template>
      <template v-if="item" v-slot:item.actions="{ item }">
        <v-btn icon v-if="complete"><v-icon small color="green" @click="compClick(item)">mdi-check</v-icon></v-btn>
        <v-btn icon v-if="approve"><v-icon small color="green" @click="appClick(item)">mdi-check-circle</v-icon></v-btn>
        <v-btn icon v-if="reject"><v-icon small color="red" dense @click="rejClick(item)">mdi-close-circle</v-icon></v-btn>
        <v-btn icon v-if="reschedule"><v-icon small color="orange" @click="rescheduleClick()">mdi-clock</v-icon></v-btn>
        <v-btn icon v-if="update" @click="updateBtn(item)"><v-icon small color="green">mdi-pencil</v-icon></v-btn>
        <v-btn icon v-if="del"><v-icon small color="red" @click="deleteClick(item)">mdi-delete</v-icon></v-btn>
      </template>
    </v-data-table>
    <ConfirmationDialog :show="showDialog" v-bind:id="id" :status="newStatus" v-on:done="done">
      <span>{{action}} </span>
    </ConfirmationDialog>
    <!-- <RescheduleDialog :show="showReschedule">
    </RescheduleDialog> -->
  </div>
</template>

<script>


import { dateFormatter } from '../utils/dateFormatter';
import ConfirmationDialog from './ConfirmationDialog.vue'
// import RescheduleDialog from './RescheduleDialog.vue'



export default {
    name:'AppointmentsTable',
    components:{
      ConfirmationDialog,
      // RescheduleDialog
    },
    props:{
      complete:{
        type:Boolean,
        default:false
      },
      update:{
        type:Boolean,
        default:true
      },
      reject:{
        type:Boolean,
        default:false
      },
      del:{
        type:Boolean,
        default:false
      },
      approve:{
        type:Boolean,
        default:false
      },
      reschedule:{
        type:Boolean,
        default:false
      },

      item:{
        type:Array,
        default:()=>[],
      },
      showBtn:{
        type:Boolean,
        default:false
      },
      header:{
        type:Array,
        default:()=>[
          { text: "Client", value: "client" },
          { text: "Type", value: "type" },
          { text: "Service", value: "service" },
          { text: "Date", value: "date" },
          { text: "Actions", value: "actions" },
        ],
      },
    },
    data(){
        return{
          showLoading:true,
          showDialog:false,
          action:null,
          passItem:null,
          newStatus:null,
          id:null,
          showReschedule:false,
        }
    },
    methods:{
      formatter(i){
        return dateFormatter(i);
      },
      updateBtn(item){
        if(item.time_slot) this.$router.push(`appointment?id=${item._id}`);
        if(item.to) this.$router.push(`time-slot?id=${item._id}`);
      },

      done(){
        this.$emit('done')
        this.showDialog=false;
      },

      addNew(){
        this.$emit('add')
      },

      reload(){
        this.$emit('reload')
      },

      compClick(item){
          this.id=item._id;
          this.newStatus=4;
          this.action="Complete "
          this.showDialog=false;
          this.showDialog=true;
      },

      rejClick(item){
          this.id=item._id;
          this.newStatus=2;
          this.action="Reject "
          this.showDialog=false;
          this.showDialog=true;
      },

      appClick(item){
          this.id=item._id;
          this.newStatus=1;
          this.action="Approve "
          this.showDialog=false;
          this.showDialog=true;
      },


      rescheduleClick(){
          this.showReschedule=true
      },

      deleteClick(item){
          this.id=item._id;
          this.newStatus=5;
          this.action="Delete "
          this.showDialog=false;
          this.showDialog=true;
      },
    },
    // mounted(){
    //   if(this.item.data){
    //     // this.showLoading=false;
    //   }
    // }
    
}
</script>