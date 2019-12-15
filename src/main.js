import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueNativeSock from 'vue-native-websocket'
import UUID from 'vue-uuid';
import Game from './components/Game'
import Rules from './components/Rules'

Vue.config.productionTip = false;

Vue.use(UUID);
Vue.use(VueRouter);
Vue.use(VueNativeSock, 'ws://localhost:9000/socket', { format: 'json' });


const routes = [
  {path: '/', component: Game },
  {path: '/game', component: Game },
  {path: '/rules', component: Rules }
];

const router = new VueRouter({
  routes: routes
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app');
