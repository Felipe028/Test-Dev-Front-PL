<template>
<div>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Criado em</th>
                <th>Atualizado em</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in listClientes" :key="item.id">
                <th>{{item.id}}</th>
                <td>{{item.name}}</td>
                <td>{{item.email}}</td>
                <td>{{item.mobile}}</td>
                <td>{{moment(item.createdAt).add(4, 'hour').format('DD/MM/YYYY - HH:mm:ss') }}</td>
                <td>{{moment(item.updatedAt).add(4, 'hour').format('DD/MM/YYYY - HH:mm:ss') }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'listar-clientes',
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
    },
    watch:{},
}
</script>

<style scoped>

</style>
