<template>
  <div>
    <v-app-bar app class="elevation-0" color="#23277c">
      <v-app-bar-nav-icon
        class="white--text"
        v-on:click="showFunc"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="white--text">Service My Woody</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-menu :nudge-width="10">
        <template v-slot:activator="{ on, attr }">
          <v-btn
            v-bind="attr"
            v-on="on"
            color="rgb(245, 193, 135)"
            height="90%"
            width="1%"
            depressed
            >{{ extractFirstOfString(profile.first_name) }}
          </v-btn>
        </template>

        <v-card width="320px" height="250px">
          <div class="d-flex flex-column justify-center align-center mx-5">
            <v-avatar size="75px" color="rgb(245, 193, 135)" class="mt-5">{{
              extractFirstOfString(profile.first_name)
            }}</v-avatar>
            <v-card-title>{{`${profile.first_name} ${profile.last_name}`}}</v-card-title>
            <v-card-subtitle>{{profile.username}}</v-card-subtitle>
            <v-divider></v-divider>
            <v-btn color="black" class="white--text align-self-end mb-5"
              >Logout</v-btn
            >
          </div>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer app v-model="showDrawer">
      <div class="py-2">
        <v-img width="50%" class="mx-auto" src="logo.png"></v-img>
      </div>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-icon
            ><v-icon>mdi-view-dashboard-variant</v-icon></v-list-item-icon
          >
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item to="/appointments">
          <v-list-item-icon><v-icon>mdi-calendar</v-icon></v-list-item-icon>
          <v-list-item-title>Appointments</v-list-item-title>
        </v-list-item>
        <v-list-item to="/time-slots">
          <v-list-item-icon
            ><v-icon>mdi-clock-time-four</v-icon></v-list-item-icon
          >
          <v-list-item-title>Time Slots</v-list-item-title>
        </v-list-item>
        <v-list-item to="/settings">
          <v-list-item-icon><v-icon>mdi-cog</v-icon></v-list-item-icon>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="padding: 0">
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>

export default {
  name: "Theme",
  data() {
    return {
      showDrawer: true,
      profile:JSON.parse(localStorage.getItem('user')),
    };
  },
  methods: {
    showFunc() {
      this.showDrawer = !this.showDrawer;
    },
    extractFirstOfString(str){
      if(str)
      {
        return str.charAt(0);
      }
      else{
        return "offline";
      }
    }
  },
};
</script>