<template>
  <div class="home-body">
    <div class="header">
      <p class="title" >潮汕之旅</p>
        <p @click="logout" class="logout">登出</p>
    </div>
    <div class="chooseDays" v-if="state"> 
        <span @click="()=>{this.$router.push('/')}">home </span>
        <span @click="()=>{this.$router.push('/day1')}">day1 </span>
        <span @click="()=>{this.$router.push('/day2')}">day2</span>
        <span @click="()=>{this.$router.push('/day3')}">day3</span>
        <span @click="()=>{this.$router.push('/day4')}">day4</span>
        <span @click="()=>{this.$router.push('/day5')}">day5</span>
    </div>
    <router-view></router-view>
    <div class="navToTop"><a @click="showDays"><img width="100%" height="100%" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.kut_LZ0ykjvEOHbdusdHawAAAA?w=196&h=196&c=7&r=0&o=5&pid=1.7" alt="" ></a></div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
       state: false
    }
  },
  methods:{
    showDays() {
        this.state = !this.state;
    },
    logout() {
        window.localStorage.removeItem('Authorization')
        location.reload();
    }
  }
};
</script>

<style>
.home-body .header {
    font-family: KaiTi;
  position: sticky;
  top: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: .7px grey solid;
  background-color: #fff;
}
.home-body .header .title {

  font-size: larger;
  font-weight: 650;
}
.home-body .header .logout{
position: absolute;
right:15px;
}
.chooseDays {
position: sticky;
top:50px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border-bottom: .7px grey solid;
background-color: #fff;
}
.chooseDays span {
   padding-left: 10px;
   padding-right: 10px;

}
.chooseDays span:active {
    color: pink;
}
.navToTop {
    position: fixed;
    bottom: 10px;
    right:10px;
    width:50px;
    height: 50px;
    border-radius: 25px 25px;
    overflow: hidden;
    border:0.5px  rgb(33, 230, 236) solid;
}
</style>
