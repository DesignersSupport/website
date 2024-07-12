import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import ContactPage from '@/components/ContactPage.vue';
// import AboutPage from '@/components/AboutPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: AboutPage,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
