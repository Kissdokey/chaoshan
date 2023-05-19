import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
router.beforeEach((to,from,next)=>{
  let token = localStorage.Authorization
  if(!token && to.name !== 'login') {
    // console.log("123+token",token)
    next({name:'login'})
  } 
  else if (token&&to.name === 'login') {
    // console.log("456+token",token)
    next({name:'home'})
  } 
  else {
    next()
  }
})

new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
