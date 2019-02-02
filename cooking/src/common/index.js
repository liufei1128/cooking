import Vue from 'vue'
import tab from './components/tab-bar/tab.vue'
import { Icon } from 'vant';
Vue.use(Icon);
export default {
    install(Vue){
        Vue.component(tab.name,tab);
    }
}