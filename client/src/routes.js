import {createRouter} from 'vue-router'
import Admin from './pages/Admin.vue'
import Home from './pages/Home.vue'
import SignUp from './pages/SignUp.vue';
import UserDetail from './pages/UserDetail.vue'
import Error from './pages/Error.vue'

const routes = [
  {
    path: '/',
    component: Home
  },

  {
    path: '/admin',
    component: Admin
  },

  {
    path: '/sign-up',
    component: SignUp
  },

  {
    path: '/users/:id',
    component: UserDetail
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorView',
    component: Error
}


]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}