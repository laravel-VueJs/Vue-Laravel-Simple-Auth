import { createWebHistory, createRouter } from 'vue-router';
import Home from "./components/Home.vue";
import About from "./components/About.vue";

import User from "./components/User.vue"
import Dashboard from "./components/user/Dashboard.vue";
import Login from "./components/user/Login.vue";
import Register from "./components/user/Register.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/user",
        name: "User",
        component: User,
        meta: { requiresAuth: true },
        children: [
            {
                path: "",
                name: "Dashboard",
                component: Dashboard,
            },
            {
                path: "login",
                name: "Login",
                component: Login,
            },
            {
                path: "register",
                name: "Register",
                component: Register,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;