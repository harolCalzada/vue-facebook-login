import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const HelloJs = require('hellojs/dist/hello.all.min.js');
const VueHello = require('vue-hellojs');

HelloJs.init({
  facebook: 'xxxxxx'
}, {
  redirect_uri: 'authcallback/'
});
Vue.use(VueHello, HelloJs);

new Vue({
  render: h => h(App),
}).$mount('#app')
