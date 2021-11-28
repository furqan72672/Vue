<template>
    <div style="background-color:#23277c; height:100vh;" class="d-flex justify-center align-center">
        <Auth>
            <v-img slot="logo" width="30%" height="20%" src="logo.png" class="align-self-center mt-2"></v-img>
            <span slot="cardTitle" >Authenticate Yourself</span>
            <p slot="cardSubTitle" >You need a Woody Mobile Service admin account to access the content ahead, if you do not have an account or have forgotten your password then you can contact the support regarding your issue</p>
            <v-form slot="form" v-model="valid" class="mx-8 mb-10" ref="form">
                <v-text-field v-model="signIn.username" dense label="Your Email" outlined :rules="emailRules"></v-text-field>
                <v-text-field v-model="signIn.password" type="password" dense label="Your Password" outlined :rules="passwordRules"></v-text-field>
                <v-btn v-bind:disabled="!valid" block color="#23277c" class="white--text font-weight-regular" @click="submitForm">Authenticate<v-icon right>mdi-arrow-right-thin</v-icon></v-btn>
            </v-form>
        </Auth>
    </div>
</template>

<script>

import Auth from '/VueJSApps/woody/src/components/Auth.vue'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios);


export default {
    name:'SignIn',
    data(){
        return{
            emailRules:[
                v => ((v && v.length>0)||"Email is required"),
                v => (v.includes('@') && v.includes('.') && (!v.endsWith(".")))||"Not a valid Email format",
            ],
            passwordRules:[
                v => (v && v.length>=8 || "Password Must be at least 8 characters"),
            ],
            valid:false,
            signIn:{
                username:null,
                password:null
            },
            accessToken:null,
        }
    },
    components:{
        Auth
    },
    methods:{
        submitForm(){
            if (this.$refs.form.validate()){
                this.valid=true;
                this.axios.post("https://api.servicemywoodymail.com/auth/sign-in",this.signIn).then((res)=>{
                    console.log(res);
                    localStorage.setItem('token',res.data.access_token);
                    console.log(localStorage.getItem('token'));
                    if(res.data.access_token){
                        this.$router.push('/');
                    }
                    // else{
                        
                    // }
                })
            }
        }
    }
}
</script>