<template>
  <div class="background">
    <div class="chaoshan"><span>潮汕纪念</span> <span>20230520</span></div>
    <div class="login">
      <div class="header"></div>
      <div class="login_box">
        <!-- required就是不能为空  必须在css效果中有很大的作用 -->
        <input
          v-model="username"
          placeholder="名字"
          type="text"
          name="name"
          id="name"
          required
        />
      </div>
      <div class="login_box">
        <input
          v-model="password"
          placeholder="密码"
          type="password"
          name="pwd"
          id="pwd"
          required="required"
        />
      </div>
      <div class="login-button" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.username === "520" && this.password === "1314") {
        let dom = document.querySelector('.login')
        if(dom)
        dom.className = 'login-animation'
        localStorage.Authorization = 'ok'
        setTimeout(() => {
            this.$router.push("/");
        }, 1000); 
      }
      else {
        alert("未输入正确通行证")
      }
   
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}
.chaoshan {
    position: absolute;
    font-family:KaiTi ;
    top:10%;
    font-size: larger;
    font-weight: 900;
}
.chaoshan span {
    display: flex;
    justify-content: center;
    align-items: center;
}
.background {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/bc.jpg);
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  width: 70%;
  height: 220px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.4);
  position: relative;
  padding: 5px;
  padding-top: 20px;
  border-radius: 15px 15px;
}
.login-animation {
    width: 70%;
  height: 220px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.4);
  position: relative;
  padding: 5px;
  padding-top: 20px;
  border-radius: 15px 15px;
  animation: xuanzhuan 1s;
  animation-fill-mode: forwards;
}
@keyframes xuanzhuan{
    100%{
        transform: rotateX(-60deg);
 
    }
}
@keyframes big{
    100%{
        transform: scale(1.1);
    }
}
.login .login_box {
  /*相对定位*/
  position: relative;
  width: 100%;
}
.login-animation .login_box {
  /*相对定位*/
  position: relative;
  width: 100%;
}
.login_box input {
  /*清除input框自带的边框和轮廓*/
  outline: none;
  border: none;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 30px;
  color: white;
  font-size: 16px;
  border-bottom: 1px solid #fff;
  /*背景颜色为透明色*/
  background-color: transparent;
}
.login-animation .login-button {
  width: 100px;
  height: 30px;
  padding: 5px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #2766a3, #2c8896);
  border-radius: 15px 15px;
  left: 50%;
  transform: translate(-50%);
}
.login .login-button {
  width: 100px;
  height: 30px;
  padding: 5px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #2766a3, #2c8896);
  border-radius: 15px 15px;
  left: 50%;
  transform: translate(-50%);
}
</style>
