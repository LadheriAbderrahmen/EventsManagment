import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'; 
import router from './Routes/Routes';
import store from './store/store';

// Import FontAwesome core and icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret, faHouse, faPlus, faLocationDot, faBars, faPenSquare, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faLocationDot, faHouse, faPlus ,faBars , faPenToSquare , faTrash);


const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.config.globalProperties.$store = store;

app.mount('#app');
