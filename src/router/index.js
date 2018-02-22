import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Message from '@/components/Message'
import Name from '@/components/Name'
import Contact from '@/components/Contact'
import Login from '@/components/Login'
import Edit from '@/components/Edit'
import ColorPicker from '@/components/ColorPicker'
import FontPicker from '@/components/FontPicker'
import ImagePicker from '@/components/ImagePicker'

Vue.use(Router)

Vue.config.silent = true

Vue.component('imagepicker', ImagePicker)
Vue.component('fontpicker', FontPicker)
Vue.component('colorpicker', ColorPicker)
Vue.component('edit', Edit)
Vue.component('main-content', Main)
Vue.component('name-content', Name)
Vue.component('projects', Projects)
Vue.component('message', Message)
Vue.component('contact', Contact)
Vue.component('login', Login)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      component: Main
    },
    {
      path: '/colorpicker',
      component: ColorPicker
    },
    {
      path: '/fontpicker',
      component: FontPicker
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/edit',
      component: Edit
    }
  ]
})
