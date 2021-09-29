import ListarClientes from '../components/Views/Cliente/ListarClientes.vue'
import CadastrarClientes from '../components/Views/Cliente/CadastrarClientes'
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
      name: 'Listar Clientes',
      component: ListarClientes
    },
    {
      path: '/cadastrar',
      name: 'Cadastrar Clientes',
      component: CadastrarClientes
    }
  ]


export default routes;