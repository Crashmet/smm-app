import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/AccountView.vue'),
    children: [
      {
        path: 'bloger&profile',
        component: () =>
          import('../components/AccountSection/BlogerProfile.vue'),
      },
      {
        path: 'bloger&finance',
        component: () =>
          import('../components/AccountSection/BlogerFinance.vue'),
      },
      {
        path: 'bloger&orders',
        component: () =>
          import('../components/AccountSection/BlogerOreders.vue'),
      },

      {
        path: 'advertiser&profile',
        component: () =>
          import('../components/AccountSection/AdvertiserProfile.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
