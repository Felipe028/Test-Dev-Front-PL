<template>
<div>    
    <form @submit.prevent="checkForm">
        <div>
            <label>Email address</label>
            <input type="email" v-model="email">
        </div>
        <div>
            <label>Password</label>
            <input type="password" v-model="password">
        </div>
        <button type="submit">Submit</button>
    </form>
    <div v-if="errors.length > 0">
        <p v-for="item in errors" :key="item">{{item}}</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'Login',
    props: {
    },
    components:{},
    mixins:[],
    directives:{},
    data(){
        return {
            errors: [],
            email: "",
            password: ""
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
            at.errors = []
            let formData = {
                user: this.email,
                pwd: this.password            
            }    
            this.axios.post("/login", formData)
            .then((response) => {
                if(response.data.auth){
                    at.$cookies.set("token", response.data.token);
                    at.$router.push("/home")
                }else{
                    at.errors.push(response.data.message)
                }
            })
            .catch((error) => {
                at.errors.push(error)
            })
        }
    },
  watch:{},
}
</script>

<style scoped>

</style>
