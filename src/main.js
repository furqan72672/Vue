import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import SignIn from './views/SignIn'

Vue.config.productionTip = false

Vue.use(VueRouter)
const routes=[
  {path:'/'},
  {path:'/signin',component:SignIn}
]

const router=new VueRouter({
  routes
})

new Vue({
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
