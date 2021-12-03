<template>
    <v-card class="mx-auto">
        <v-card-title>
            <slot name='formTitle'></slot>
        </v-card-title>
        <slot name="form"></slot>
        <div class="d-flex mr-5">
            <v-spacer></v-spacer>
            <v-btn dense class="ml-1" v-if="rej" color="red">Reject</v-btn>
            <v-btn dense class="ml-1" v-if="app" color="green">Approve</v-btn>
            <v-btn dense class="ml-1 white--text" v-if="enableSubmit" color="#23277c">Submit</v-btn>
            <v-btn dense class="ml-1" v-else disabled color="#23277c">Submit</v-btn>
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
        }
    }
}
</script>