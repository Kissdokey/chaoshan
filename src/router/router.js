import Vue from 'vue'
import VueRouter from 'vue-router';
import LoginPage from '@/components/login-page'
import HomePage from '@/components/home-page'
import FirstDay from '@/components/first-day'
import SecondDay from '@/components/second-day'
import ThirdDay from '@/components/third-day'
import ForthDay from '@/components/fourth-day'
import FifthDay from '@/components/fifth-day'
import HomeDay from '@/components/home-day'
Vue.use(VueRouter)
const routes=[
    {
        path:'/',
        name:'home',
        // redirect:'/home',
        component: HomePage,
        children: [
            {
                path:'',
                component:HomeDay
            },{
                path: 'day1',
                component: FirstDay
            }
            
            ,{
                path:'day2',
                component:SecondDay
            },{
                path:'day3',
                component:ThirdDay
            },{
                path:'day4',
                component: ForthDay
            },
            {
                path:'day5',
                component: FifthDay
            }
        ]
    },
    {
      path:'/login',
      name:'login',
      component: LoginPage
    }
]
const router = new VueRouter({
    mode:'hash',
    routes

})
export default router