import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import view1 from '@/components/view_1'
import view2 from '@/components/view_2'
import view2D from '@/components/view_2D'
import view2D2 from '@/components/view_2D2'
import view3 from '@/components/view_3'
import view3D from '@/components/view_3D'
import view4 from '@/components/view_4'
import view4D2 from '@/components/view_4D2'
// import Monitor from '@/components/Monitor'
// import Monitor2 from '@/components/Monitor2'
// import Monitor3 from '@/components/Monitor3'
// import vVuelidate from '@/components/v-vuelidate'
// import vVuelidate from '@/components/test-v'

import VueJustifiedLayout from 'vue-justified-layout'
import VueLazyload from 'vue-lazyload'
import VueImg from 'v-img'

import moment from 'moment'
import { BootstrapVue, LayoutPlugin, ModalPlugin, CardPlugin, VBScrollspyPlugin, DropdownPlugin, TablePlugin } from 'bootstrap-vue'
// import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VeeValidate from 'vee-validate'

require('@/assets/css/aroon.css')

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY HH:mm:ss')
  }
})

Vue.filter('DiffTimeNow', function (dt) {
  if (dt) {
    let dta = moment(dt).toArray()
    let a = moment()
    let b = moment(dta)
    return moment.utc(a.diff(b)).format('HH:mm:ss')
  }
})

Vue.filter('millisecondsToTime', function (mls) {
  if (mls) {
    return moment.utc(mls * 1000).format('HH:mm:ss')
  }
})
Vue.filter('formatNumber', function (num) {
  let val = (num / 1).toFixed(0).replace('.', ',')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})
Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

const vueImgConfig = {
  // Use `alt` attribute as gallery slide title
  altAsTitle: false,
  // Display 'download' button near 'close' that opens source image in new tab
  sourceButton: false,
  // Event listener to open gallery will be applied to <img> element
  openOn: 'click',
  // Show thumbnails for all groups with more than 1 image
  thumbnails: false
}

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueJustifiedLayout)
Vue.use(VueLazyload)
Vue.use(VueImg, vueImgConfig)
Vue.use(LayoutPlugin)
Vue.use(ModalPlugin)
Vue.use(CardPlugin)
Vue.use(VBScrollspyPlugin)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)

Vue.use(require('vue-moment'))

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/rent',
      name: 'rent',
      component: view2,
      props: {id: 1}
    },
    {
      path: '/rent/:id',
      name: 'rent',
      component: view2D2
    },
    {
      path: '/rent2/:id',
      name: 'rent',
      component: view2D
    },
    {
      path: '/landscape',
      name: 'landscape',
      component: view2,
      props: {id: 2}
    },
    {
      path: '/buy',
      name: 'buy',
      component: view4,
      props: {id: 1}
    },
    {
      path: '/buy/:id',
      name: 'buy',
      component: view4D2
    },
    {
      path: '/events',
      name: 'events',
      component: view1,
      props: {id: 4}
    },
    {
      path: '/Souvenir',
      name: 'Souvenir',
      component: view1,
      props: {id: 5}
    },
    {
      path: '/Souvenir2',
      name: 'Souvenir2',
      component: view2,
      props: {id: 1}
    },
    {
      path: '/Souvenir2/:id',
      name: 'plants_detial',
      component: view2D
    },
    {
      path: '/Souvenir2/:id',
      name: 'plants_detial2',
      component: view2D2
    },
    {
      path: '/events2',
      name: 'events',
      component: view3,
      props: {id: 1}
    },
    {
      path: '/events2/:id',
      name: 'knowledge_detial',
      component: view3D
    },
    {
      path: '/buy2',
      name: 'buy2',
      component: view4,
      props: {id: 1}
    },
    {
      path: '/knowledge',
      name: 'Knowledge',
      component: view3,
      props: {id: 1}
    },
    {
      path: '/knowledges/:id',
      name: 'knowledge_detial',
      component: view3D
    }
    // {
    //   path: '/monitor2',
    //   name: 'monitor2',
    //   component: Monitor2
    // }
  ],
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
