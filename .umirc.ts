import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/account',
      routes: [
        {
          path:'/account',
          redirect:'/account/login'
        },
        {
          path: 'login',
          component:'@/pages/account/login/index'
        },
        {
          path: 'register',
          component:'@/pages/account/register/index'
        },
      ],
    },
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
