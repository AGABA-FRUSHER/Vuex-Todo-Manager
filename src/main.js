import { createApp } from 'vue' 
import App from './App.vue'
import store from './store'
// import Vue from 'vue'

// Vue.config.productionTip = false;
// createApp(App).mount('#app')

// new Vue({
//     store,
//     render: h => h(App)
// }).$mount('#app');

const app = createApp(App)
app.use(store)
app.mount('#app')
