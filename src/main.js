import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from "./router"
import Axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import VueTheMask from 'vue-the-mask'


Vue.use(VueRouter)
Vue.use(VueAxios, Axios)
Vue.use(VueCookies)
Vue.use(VueTheMask)

Vue.config.productionTip = false
Axios.defaults.baseURL = process.env.VUE_APP_URL_TEST

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const token = getCookie("token")
  if (to.name !== 'Login' && !token){
    next({ name: 'Login' })
  }else{
    next()
  }
})


function getCookie(name){
  var cookies = document.cookie;
  var prefix = name + "=";
  var begin = cookies.indexOf("; " + prefix);

  if (begin == -1) {
    begin = cookies.indexOf(prefix);  
    if (begin != 0) {
        return null;
    }
  }else{
    begin += 2;
  }

  var end = cookies.indexOf(";", begin);
  if (end == -1){
    end = cookies.length;                        
  }

  return unescape(cookies.substring(begin + prefix.length, end));
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
