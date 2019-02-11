import api from '../api/api'
import {FetchGet,FetchPost} from '../common/fetch'
import { resolve } from 'url';
import { reject } from 'q';
// 获取首页头部导航
export function getHomeNav(){
    return new Promise((resolve,reject)=>{
        FetchGet(api.CATE_LIST_URL)
        .then(data=>{
            // console.log(data);
            data = data.map(item=>{
                return {
                    id:item.id,
                    name:item.name
                }
            });
            resolve(data);
        })
    })
    
}