import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '/src/views/1-1_main-page/MainPage.vue';
import FormView from '/src/views/form/FormPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Allows the user to go back and forth in browsing
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: MainPage
    },
    {
      path: '/form',
      name: 'form',
      component: FormView
    }
  ]
})

export default router;
