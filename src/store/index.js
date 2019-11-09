import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
        isCollapse:false,
        path:'',
        title:'',
	},
	mutations: {
		login(state,code) {
			sessionStorage.setItem("code",code);
		},
		logout(state,code) {
			sessionStorage.setItem("code",code);
		},
		setCollapse(state){
			state.isCollapse = !state.isCollapse;
        },
        setPath(state,path){
            state.path = path;
        },
        setTitle(state,title){
            state.title = title;
        }
	}
})