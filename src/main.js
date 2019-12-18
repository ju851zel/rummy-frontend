import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueNativeSock from 'vue-native-websocket'
import UUID from 'vue-uuid';
import Game from './components/Game'
import Rules from './components/Rules'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";



Vue.config.productionTip = false;

Vue.use(UUID);
Vue.use(VueRouter);
Vue.use(VueNativeSock, 'ws://localhost:9000/socket', {
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)
});
Vue.use(Toast, {});


const routes = [
  {path: '/', component: Game },
  {path: '/rules', component: Rules }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
