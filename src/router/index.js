/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import Create from '@/components/Create'
import Edit from '@/components/Edit'
import index from '@/components/index'
import AddUser from '@/components/Signup'
import UserLogin from '@/components/Login'
import auth from './middleware/auth.js'
import guest from './middleware/guest.js'
Vue.use(Router)
const router= new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        middleware:[auth]
      }
    },
    { path: '/create',
      name: 'create',
      component: Create,
       meta:{
        middleware:[auth]
      }
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit,
       meta:{
        middleware:[auth]
      }
    },
    { path: '/signup',
      name: 'Signup',
      component: AddUser,
      meta:{
        middleware:[guest]
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: UserLogin,
      meta:{
        middleware:[guest]
      }
    }
  ],
  mode: 'history',
})
router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
   const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
      store
    };

    return middleware[0]({ ...context });
  }
  return next();
});
export default router;