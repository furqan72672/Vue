<template>
    <v-data-table :headers="header" :items="item" :loading="loading">
      <template v-slot:top>
        <div class="d-flex flex-row">
            <span
              class="font-weight-bold"
              style="font-size: 150%; text-align: center;"
              >
              <slot name="tableTitle">Table Title</slot>
            </span>
          <v-spacer></v-spacer>
          <v-text-field dense outlined placeholder="Search" background-color="white"></v-text-field>
          <v-btn v-if="showBtn" color="#23277c" class="white--text">+ Add New</v-btn>
          <v-btn icon 
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
        <v-btn icon v-if="approve"><v-icon small color="green">mdi-check-circle</v-icon></v-btn>
        <v-btn icon v-if="reject"><v-icon small color="red">mdi-close-circle</v-icon></v-btn>
        <v-btn icon v-if="reschedule"><v-icon small color="orange">mdi-clock</v-icon></v-btn>
        <v-btn icon v-if="update" @click="updateBtn(item)"><v-icon small color="green">mdi-pencil</v-icon></v-btn>
        <v-btn icon v-if="del"><v-icon small color="red">mdi-delete</v-icon></v-btn>
      </template>
    </v-data-table>
</template>

<script>
import { dateFormatter } from '../utils/dateFormatter';
export default {
    name:'AppointmentsTable',
    props:{
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
      }
    },
    data(){
        return{

        }
    },
    methods:{
      formatter(i){
        return dateFormatter(i);
      },
      loading(){
        if(this.data[0].client){
          return false;
        }
        else{
          return true;
        }
      },
      updateBtn(item){
        this.$router.push(`appointment?id=${item._id}`)
        // this.$router.push(`/appointments/${item._id}`)
      }
    }
    
}
</script>