<template>
<div>
    <table class="table">
        <thead class="thead">
            <tr class="tr">
                <th class="thNome">Nome</th>
                <th class="thEmail">Email</th>
                <th class="thMobile">Mobile</th>
                <th class="thCriado">Criado em</th>
                <th class="thAt">Atualizado em</th>
                <!-- <th class="thBtn"></th> -->
            </tr>
        </thead>
        <tbody class="tbody">
            <tr class="trBody" v-for="item in listClientes" :key="item.id" @click="showModalSelect(item)">
                <td class="td">{{item.name}}</td>
                <td class="td">{{item.email}}</td>
                <td class="td">{{item.mobile}}</td>
                <td class="td">{{moment(item.createdAt).add(-4, 'hour').format('DD/MM/YYYY - HH:mm:ss') }}</td>
                <td class="td">{{moment(item.updatedAt).add(-4, 'hour').format('DD/MM/YYYY - HH:mm:ss') }}</td>
                <!-- <td>
                    <button type="button" @click="action(item, 'Atualizar')">Atualizar</button>
                    <button type="button" @click="excluirCliente(item.id)">Excluir</button>
                </td> -->
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'table-listar-clientes',
    props: {
        listClientes:{
            // type: Object,
            default: {}
        }
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
        moment(data) {
            return moment(data);
        },


        action(data, action){
            if(action == "Atualizar"){
                this.$router.push(`/atualizar/${data.id}`)
            }
        },


        showModalSelect(data){
            this.$root.$emit('showModalSelect', data)
        },


        excluirCliente(idCliente){
            this.$root.$emit('excluirCliente', idCliente)
        }
    },
    watch:{},
}
</script>

<style scoped>
.table{
    overflow-x: auto;
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    border-collapse: collapse;
}

.thead{
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    border-bottom: 2px solid #3a3a3d;
}

.tr{
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    background: #ffffff;
    height: 40px;
}

.thNome{
    min-width: 250px;
}

.thEmail{
    min-width: 250px;
}

.thMobile{
    min-width: 150px;
}

.thCriado{
    min-width: 180px;
}

.thAt{
    min-width: 180px;
}

.td{
    padding: 0px 0px 0px 5px;
}

.trBody{
    height: 35px;
    background: #ffffff;
    color: #4a4a4d;
    border-bottom: 1px solid #dadada;
}

.trBody:hover{
    cursor: pointer;
    background: #e7e7e7;
}

</style>
