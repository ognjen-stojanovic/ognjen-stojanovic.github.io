import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ProductsView from './views/ProductsView.vue'
import ProductView from './views/ProductView.vue'
import ContactView from './views/ContactView.vue'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'About',
            component: AboutView
        },
        {
            path: '/products',
            name: 'Products',
            component: ProductsView
        },
        {
            path: '/products/:name',
            name: 'Product',
            component: ProductView
        },
        {
            path: '/contact',
            name: 'Contact',
            component: ContactView
        },


    ]
    
})

createApp(App).use(router).mount('#app')
