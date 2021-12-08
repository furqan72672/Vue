import VueRouter from 'vue-router'
import SignIn from './views/auth/SignIn'
import Theme from './components/Theme'
import Appointments from './views/appointment/Appointments'
import Settings from './views/Settings'
import TimeSlots from './views/timeSlot/TimeSlots'
import Dashboard from './views/Dashboard'
import ManageAppointments from './views/appointment/ManageAppointments'
import ManageTimeSlot from './views/timeSlot/ManageTimeSlot'
import PageNotFound from './views/NotFound/PageNotFound'
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
    {path:'/time-slot',name:'manageTimeSlot',component:ManageTimeSlot},
    {path:'**',component:PageNotFound}
    ]
  },
  {path:'**',component:PageNotFound}

]

const router=new VueRouter({
  mode:'history',
  routes
})

router.beforeEach((to,from,next)=>{
  if(!localStorage.getItem('token')&&!to.path.includes('/auth')){
    if(to.path!=='/auth/sign-in'){
      next('auth/sign-in')
    }
    else{
      next()
    }
  }
  else{
    next()
  }
})

export default router;
