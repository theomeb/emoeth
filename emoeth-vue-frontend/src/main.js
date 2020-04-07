import Vue from 'vue';
import vuesax from './plugins/vuesax'; //used!
import 'material-icons/iconfont/material-icons.css';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import router from './modules/router';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
