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
// 首页活动数据
export function getHomeAction(){
    return new Promise((resolve,reject)=>{
        FetchGet(api.HOME_HUODONG_URL)
        .then(data=>{
            // console.log(data);
            resolve(data);
        })
    })
   
}
// 首页美烹好食数据
export function getHomeGoods(){
    return new Promise((resolve,reject)=>{
        FetchGet(api.HOME_GOODS_URL)
        .then(data=>{
            console.log(data);
            resolve(data);
        })
    }) 
}

// 首页明星等数据
export function getHomeShoppingList(){
    return new Promise((resolve,reject)=>{
        FetchGet(api.HOME_SHOPPINGLIST_URL)
        .then(data=>{
            // console.log(data);
            resolve(data);
        })
    }) 
}