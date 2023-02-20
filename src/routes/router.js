import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Service from '../components/Services.vue'
import CartPage from '../components/CartPage.vue'
import CustomerDetail from "../components/CustomerDetail.vue"
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/service',
        name: 'Service',
        component: Service
    },
    {
        path:'/cartpage',
        name:'CartPage',
        component: CartPage
    },
    {
        path:"/customerdetail",
        name: "CustomerDetail",
        component: CustomerDetail
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;