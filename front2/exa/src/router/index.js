import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import signup from '@/views/signup.vue'
import home from '@/views/home.vue';
import ventas from '@/views/ventas.vue';
import productos from '@/views/productos.vue';
import AddProduct from '@/views/AddProduct.vue';
import EditProduct from '@/views/EditProduct.vue';


const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
      path:"/signup",
      name:"signup",
      component:signup
       
    },
    {
      path:"/ventas",
      name:"ventas",
      component:ventas
    },
    {
      path: "/productos",
      name: "productos",
      component: productos
    },
    {
      path: "/registerProduct",
      name: "registerProduct",
      component: AddProduct
    },
    {
      path: "/editProduct",
      name: "editProduct",
      component: EditProduct
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;