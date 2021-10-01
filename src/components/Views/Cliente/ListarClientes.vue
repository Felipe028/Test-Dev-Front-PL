<template>
  <div class="div0">
    <modal-select/>
    <modal-alert/>
    <div class="div1">
      <div class="scroll">
        <table-listar-clientes :listClientes="listClientes"/>
      </div>
    </div>
    <loading
        :active.sync="isLoading"
        :can-cancel="false"
        loader="spinner"
        color="#f85741"
        background-color="#c4c4c4"
        :width=150
        :height=70 
        :is-full-page="true"
      />
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import TableListarClientes from '../../Tables/TableListarClientes.vue'
import ModalSelect from '../../Modals/ModalSelect.vue'
import ModalAlert from '../../Modals/ModalAlert.vue'

export default {
  name: 'listar-clientes',
  props: {},
  components:{
    Loading,
    TableListarClientes,
    ModalSelect,
    ModalAlert
  },
  mixins:[],
  directives:{},
  data(){
    return {
      listClientes: [],
      isLoading: false,
      dataAlert: {
        title: "",
        text: "",
        status: ""
      }
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
      at.isLoading = true
      let header = {
        headers: {
          "content-type": "application/json",
          "x-access-token": this.$cookies.get('token')
        }
      }
      this.axios.get("/clientes", header)
      .then((response) => {
        at.isLoading = false
        at.listClientes = response.data[0]
      })
      .catch((error) => {
        at.isLoading = false
        let corp = {
          title: "Error :(",
          text: error.message,
          status: "fail"
        }
        this.$root.$emit('showModalAlert', corp)
      })
    },


    excluirCliente(idCliente){
      let at = this
      at.isLoading = true
      let header = {
          headers: {
          "content-type": "application/json",
          "x-access-token": this.$cookies.get('token')
          }
      }
      this.axios.delete(`/clientes/${idCliente}`, header)
      .then((response) => {
        at.isLoading = false
        at.listClientes = response.data[0]
        let corp = {
          title: "Sucesso!",
          text: "Cliente excluido com sucesso!",
          status: "success"
        }
        this.$root.$emit('showModalAlert', corp)
        at.listarClientes()
      })
      .catch((error) => {
        at.isLoading = false
        let corp = {
          title: "Error :(",
          text: error.message,
          status: "fail"
        }
        this.$root.$emit('showModalAlert', corp)
      })
    }
  },
  watch:{},
}
</script>

<style scoped>
.div0{
    background: url("../../../assets/img/logo-fundo-home.jpg") no-repeat right top fixed;
    background-position: 30% 45%;
    background-size: cover;
    height: 100vh;
}

.div1{
    background: rgba(30, 30, 30, 0.97);
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.scroll{
  overflow-y: auto; 
  max-height: 100vh;
  padding: 0px 10px 0px 10px;
}
</style>
