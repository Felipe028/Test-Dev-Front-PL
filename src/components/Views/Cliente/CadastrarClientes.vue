<template>
  <div>
    <listar-clientes :listClientes="listClientes"/>
  </div>
</template>

<script>
import ListarClientes from '../Tables/ListarClientes.vue'
export default {
  name: 'Home',
  props: {},
  components:{
    ListarClientes
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
    }
  },
  watch:{},
}
</script>

<style scoped>

</style>
