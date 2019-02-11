
import tabs from './components/tab-bar/tab.vue'
import scroller from './components/scroller/scroller'
import {FetchGet,FetchPost} from './fetch/index'
import { Icon } from 'vant'
export default {
    install(Vue){
        Vue.component(tabs.name, tabs);
        Vue.component(scroller.name,scroller);
        Vue.prototype.FetchGet = FetchGet;
        Vue.prototype.FetchPost = FetchPost;
        Vue.use(Icon);
    }
}