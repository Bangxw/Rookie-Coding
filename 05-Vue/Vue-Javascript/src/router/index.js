import Vue from 'vue'
import Router from 'vue-router'
import '@/css/main.css'
import HelloWorld from '@/components/HelloWorld'
import Introduction from '@/components/Essentials/Introduction'
import TheVueInstance from '@/components/Essentials/TheVueInstance'
import TemplateSyntax from '@/components/Essentials/TemplateSyntax'
import ComputedWatchers from '@/components/Essentials/ComputedWatchers'
import ClassStyleBinding from '@/components/Essentials/ClassStyleBinding'
import ConditionalRendering from '@/components/Essentials/ConditionalRendering'
import ListRendering from '@/components/Essentials/ListRendering'
import EventHeading from '@/components/Essentials/EventHeading'
import FormInputBindings from '@/components/Essentials/FormInputBindings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/Introduction',
      name: 'Introduction',
      component: Introduction
    }, {
      path: '/VueInstance',
      name: 'VueInstance',
      component: TheVueInstance
    }, {
      path: '/TempSyntax',
      name: 'TempSyntax',
      component: TemplateSyntax
    }, {
      path: '/ComputedWatchers',
      name: 'ComputedWatchers',
      component: ComputedWatchers
    }, {
      path: '/ClassStyleBinding',
      name: 'ClassStyleBinding',
      component: ClassStyleBinding
    }, {
      path: '/ConditionalRendering',
      name: 'ConditionalRendering',
      component: ConditionalRendering
    }, {
      path: '/ListRendering',
      name: 'ListRendering',
      component: ListRendering
    }, {
      path: '/EventHeading',
      name: 'EventHeading',
      component: EventHeading
    }, {
      path: '/FormInputBindings',
      name: 'FormInputBindings',
      component: FormInputBindings
    }
  ]
})
