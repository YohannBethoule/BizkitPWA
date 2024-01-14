import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from "./pages/Home.vue";
import Rules from "./pages/Rules.vue";
import Game from "./pages/Game.vue";

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/rules', component: Rules },
        { path: '/game', component: Game }
    ]
})

app.use(router)

app.mount('#app')
