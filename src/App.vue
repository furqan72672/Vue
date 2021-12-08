<template>
  <v-app>
    <div style="height:50vh;background-color: #23277c;">
    <v-main>
      <router-view></router-view>
    </v-main>
    </div>
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
