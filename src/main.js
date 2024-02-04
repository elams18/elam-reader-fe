import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const pinia = createPinia();

const app = createApp(App);

// Use Pinia
app.use(pinia);

// Mount the app
app.mount('#app');
