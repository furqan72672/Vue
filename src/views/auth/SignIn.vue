<template>
  <div
    style="background-color: #23277c; height: 100vh"
    class="d-flex justify-center align-center"
  >
    <Auth>
      <v-img
        slot="logo"
        width="30%"
        height="20%"
        src="logo.png"
        class="align-self-center mt-2"
      ></v-img>
      <span slot="cardTitle">Authenticate Yourself</span>
      <p slot="cardSubTitle">
        You need a Woody Mobile Service admin account to access the content
        ahead, if you do not have an account or have forgotten your password
        then you can contact the support regarding your issue
      </p>
      <v-form slot="form" v-model="valid" class="mx-8 mb-10" ref="form">
        <v-text-field
          v-model="signIn.username"
          dense
          label="Your Email"
          outlined
          :rules="emailRules"
        ></v-text-field>
        <v-text-field
          v-model="signIn.password"
          type="password"
          dense
          label="Your Password"
          outlined
          :rules="passwordRules"
        ></v-text-field>
        <v-btn
          v-bind:disabled="!valid"
          block
          color="#23277c"
          class="white--text font-weight-regular"
          @click="submitForm"
          >Authenticate<v-icon right>mdi-arrow-right-thin</v-icon></v-btn
        >
      </v-form>
    </Auth>
  </div>
</template>

<script>
import Auth from "/VueJSApps/woody/src/components/Auth.vue";
import { AuthService } from "/VueJSApps/woody/src/services/authService";

export default {
  name: "SignIn",
  data() {
    return {
      service: new AuthService(),
      emailRules: [
        (v) => (v && v.length > 0) || "Email is required",
        (v) =>
          (v.includes("@") && v.includes(".") && !v.endsWith(".")) ||
          "Not a valid Email format",
      ],
      passwordRules: [
        (v) => (v && v.length >= 8) || "Password Must be at least 8 characters",
      ],
      valid: false,
      signIn: {
        username: "admin@gmail.com",
        password: "12345678",
      },
      user: {},
    };
  },
  components: {
    Auth,
  },
  methods: {
    async submitForm() {
      if (this.$refs.form.validate()) {
        this.valid = true;
        try {
          this.service.signIn(this.signIn);
          this.service.getProfile();
        } catch (e) {
            console.log('error')
          console.log(e);
        }
        const accessToken = localStorage.getItem("token");
        // console.log('accessToken')
        // console.log(accessToken);
        if(accessToken){
            this.$router.push('/');
        }
      }
    },
  },
};
</script>