import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '/src/views/1-1_main-page/MainPage.vue';
// import Semillero from '/src/components/views/1-3_semillero/Semillero.vue';
// import Repository from '/src/components/views/1-4_repository/Repository.vue';
// import Events from '/src/components/views/1-5_events/Events.vue';
// import Vinculation from '/src/components/views/1-6_vinculation/Vinculation.vue';
// import Member from '/src/components/views/1-7_member/Member.vue';
// import ProjectRequest from '/src/components/views/1-8_project-request/ProjectRequest.vue';

// import LogIn from '/src/components/views/2-1_login/LogIn.vue';
// import AdminSolicitudes from '/src/components/views/2-2_admin-solicitudes/AdminSolicitudes.vue';

import Test from '/src/views/test/Test.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Allows the user to go back and forth in browsing
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: MainPage
    },
    // {
    //   path: '/repositorio',
    //   name: 'repositorio',
    //   component: Repository
    // },
    // {
    //   path: '/eventos',
    //   name: 'eventos',
    //   component: Events
    // },
    // {
    //   path: '/el-semillero',
    //   name: 'semillero',
    //   component: Semillero
    // },
    // {
    //   path: '/vinculate',
    //   name: 'vinculation',
    //   component: Vinculation
    // },
    // {
    //   path: '/miembros',
    //   name: 'member',
    //   component: Member
    // },
    // {
    //   path: '/solicitudes',
    //   name: 'request',
    //   component: ProjectRequest
    // },
    // {
    //   path: '/iniciar-sesion',
    //   name: 'login',
    //   component: LogIn
    // },
    // {
    //   path: '/admin/solicitudes',
    //   name: 'admin-solicitudes',
    //   component: AdminSolicitudes
    // },
    {
      path: '/test',
      name: 'test',
      component: Test
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router;
