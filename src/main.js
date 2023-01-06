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

// Importing elements
import registerElements from '/LLT/frontend/components/simple-elements/index.js';
registerElements(app);

// Importing search-bar fields (do if from the elements/index.js file)
// import registerSearchFields from '/LLT/frontend/components/search-bar/datatypes/index.js';
// import registerSearchFields from '/LLT/frontend/components/search-bar/datatypes/index.js';
// registerSearchFields(app);

// Middleware and application mounting
app.use(pinia);
app.use(router);
app.mount('#app');

export {app};