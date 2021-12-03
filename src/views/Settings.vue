<template>
    <v-card class="col-6 mx-auto">
        <v-card-title class="d-flex justify-center align-center" style="font-size: 25px;">Update Profile</v-card-title>
        <v-form style="align-self:center;" class="col-10 mx-auto">
            <div class="d-flex">
                <v-text-field v-model="profile.first_name" color="#23277c" dense outlined label="First Name" class="col-5.5"/>
                <v-spacer></v-spacer>
                <v-text-field v-model="profile.last_name" color="#23277c" dense outlined label="Last Name" class="col-5.5"/>
            </div>
            <v-text-field v-model="profile.username" color="#23277c" dense outlined label="Email"/>
            <v-text-field v-model="profile.phone" color="#23277c" dense outlined label="Phone#"/>
            <div class="d-flex">
                <v-text-field color="#23277c" dense outlined label="Password" class="col-5.5"/>
                <v-spacer></v-spacer>
                <v-text-field color="#23277c" dense outlined label="Confirm Password" class="col-5.5"/>
            </div>
            <v-text-field dense color="#23277c" outlined label="Old Password"/>
            <div class="d-flex">
                <v-spacer></v-spacer>
                <v-btn dense color="#23277c" class="white--text">Submit</v-btn>
            </div>
        </v-form>
    </v-card>
</template>

<script>

import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(axios, VueAxios)

export default {
    name:'Settings',
    data(){
        return{
            profile:JSON.parse(localStorage.getItem('user'))
        }
    },
}
</script>
