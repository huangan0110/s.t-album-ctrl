// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index.js'
import Vuex from 'vuex'
import echarts from 'echarts'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate) //安装插件
Vue.prototype.$echarts = echarts
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})