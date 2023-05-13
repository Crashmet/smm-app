import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Account from '../views/AccountView.vue';

const userRoles = 'admin';
const isAuthorized = JSON.parse(localStorage.getItem('entry-status')) || null;
const authGuard = function (to, from, next) {
  if (isAuthorized !== '200') {
    next({ path: '/login' });
  } else {
    next();
  }
};

const managerAuthGuard = function (to, from, next) {
  if (isAuthorized !== '200') {
    next({ path: '/login' });
  } else if (userRoles !== 'admin') {
    next({ path: '/' });
  } else {
    next();
  }
};

const authDone = function (to, from, next) {
  console.log(isAuthorized, 33);
  if (isAuthorized === '200') {
    next({ path: '/account' });
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: authDone,
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    beforeEnter: authGuard,
    children: [
      {
        path: 'bloger&profile',
        component: () =>
          import('../components/AccountSection/BlogerProfile.vue'),
        beforeEnter: authGuard,
      },
      {
        path: 'bloger&finance',
        component: () =>
          import('../components/AccountSection/BlogerFinance.vue'),
        beforeEnter: authGuard,
      },
      {
        path: 'bloger&orders',
        component: () =>
          import('../components/AccountSection/BlogerOrders.vue'),
        beforeEnter: authGuard,
      },

      {
        path: 'advertiser&profile',
        component: () =>
          import('../components/AccountSection/AdvertiserProfile.vue'),
        beforeEnter: authGuard,
      },
      {
        path: 'advertiser&finance',
        component: () =>
          import('../components/AccountSection/AdvertiserFinance.vue'),
        beforeEnter: authGuard,
      },
      {
        path: 'advertiser&orders',
        component: () =>
          import('../components/AccountSection/AdvertiserOrders.vue'),
        beforeEnter: authGuard,
        children: [
          {
            path: 'home',
            component: () =>
              import(
                '../components/AdvertiserOrdersPages/AdvertiserOrdersHome.vue'
              ),
            beforeEnter: authGuard,
          },
          {
            path: 'new-order',
            component: () =>
              import(
                '../components/AdvertiserOrdersPages/AdvertiserOrdersNewOrder.vue'
              ),
            beforeEnter: authGuard,
          },
          {
            path: 'select',
            component: () =>
              import(
                '../components/AdvertiserOrdersPages/AdvertiserOrdersSelect.vue'
              ),
            beforeEnter: authGuard,
          },
          {
            path: 'inspection',
            component: () =>
              import(
                '../components/AdvertiserOrdersPages/AdvertiserOrdersInspection.vue'
              ),
            beforeEnter: authGuard,
          },
          {
            path: 'chat',
            component: () =>
              import(
                '../components/AdvertiserOrdersPages/AdvertiserOrdersChat.vue'
              ),
            beforeEnter: authGuard,
          },
        ],
      },
    ],
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/AdminView.vue'),
    beforeEnter: managerAuthGuard,
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
    beforeEnter: authDone,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
    beforeEnter: authDone,
  },

  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFoundViev.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
