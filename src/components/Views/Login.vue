<template>
<div class="div0">
    <div class="div1">
        <div class="div2">
            <p class="textLogin"><strong>Login</strong><p>
            <form @submit.prevent="checkForm">
                <div class="div3">
                    <label class="label">Email</label>
                    <input type="email" v-model="email" class="input" placeholder="example@gmail.com">
                </div>
                <div class="div3">
                    <label class="label">Senha</label>
                    <input type="password" v-model="password" class="input" placeholder="**********">
                </div>
                <button type="submit" class="btn">Entrar</button>
            </form>
            <div v-if="errors.length > 0">
                <p v-for="item in errors" :key="item">{{item}}</p>
            </div>
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

export default {
    name: 'Login',
    props: {
    },
    components:{
        Loading
    },
    mixins:[],
    directives:{},
    data(){
        return {
            errors: [],
            email: "",
            password: "",
            isLoading: false
        }
    },
    computed:{},
    filters:{},
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){},
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{
        checkForm(){
            this.errors = []
            if (this.email && this.password) {
                this.login()
            }
            if (!this.email) {
                this.errors.push('Informe o email.');
            }
            if (!this.password) {
                this.errors.push('Informe a senha.');
            }
            
        },


        login(){
            let at = this
            at.isLoading = true
            at.errors = []
            let formData = {
                user: this.email,
                pwd: this.password            
            }    
            this.axios.post("/login", formData)
            .then((response) => {
                at.isLoading = false
                if(response.data.auth){
                    at.$cookies.set("token", response.data.token, "7MIN") //Expira em 10 minutos
                    at.$router.push("/home")
                }else{
                    at.errors.push(response.data.message)
                }
            })
            .catch((error) => {
                at.isLoading = false
                at.errors.push(error)
            })
        }
    },
  watch:{},
}
</script>

<style scoped>
.div0{
    background: url("../../assets/img/logo-fundo.jpg") no-repeat right top fixed;
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

.div2{
    background: #ffffff;
    min-height: 300px;
    min-width: 300px;
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    border: none;
    display: flex;
    align-items: center;
    padding: 0px 10px 20px 10px;
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
