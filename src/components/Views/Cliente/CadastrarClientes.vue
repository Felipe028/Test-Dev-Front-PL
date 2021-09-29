<template>
<div>
  <form @submit.prevent="cadastrar">
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
  name: 'cadastrar-clientes',
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


    cadastrar(){
      // let at = this
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

      this.axios.post("/clientes", formData, header)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    }
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
