import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { booksStore } from "@/stores/books.js";

const pinia = createPinia();

const app = createApp(App);
// Use Pinia
app.use(pinia);

// Mount the app
app.mount("#app");
const store = booksStore();
await store.initializeStore();
await store.getBooks();
