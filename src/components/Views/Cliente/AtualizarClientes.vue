<template>
<div>
  <form @submit.prevent="atualizar">
    <div>
      <label>Nome</label>
      <input type="text" v-model="nome" maxlength="200">
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="email" maxlength="200">
    </div>
    <div>
      <label>Mobile</label>
      <input type="number" v-model="mobile">
    </div>
    <button type="submit" :disabled="checkForm()">Submit</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'atualizar-clientes',
  props: {},
  components:{
  },
  mixins:[],
  directives:{},
  data(){
    return {
      nome: "",
      email: "",
      mobile: "",
    }
  },
  computed:{},
  filters:{},
  beforeCreate(){},
  created(){},
  beforeMount(){},
  mounted(){
    this.getCliente()
  },
  beforeUpdate(){},
  updated(){},
  beforeDestroy(){},
  destroyed(){},
  methods:{
    checkForm(){
      if(this.nome === "" || this.email === "" || this.mobile === "")
        return true
      else
        return false
    },


    getCliente(){
      let at = this

      let header = {
        headers: {
          "content-type": "application/json",
          "x-access-token": this.$cookies.get('token')
        }
      }

      this.axios.get(`/clientes/${this.$route.params.id}`, header)
      .then((response) => {
        at.nome = response.data.name
        at.email = response.data.email
        at.mobile = response.data.mobile
      })
      .catch((error) => {
        console.log(error)
      })
    },


    atualizar(){
      let at = this
      let formData = {
          name: this.nome,
          email: this.email,            
          mobile: this.mobile            
      }

      let header = {
        headers: {
          "content-type": "application/json",
          "x-access-token": this.$cookies.get('token')
        }
      }

      this.axios.put(`/clientes/${this.$route.params.id}`, formData, header)
      .then((response) => {
        console.log(response)
        setTimeout(()=> {
          at.$router.push("/home")
        }, 3000)
      })
      .catch((error) => {
        console.log(error)
      })
    },

  },
  watch:{
    mobile(newVal){
      if (newVal.length > 11) {
        this.mobile = newVal.slice(0,11); 
      }
    }
  },
}
</script>

<style scoped>

</style>
