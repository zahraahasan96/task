import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'


Vue.use(VueRouter);


const router = new VueRouter({
  mode:"history",
  routes : routes
})

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router

}).$mount('#app')

