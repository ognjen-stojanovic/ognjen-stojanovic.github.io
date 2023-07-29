import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ProductsView from './views/ProductsView.vue'
import ProductView from './views/ProductView.vue'
// import CategoryView from './views/CategoryView.vue'
import ContactView from './views/ContactView.vue'
import ServisView from './views/ServisView.vue'
import AkcijeView from './views/AkcijeView.vue'
import PromocijeView from './views/PromocijeView.vue'
import DodatnaOpremaView from './views/DodatnaOpremaView.vue'
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
        // {
        //     path: '/products',
        //     name: 'CategoryView',
        //     // component: CategoryView
        //     component: () => import('./views/CategoryView.vue')
        //
        // },
        {
            path: '/categories',
            name: 'Products',
            component: ProductsView
        },
        {
            path: '/products/:category/:name',
            name: 'ProductView',
            component: ProductView
        },
        {
            path: '/products/dodatna-oprema/:name',
            name: 'DodatnaOprema',
            component: DodatnaOpremaView
        },
        {
            path: '/products/:category',
            name: 'Product',
            // component: CategoryView
            component: () => import('./views/CategoryView.vue')
        },
        {
            path: '/contact',
            name: 'Contact',
            component: ContactView
        },
        {
            path: '/servis',
            name: 'Servis',
            component: ServisView
        },
        {
            path: '/akcije',
            name: 'Akcije',
            component: AkcijeView
        },
        {
            path: '/promocije',
            name: 'Promocije',
            component: PromocijeView
        },


    ]
    
})
const app = createApp(App);
app.use(router).mount('#app')
