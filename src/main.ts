import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { registerMicroApps } from 'qiankun';
import microApps from './qiankun/micro';
Vue.use(VueCompositionAPI);

Vue.config.productionTip = false;

registerMicroApps(microApps, {
    beforeLoad: async () => console.log('before'),
    afterMount: async () => console.log('after')
});

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');
