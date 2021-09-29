import Home from '../components/Home.vue'

const routes = [
    {
      path: '/',
      component: Home,
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]


export default routes;