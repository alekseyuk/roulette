import Vue from 'vue'
import Router from 'vue-router'
import MainRoulett from '@/components/MainRoulett'
import DuelRoulett from '@/components/DuelRoulett'
import Person from '@/components/Person'
import InfoMenu from '@/components/InfoMenu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  default: '/main_roulett',
  routes: [
    { path: '/', redirect: '/main_roulett' },
    {
      path: '/main_roulett',
      name: 'MainRoulett',
      component: MainRoulett
    },
    {
      path: '/duel_roulett',
      name: 'DuelRoulett',
      component: DuelRoulett
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      path: '/info',
      name: 'Info',
      component: InfoMenu
    },
    {
      path: '/settings',
      name: 'Settings',
      component: {template: '<h1>SETTINGS</h1>'}
    }
  ]
})
