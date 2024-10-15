import './index.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import Notifications from "@kyvg/vue3-notification";
import {createHead} from "@vueuse/head";

const app = createApp(App)
app.use(createHead())
    .use(Notifications)
    .use(createPinia())
    .use(router)

app.mount('#app')
