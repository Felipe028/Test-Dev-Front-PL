<template>
<div>
    <div id="myModal" class="modal" v-if="showModal">
        <div class="modal-content">
            <span class="close" @click="showModal = false">&times;</span>
            <h4 class="title">{{modal.title}}</h4>
            <p class="textCorpo">{{modal.text}}</p>
        </div>
    </div>
</div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'modal-alert',
    props: {},
    components:{},
    mixins:[],
    directives:{},
    data(){
        return {
            datas: {},
            showModal: false,
            modal: {
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
        this.$root.$on('showModalAlert', (data) => {
            this.showModal = true
            this.modal.title = data.title
            this.modal.text = data.text
            this.modal.status = data.status
        })
    },
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods:{
        moment(data) {
            return moment(data);
        },


        action(action, data){
            if(action == "Atualizar"){
                this.$router.push(`/atualizar/${data.id}`)
            }else if(action == "Excluir"){
                this.$root.$emit('excluirCliente', data.id)
                this.showModal = false
            }else{
                alert("csdcsd")
            }
        }
    },
    watch:{},
}
</script>

<style scoped>
/* The Modal (background) */
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(41, 39, 39, 0.5); /* Black w/ opacity */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 0px 10px 0px 10px;
  padding: 20px;
  border: 1px solid #888;
  min-width: 300px;
  max-width: 400px;
  min-height: 140px;
  max-height: 300px;
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  position: relative;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.title{
    width: 100%;
    text-align: center;
    color: #333333;
    font-family: Museo Sans;
    font-size: 23px;
    margin: 0px 0px 20px 0px;
}

.textCorpo{
    margin: 0px 0px 5px 0px;
    padding: 0px;
    font-family: Museo Sans;
    font-size: 18px;
    color: #333333;
    width: 100%;
    text-align: center;
}

</style>
