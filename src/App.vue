<template>
  <v-app>
    <div style="height:50%;background-color: #23277c;">
    <v-main>
      <router-view></router-view>
    </v-main>
    </div>
    <div style="height:50%;"></div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.a{
  background-color: #23277c;

}
</style>
