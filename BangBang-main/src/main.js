import { createApp, VueElement } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/global.scss'
import 'animate.css'


import MathJax from './MathJax'

let app=createApp(App).use(store).use(router)

app.config.globalProperties.MathJax = MathJax

app.mount('#app');