import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'; 
import router from './Routes/Routes';
import store from './store/store';

const app = createApp(App);

app.use(router);

app.config.globalProperties.$store = store;

app.mount('#app');
