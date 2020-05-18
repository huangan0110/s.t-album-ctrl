import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import '../src/assets/style/theme/index.css'
import store from './store/index.js'
import Vuex from 'vuex'
import echarts from 'echarts'
import Vuelidate from 'vuelidate'
import './assets/icon/iconfont.css'
import 'lib-flexible'
import VueContextMenu from '@xunlei/vue-context-menu'
import  qs from 'qs'


Vue.prototype.$qs = qs

Vue.use(Vuelidate) //安装插件
Vue.use(VueContextMenu)
Vue.prototype.$echarts = echarts
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
