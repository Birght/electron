import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/',
      component: () =>
                import('@/view/login/login.vue')
    }
  ]
})
