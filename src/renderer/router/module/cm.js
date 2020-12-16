import login from '@/view/login/login.vue'
import page404 from '@/view/login/page404.vue'
export default [{
  path: '/login',
  name: 'login',
  component: login
},
{
  path: '*',
  name: '404',
  component: page404
}
]
