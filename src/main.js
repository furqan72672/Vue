import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
// import axios from "axios";
import router from "./router";

Vue.config.productionTip = false;



// Vue.prototype.$axios = axios;

// axios.defaults.baseURL = "https://api.servicemywoodymail.com";
// axios.defaults.baseURL='https://api.servicemywoodymail.com'

// axios.interceptors.request.use(
//   config => {
//     console.log('interceptor')
//     const token = localStorage.getItem("token");
//     console.log(token)
//     if (token) {
//       config.headers.common["Authorization"] = 'bearer ' + token;
//     }
//     return config;
//   },
//   error => {
//     console.log('interceptor error')

//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   response => {
//     console.log('response')
//     if (response.status === 200 || response.status === 201) {
//       return Promise.resolve(response);
//     } else {
//       return Promise.reject(response);
//     }
//   },
//   error => {
//     if (error.response.status) {
//       switch (error.response.status) {
//         case 401:
//           localStorage.removeItem("token");
//           // localStorage.removeItem('user');
//           break;
//       }
//       return Promise.reject(error.response);
//     }
//   }
// );

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
