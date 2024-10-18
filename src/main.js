// src/main.js or src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/router';
import '../src/assets/base.css'

const app = createApp(App);

app.use(router);
app.mount('#app');
