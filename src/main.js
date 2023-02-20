import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router.js'

import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// import jquery from 'jquery';

createApp(App).use(router).mount('#app')