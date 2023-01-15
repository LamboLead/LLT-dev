// Fundamental imports
import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/index.js';

const app = createApp(App);
const pinia = createPinia();
pinia.use(({store}) => {store.router = markRaw(router)});

// Importing icons
import registerIcons from '/LLT/frontend/components/icons/index.js';
registerIcons(app);

// Import slides
import registerSlides from '/src/views/slider/components/slider/slides/index.js';
registerSlides(app);

// Importing form fields
import registerElements from '/LLT/frontend/components/simple-elements/index.js';
registerElements(app);

// Middleware and application mounting
app.use(pinia);
app.use(router);
app.mount('#app');

export {app};