<template>
    <v-card class="mx-auto">
        <v-card-title>
            <slot name='formTitle'></slot>
        </v-card-title>
        <slot name="form"></slot>
        <div class="d-flex mr-5">
            <v-spacer></v-spacer>
            <v-btn dense class="ml-1" v-if="rej" color="red" v-on:click="rejClick">Reject</v-btn>
            <v-btn dense class="ml-1" v-if="app" color="green" v-on:click="appClick">Approve</v-btn>
            <v-btn dense class="ml-1 white--text" v-if="enableSubmit" color="#23277c" v-on:click="subClick">Submit</v-btn>
            <v-btn dense class="ml-1" v-else disabled color="#23277c" >Submit</v-btn>
        </div>
    </v-card>
</template>


<script>
export default {
    name:'ManagementForm',
    props:{
        rej:{
            type:Boolean,
            default:false,
        },
        app:{
            type:Boolean,
            default:false,
        },
        enableSubmit:{
            type:Boolean,
            default:true,
        },
    },
    methods:{
        rejClick(){
            this.$emit('rejClicked')
        },
        appClick(){
            this.$emit('appClicked')
        },
        subClick(){
            this.$emit('subClicked')
        }
    }
}
</script>