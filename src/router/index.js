import ListarClientes from '../components/Views/Cliente/ListarClientes.vue'
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
      name: 'ListarClientes',
      component: ListarClientes
    }
  ]


export default routes;