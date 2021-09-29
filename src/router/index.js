import Home from '../components/Views/Home.vue'
import Login from '../components/Views/Login.vue'

const routes = [
    {
      path: '/',
      component: Login,
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]


export default routes;