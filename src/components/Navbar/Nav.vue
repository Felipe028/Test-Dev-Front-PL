<template>
<div>
    <div class="topnav">
        <a @click="$router.push('/home')">Menu</a>
        <a @click="$router.push('/cadastrar')">Cadastrar</a>
        <a @click="deslogar()">Sair</a>
        
        <!-- <a class="active" href="#home">Home</a> -->
    </div>
</div>
</template>

<script>
export default {
    name: 'navbar',
    props: {
    },
    components:{},
    mixins:[],
    directives:{},
    data(){
        return {
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
        deslogar() {
            this.$cookies.keys().forEach(cookie => this.$cookies.remove(cookie));
            // this.$session.destroy()
            location.reload()
        }
    },
    watch:{},
}
</script>

<style scoped>
.topnav {
  background-color: rgba(30, 30, 30, 1);
  overflow: hidden;
  display: flex;
  justify-content: end;
  width: 100%;
}

/* Style the links inside the navigation bar */
.topnav a {
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  transition: background 1s, color 1s;
  cursor: pointer;
}

/* Change the color of links on hover */
.topnav a:hover {
  background: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
</style>
