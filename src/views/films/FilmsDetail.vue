<template>
  <div>
    <ul>
        <li v-for="item in dataList" :key="item" @click="handleClick(item)">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default{
    name:'FilmsDetail',
    data(){
        return{
            dataList:['111','222','333']
        }
    },
    methods:{
        handleClick(id){
            this.$router.push({
                path:'/detail',
                query:{
                    id:id
                }
            })
        }
    }
}
</script>