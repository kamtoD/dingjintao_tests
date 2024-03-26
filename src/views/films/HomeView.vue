<template>
  <div class="home">
    <div class="swiper">

    </div>
   <ul>
    <li>
     <router-link to="/detail" custom v-slot="{navigate,isActive}">
      <li @click="navigate" :class="isActive?'myactive':''">
        正在热映--{{isActive}}
      </li>
      </router-link>
    </li>
    <li>
     <router-link to="/" custom v-slot="{navigate,isActive}">
      <li @click="navigate" :class="isActive?'myactive':''">
        即将上线--{{isActive}}
      </li>
      </router-link>
    </li>
   </ul>
   <el-divider></el-divider>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data(){
    return{
      isActive:false,
    }
  }
}
</script>

<style lang="scss" scoped>
ul{
  display: flex;
  justify-content: center;
}
li{
  list-style: none;
  margin:0 10px ;
  height: 30px;
  background: skyblue;
  line-height: 30px;
  border-radius: 10%;
  font-weight: bolder;
}
.home{
  width: 1200px;
  border: 1px solid black;
  margin: 0 auto;
  padding: 20px;
  .swiper{
  height: 200px;
  background: pink;
}
.myactive{
  color: pink;
}
}
</style>
