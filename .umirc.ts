import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  routes: [
    {
      path: '/account',
      routes: [
        {
          path: '/account',
          redirect: '/account/login',
        },
        {
          path: 'login',
          component: '@/pages/account/login/index',
        },
        {
          path: 'register',
          component: '@/pages/account/register/index',
        },
      ],
    },
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      { libraryName: 'antd', libraryDirectory: 'lib', style: true },
      'antd',
    ],
    [
      'babel-plugin-import',
      { libraryName: '@formily/antd', libraryDirectory: 'lib', style: true },
    ],
  ],
});
