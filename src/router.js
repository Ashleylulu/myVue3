import {createRouter,createWebHistory} from 'vue-router'
import Home from './views/home'
import BarCharts from './views/Charts/BarCharts'
const routerHistory = createWebHistory()
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
const router = createRouter({
    history:routerHistory,
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/BarCharts',
            name:'BarCharts',
            component:BarCharts
        }
    ]
})

export default router