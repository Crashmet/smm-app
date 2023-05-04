import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/search-result',
    name: 'search-result',
    component: () => import('../views/SearchResultView.vue'),
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
          import('../components/AccountSection/BlogerOrders.vue'),
      },

      {
        path: 'advertiser&profile',
        component: () =>
          import('../components/AccountSection/AdvertiserProfile.vue'),
      },
      {
        path: 'advertiser&finance',
        component: () =>
          import('../components/AccountSection/AdvertiserFinance.vue'),
      },
      {
        path: 'advertiser&orders',
        component: () =>
          import('../components/AccountSection/AdvertiserOrders.vue'),
        children: [
          {
            path: 'home',
            component: () =>
              import(
                '../components/AdvertiserOrdersPages/AdvertiserOrdersHome.vue'
              ),
          },
          {
            path: 'new-order',
            component: () =>
              import(
                '../components/AdvertiserOrdersPages/AdvertiserOrdersNewOrder.vue'
              ),
          },
          {
            path: 'select',
            component: () =>
              import(
                '../components/AdvertiserOrdersPages/AdvertiserOrdersSelect.vue'
              ),
          },
          {
            path: 'inspection',
            component: () =>
              import(
                '../components/AdvertiserOrdersPages/AdvertiserOrdersInspection.vue'
              ),
          },
          {
            path: 'chat',
            component: () =>
              import(
                '../components/AdvertiserOrdersPages/AdvertiserOrdersChat.vue'
              ),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
