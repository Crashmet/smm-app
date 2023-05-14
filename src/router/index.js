import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Account from '../views/AccountView.vue';

const userRoles = 'admin';
let lastPageAccount = '/account/bloger&profile';
const isAuthorized = JSON.parse(localStorage.getItem('entry-status')) || null;

function searchLastPageAccount(to) {
  lastPageAccount = to.matched[1].path;
}

const authGuard = function (to, from, next) {
  if (isAuthorized !== '200') {
    next({ path: '/login' });
  } else {
    next();
  }
};

const accountChildsGuard = function (to, from, next) {
  if (isAuthorized !== '200') {
    next({ path: '/login' });
  } else {
    searchLastPageAccount(to);

    next();
  }
};

const homeGuard = function (to, from, next) {
  if (isAuthorized === '200') {
    next({ path: lastPageAccount });
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
  if (isAuthorized === '200') {
    next({ path: '/account/bloger&profile' });
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: homeGuard,
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
        beforeEnter: accountChildsGuard,
      },
      {
        path: 'bloger&finance',
        component: () =>
          import('../components/AccountSection/BlogerFinance.vue'),
        beforeEnter: accountChildsGuard,
      },
      {
        path: 'bloger&orders',
        component: () =>
          import('../components/AccountSection/BlogerOrders.vue'),
        beforeEnter: accountChildsGuard,
      },

      {
        path: 'advertiser&profile',
        component: () =>
          import('../components/AccountSection/AdvertiserProfile.vue'),
        beforeEnter: accountChildsGuard,
      },
      {
        path: 'advertiser&finance',
        component: () =>
          import('../components/AccountSection/AdvertiserFinance.vue'),
        beforeEnter: accountChildsGuard,
      },
      {
        path: 'advertiser&orders',
        component: () =>
          import('../components/AccountSection/AdvertiserOrders.vue'),
        beforeEnter: accountChildsGuard,
        children: [
          {
            path: '',
            component: () =>
              import(
                '../components/AdvertiserOrdersPages/AdvertiserOrdersHome.vue'
              ),
            beforeEnter: accountChildsGuard,
          },
          {
            path: 'new-order',
            component: () =>
              import(
                '../components/AdvertiserOrdersPages/AdvertiserOrdersNewOrder.vue'
              ),
            beforeEnter: accountChildsGuard,
          },
          {
            path: 'select',
            component: () =>
              import(
                '../components/AdvertiserOrdersPages/AdvertiserOrdersSelect.vue'
              ),
            beforeEnter: accountChildsGuard,
          },
          {
            path: 'inspection',
            component: () =>
              import(
                '../components/AdvertiserOrdersPages/AdvertiserOrdersInspection.vue'
              ),
            beforeEnter: accountChildsGuard,
          },
          {
            path: 'chat',
            component: () =>
              import(
                '../components/AdvertiserOrdersPages/AdvertiserOrdersChat.vue'
              ),
            beforeEnter: accountChildsGuard,
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
