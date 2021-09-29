<template>
  <div>
    <table-listar-clientes :listClientes="listClientes"/>
  </div>
</template>

<script>
import TableListarClientes from '../../Tables/TableListarClientes.vue'
export default {
  name: 'listar-clientes',
  props: {},
  components:{
    TableListarClientes
  },
  mixins:[],
  directives:{},
  data(){
    return {
      listClientes: []
    }
  },
  computed:{},
  filters:{},
  beforeCreate(){},
  created(){},
  beforeMount(){},
  mounted(){
    this.listarClientes()

    this.$root.$on('excluirCliente', (idCliente) => {
      this.excluirCliente(idCliente)
    })
  },
  beforeUpdate(){},
  updated(){},
  beforeDestroy(){},
  destroyed(){},
  methods:{
    listarClientes(){
      let at = this
      let header = {
        headers: {
          "content-type": "application/json",
          "x-access-token": this.$cookies.get('token')
        }
      }
      this.axios.get("/clientes", header)
      .then((response) => {
        at.listClientes = response.data[0]
      })
      .catch((error) => {
        console.log(error)
      })
    },


    excluirCliente(idCliente){
      let at = this
      let header = {
          headers: {
          "content-type": "application/json",
          "x-access-token": this.$cookies.get('token')
          }
      }
      this.axios.delete(`/clientes/${idCliente}`, header)
      .then((response) => {
          at.listClientes = response.data[0]
          at.listarClientes()
      })
      .catch((error) => {
          console.log(error)
      })
    }
  },
  watch:{},
}
</script>

<style scoped>

</style>
