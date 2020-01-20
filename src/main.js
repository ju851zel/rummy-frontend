import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueNativeSock from 'vue-native-websocket'
import UUID from 'vue-uuid';
import Game from './components/Game'
import Rules from './components/Rules'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import './registerServiceWorker'
import * as firebase from "firebase";
import Login from "@/components/authentification/Login";
import Register from "@/components/authentification/Register";
import Dashboard from "@/components/authentification/Dashboard";
import store from "./store";


Vue.config.productionTip = false;

Vue.use(UUID);
Vue.use(VueRouter);
Vue.use(VueNativeSock, 'wss://rummy-backend.herokuapp.com/socket', {
    reconnection: true, // (Boolean) whether to reconnect automatically (false)
    reconnectionAttempts: 1000000000, // (Number) number of reconnection attempts before giving up (Infinity),
    reconnectionDelay: 10, // (Number) how long to initially wait before attempting a new (1000)
});
Vue.use(Toast, {});


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            // eslint-disable-next-line no-unused-vars
            path: '/', name: "Game", component: Game, beforeEnter: (to, from, next) => {
                if (store.getters.user.loggedIn === false) {
                    window.console.log("NOT Logged in");
                    next("/login");
                } else {
                    window.console.log("store:", store);
                    next()
                }
            }
        },
        {path: '/rules', name: 'Rules', component: Rules},
        {path: '/login', name: 'Login', component: Login},
        {path: '/register', name: 'Register', component: Register},
        {path: '/dashboard', name: 'Dashboard', component: Dashboard}
    ]
});


new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');

const firebaseConfig = {
    apiKey: "AIzaSyANMAoY-smVMDj5AJJGJYMD6_97FdmEtWM",
    authDomain: "htwg-webtech-rummy.firebaseapp.com",
    databaseURL: "https://htwg-webtech-rummy.firebaseio.com",
    projectId: "htwg-webtech-rummy",
    storageBucket: "htwg-webtech-rummy.appspot.com",
    messagingSenderId: "206658326580",
    appId: "1:206658326580:web:4e6a7faf153d80f0243a61"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});