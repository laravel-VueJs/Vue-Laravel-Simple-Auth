import { createWebHistory, createRouter } from 'vue-router';
import {data, fn} from "./data";

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
                component: Dashboard
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        // beforeEnter: (to, from, next) => {
        //     const authData = fn.getAuthStorage();
        //     if(authData != undefined && authData != null && authData != "") {
        //         next("/user");
        //     }else {
        //         next();
        //     }
        // }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const authData = fn.getAuthStorage();
    const isAuthenticated = ( authData != undefined && authData != null && authData != "" ) ? true : false;
    if(requiresAuth && !isAuthenticated) {
        next("/user");
    }else {
        next();
    }
});

export default router;