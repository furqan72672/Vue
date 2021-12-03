import VueRouter from 'vue-router'
import SignIn from './views/auth/SignIn'
import Theme from './components/Theme'
import Appointments from './views/appointment/Appointments'
import Settings from './views/Settings'
import TimeSlots from './views/TimeSlots'
import Dashboard from './views/Dashboard'
import ManageAppointments from './views/appointment/ManageAppointments'
import Vue from 'vue'




Vue.use(VueRouter);



const routes=[
  {path:'/auth/sign-in',name:'signIn', component:SignIn},
  {path:'/', component:Theme,
  children:[
    {path:'/',name:'home',component:Dashboard},
    {path:'/appointments',name:'appointments',component:Appointments},
    {path:'/time-slots',name:'timeSlots',component:TimeSlots},
    {path:'/settings',name:'settngs',component:Settings},
    {path:'/appointment',name:'manageAppointments',component:ManageAppointments},
  ]
},

]

const router=new VueRouter({
  routes
})

export default router;
