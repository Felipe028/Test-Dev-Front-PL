<template>
  <div>
    cjsdnjkd
  </div>
</template>

<script>
export default {
  name: 'Home',
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
  mounted(){
    this.teste()
  },
  beforeUpdate(){},
  updated(){},
  beforeDestroy(){},
  destroyed(){},
  methods:{
    teste(){
      this.axios.get("http://localhost:9080")
      .then((response) => {
        console.log(response.data)
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
