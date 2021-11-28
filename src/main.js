import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import SignIn from './views/auth/SignIn'
import Theme from './components/Theme'
import Appointments from './views/Appointments'
import Settings from './views/Settings'
import TimeSlots from './views/TimeSlots'
import Dashboard from './views/Dashboard'





Vue.config.productionTip = false

Vue.use(VueRouter);
const routes=[
  {path:'/auth/sign-in', component:SignIn},
  {path:'/', component:Theme,
  children:[
    {path:'/',component:Dashboard},
    {path:'/appointments',component:Appointments},
    {path:'/time-slots',component:TimeSlots},
    {path:'/settings',component:Settings},
  ]
},

]

const router=new VueRouter({
  routes
})

new Vue({
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
