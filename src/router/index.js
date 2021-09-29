import ListarClientes from '../components/Views/Cliente/ListarClientes.vue'
import CadastrarClientes from '../components/Views/Cliente/CadastrarClientes.vue'
import AtualizarClientes from '../components/Views/Cliente/AtualizarClientes.vue'
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
    },
    {
      path: '/atualizar/:id',
      name: 'Atualizar Clientes',
      component: AtualizarClientes
    }
  ]


export default routes;