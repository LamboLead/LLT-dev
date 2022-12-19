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

// Importing form fields
import registerFields from '/LLT/frontend/components/form/fields/index.js';
registerFields(app);

// Importing search-bar fields
// import registerSearchFields from '/LLT/frontend/components/search-bar/datatypes/index.js';
// import registerSearchFields from '/LLT/frontend/components/search-bar/datatypes/index.js';
// registerSearchFields(app);

// Importing cards elements
import registerVerticalCardElements from '/LLT/frontend/components/vertical-cards/elements/index.js';
registerVerticalCardElements(app);

// Middleware and application mounting
app.use(pinia);
app.use(router);
app.mount('#app');

export {app};