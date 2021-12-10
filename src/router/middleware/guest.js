/* eslint-disable */
export default function guest({ next, router,to ,store}) {
    if (localStorage.getItem('user-info')) {
      return router.replace({ name: 'index' });
    }
    
    return next();
  }