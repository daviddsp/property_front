import Vue from 'vue'
var VueRouter = require('vue-router')
var VueResource = require('vue-resource')

Vue.use(VueRouter)
Vue.use(VueResource)

import Index from './App'
import Property from './components/property/index.vue'

var App = {}
/* eslint-disable no-new */
var router = new VueRouter()

router.map({
  '/': {
    component: Index
  },
  '/property': {
    component: Property
  }
})
router.start(App, '#app')
