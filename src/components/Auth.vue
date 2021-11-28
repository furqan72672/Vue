<template>
  <v-card  class="d-flex flex-column" width="30%">
    <slot name="logo"></slot>
    <v-card-title class="mx-8" style="align-self:center;"><slot name="cardTitle"></slot></v-card-title>
    <v-card-subtitle class="mx-8" style="align-self:center; text-align:center;"><slot name="cardSubTitle"></slot></v-card-subtitle>
    <slot name="form"></slot>
  </v-card>
</template>

<script>


  export default {
    name: 'Auth',
  }
</script>

