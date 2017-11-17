import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Link from '@/components/Link'
import Weather from '@/components/Weather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
     {
        path: '/weather',
        name: 'Weather',
        component: Weather
      },
    {
      path: '/link',
      name: 'Link',
      component: Link
    }

  ]
})
