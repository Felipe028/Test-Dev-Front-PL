<template>
<div class="div0">
    <div class="div1">
      <modal-alert/>
        <div class="div2">
            <p class="textLogin"><strong>Cadastrar Cliente</strong><p>
            <form @submit.prevent="cadastrar">
                <div class="div3">
                    <label class="label">Nome</label>
                    <input type="text" v-model="nome" maxlength="200" class="input" placeholder="Maria da Costa Pereira">
                </div>
                <div class="div3">
                    <label class="label">Email</label>
                    <input type="email" v-model="email" maxlength="200" class="input" placeholder="example@gmail.com">
                </div>
                <div class="div3">
                    <label class="label">Mobile</label>
                    <the-mask type="text" mask="(##) #########" :masked="false" v-model="mobile" class="input" placeholder="(92) 991235467"></the-mask>
                </div>
                <button type="text" class="btn" :disabled="checkForm()">Cadastrar</button>
            </form>
        </div>
    </div>
    <!-- spinner or dots or bars -->
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
import ModalAlert from '../../Modals/ModalAlert.vue'

export default {
  name: 'cadastrar-clientes',
  props: {},
  components:{
    Loading,
    ModalAlert
  },
  mixins:[],
  directives:{},
  data(){
    return {
      nome: "",
      email: "",
      mobile: "",
      isLoading: false
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
      let at = this
      at.isLoading = true
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
      .then(() => {
        at.isLoading = false
        let corp = {
          title: "Sucesso!",
          text: "Cliente cadastrado com sucesso!",
          status: "success"
        }
        this.$root.$emit('showModalAlert', corp)

        setTimeout(()=> {
          at.$router.push("/home")
        }, 2000)
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
    
  },
  watch:{},
}
</script>

<style scoped>
.div0{
    height: 100vh;
}

.div1{
    background: rgba(30, 30, 30, 1);
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.div2{
    background: #ffffff;
    min-height: 250px;
    min-width: 300px;
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    border: none;
    display: flex;
    align-items: center;
    padding: 25px 15px 20px 15px;
    flex-direction: column;
}

.div3{
    display: flex;
    flex-direction: column;
    margin: 0px 0px 20px 0px;
}

.textLogin{
    color: #333333;
    font-family: Museo Sans;
    font-size: 23px;
    margin: 0px;
    padding: 0px;;
}

.label{
    color: #333333;
    font-family: Museo Sans;
    font-size: 19px;
}

.input{
    min-width: 290px;
    border-radius: 8px 8px 8px 8px;
    -moz-border-radius: 8px 8px 8px 8px;
    -webkit-border-radius: 8px 8px 8px 8px;
    border: none;
    background: #ebebeb;
    height: 30px;
}


.btn{
    width: 100%;
    height: 40px;
    border-radius: 8px 8px 8px 8px;
    -moz-border-radius: 8px 8px 8px 8px;
    -webkit-border-radius: 8px 8px 8px 8px;
    border: none;
    color: #ffffff;
    background: linear-gradient(90deg, rgba(247, 12, 124, 1) 20%, rgb(250, 166, 3) 90%);
}


.btn:hover{
    width: 100%;
    height: 40px;
    border-radius: 8px 8px 8px 8px;
    -moz-border-radius: 8px 8px 8px 8px;
    -webkit-border-radius: 8px 8px 8px 8px;
    border: none;
    color: #ffffff;
    background: #f97727;
}


.btn:active{
    background: #eb742a;
}
</style>
