
/* eslint-disable */
export default function auth({ next, router,to ,store}) {
    if (!localStorage.getItem('user-info')) {
      return router.replace({ name: 'Login' });
    }
    
    return next();
  }