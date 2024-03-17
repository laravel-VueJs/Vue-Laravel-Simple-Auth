import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";


// One way
// const app = createApp(App);
// app.use(router);
// app.mount('#app')


// Another way
createApp(App).use(router).mount('#app')
