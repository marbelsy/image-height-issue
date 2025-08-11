import Vue from 'nativescript-vue'

import Home from './components/Home'

import ImagePlugin from '@nativescript-community/ui-image/vue';
Vue.use(ImagePlugin);
Vue.registerElement(
  'HTMLLabel',
  () => require('@nativescript-community/ui-label').Label
);

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
