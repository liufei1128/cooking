const express = require('express');
const api = require('./api/api');
const url = require('url');
// const { JSDOM } = require("jsdom");
// const axios = require('axios');

const app = express();

app.get(api.CATE_LIST_URL,(rep,res)=>{
    let result = require("./data/homeHeader.json");
    res.json({
       status:0,
       message:"ok" ,
       data:result
    });
})

//分类列表
// app.get(api.CATE_LIST_URL, (req, res)=>{
//     JSDOM.fromURL("http://m.you.163.com/", {runScripts: 'dangerously'}).then(dom => {
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: dom.window.cateList
//         });
//     });
// });

// 首页轮播图数据
// app.get(api.HOME_BANNER_LIST_URL, (req, res)=>{
//     JSDOM.fromURL("http://m.you.163.com/", {runScripts: 'dangerously'}).then(dom => {
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: dom.window.jsonData.focusList
//         });
//     });
// })

// // 网易严选协议
// app.get(api.POLICY_LIST_URL, (req, res)=>{
//     JSDOM.fromURL("http://m.you.163.com/", {runScripts: 'dangerously'}).then(dom => {
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: dom.window.jsonData.policyDescList
//         });
//     });
// })

// // 首页分类列表
// app.get(api.HOME_CATE_LIST_URL, (req, res)=>{
//     JSDOM.fromURL("http://m.you.163.com/", {runScripts: 'dangerously'}).then(dom => {
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: dom.window.jsonData.kingKongModule
//         });
//     });
// })

// // 首页活动
// app.get(api.HOME_ACTIVITY_URL, (req, res)=>{
//     JSDOM.fromURL("http://m.you.163.com/", {runScripts: 'dangerously'}).then(dom => {
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: dom.window.jsonData.bigPromotionModule
//         });
//     });
// })

// //品牌制造商直供
// app.get(api.HOME_TAG_LIST_URL, (req, res)=>{
//     JSDOM.fromURL("http://m.you.163.com/", {runScripts: 'dangerously'}).then(dom => {
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: dom.window.jsonData.tagList
//         });
//     });
// })

// //类目热销榜
// app.get(api.HOME_CATE_HOT_SELL_URL, (req, res)=>{
//     JSDOM.fromURL("http://m.you.163.com/", {runScripts: 'dangerously'}).then(dom => {
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: dom.window.jsonData.categoryHotSellModule
//         });
//     });
// })

// // 人气推荐
// app.get(api.HOME_POPULAR_LIST_URL, (req, res)=>{
//     JSDOM.fromURL("http://m.you.163.com/", {runScripts: 'dangerously'}).then(dom => {
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: dom.window.jsonData.popularItemList
//         });
//     });
// })

// // 限时购
// app.get(api.HOME_FLASH_SALE_URL, (req, res)=>{
//     JSDOM.fromURL("http://m.you.163.com/", {runScripts: 'dangerously'}).then(dom => {
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: dom.window.jsonData.flashSaleModule
//         });
//     });
// })

// // 新品首发
// app.get(api.HOME_NEW_ITEM_URL, (req, res)=>{
//     JSDOM.fromURL("http://m.you.163.com/", {runScripts: 'dangerously'}).then(dom => {
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: dom.window.jsonData.newItemList
//         });
//     });
// })

// // 购物指南
// app.get(api.HOME_SHOPPING_GUIDE_URL, (req, res)=>{
//     JSDOM.fromURL("http://m.you.163.com/", {runScripts: 'dangerously'}).then(dom => {
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: dom.window.jsonData.sceneLightShoppingGuideModule
//         });
//     });
// })

// // 推荐列表
// app.get(api.HOME_TOP_CATELIST_URL, (req, res)=>{
//     JSDOM.fromURL("http://m.you.163.com/", {runScripts: 'dangerously'}).then(dom => {
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: dom.window.jsonData.categoryModule
//         });
//     });
// })

// // 分类列表数
// app.get(api.HOME_CATE_ITEM_LIST_URL, (req, res)=>{
//     let {id} = url.parse(req.url, true).query;
//     if(!id){
//         res.json({
//             status: 1,
//             message: '缺少参数',
//             data: null
//         });
//         return;
//     }

//     JSDOM.fromURL("http://m.you.163.com/item/list?categoryId="+id, {runScripts: 'dangerously'}).then(dom => {
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: {
//                 categoryItemList: dom.window.jsonData.categoryItemList,
//                 currentCategory: dom.window.jsonData.currentCategory
//             }
//         });
//     });
// })

// // 商品详情 
// app.get(api.ITEM_DETAIL_URL, (req, res)=>{
//     let {id} = url.parse(req.url, true).query;
//     if(!id){
//         res.json({
//             status: 1,
//             message: '缺少参数',
//             data: null
//         });
//         return;
//     }

//     JSDOM.fromURL("http://m.you.163.com/item/detail?id="+id, {runScripts: 'dangerously'}).then(dom => {
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: dom.window.jsonData
//         });
//     });
// })

// //分类
// app.get(api.CATEGOEY_LIST_URL, (req, res)=>{
//     JSDOM.fromURL('http://m.you.163.com/item/cateList', {runScripts: 'dangerously'}).then(dom=>{
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: dom.window.ftlData.categoryL1List
//         })
//     })
// })

// //分类页面分类列表
// app.get(api.CATEGOEY_LIST_GROUP_URL, (req, res)=>{
//     let {categoryId} = url.parse(req.url, true).query;
//     if(!categoryId){
//         res.json({
//             status: 1,
//             message: '缺少参数',
//             data: null
//         });
//         return;
//     }

//     JSDOM.fromURL('http://m.you.163.com/item/cateList?categoryId='+categoryId, {runScripts: 'dangerously'}).then(dom=>{
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: {
//                 categoryGroupList: dom.window.ftlData.categoryGroupList,
//                 currentCategory: dom.window.ftlData.currentCategory
//             }
//         })
//     })
// })

// // 分类商品列表
// app.get(api.CATEGOEY_LIST_GROUP_ITEM_URL, (req, res)=>{
//     let {categoryId, subCategoryId} = url.parse(req.url, true).query;
//     if(!categoryId || !subCategoryId){
//         res.json({
//             status: 1,
//             message: '缺少参数',
//             data: null
//         });
//         return;
//     }

//     JSDOM.fromURL('http://m.you.163.com/item/list?categoryId='+categoryId+'&subCategoryId='+subCategoryId, {runScripts: 'dangerously'}).then(dom=>{
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: dom.window.ftlData.categoryItems
//         })
//     })
// })

// // 识物tab数据
// app.get(api.TOPIC_FIND_TABS_URL, (req, res)=>{
//     axios.get('http://m.you.163.com/topic/v1/find/getTabs.json')
//     .then(response=>{
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: response.data.data
//         })
//     })
// })

// // 识物tab列表数据
// // 参数：tabId 默认值为9
// app.get(api.TOPIC_FIND_TAB_DATA_URL, (req, res)=>{
//     let tabId = url.parse(req.url, true).query.tabId || 9;
//     //推荐
//     if(tabId == 9){
//         axios.get('http://m.you.163.com/topic/v1/find/recManual.json')
//         .then(response=>{
//             let arr = response.data.data;
//             let newData = [];
//             arr.map(({topics})=>{
//                 newData = [...newData, ...topics];
//             })
//             res.json({
//                 status: 0,
//                 message: 'ok',
//                 data: {
//                     hasMore: false,
//                     result: newData
//                 }
//             })
//         })
//     }
//     //达人   上新   home
//     else if(tabId == 4 || tabId == 5 || tabId == 6){
//         let {page, size} = url.parse(req.url, true).query;
//         axios.get('http://m.you.163.com/topic/v1/find/getTabData.json', {
//             params: {
//                 page,
//                 size,
//                 tabId
//             }
//         }).then(response=>{
//             res.json({
//                 status: 0,
//                 message: 'ok',
//                 data: response.data.data
//             })
//         })
//     }
//     else{
//         res.json({
//             message: 'id错误',
//             status: 1,
//             data: null
//         })
//     }
// })

// // 识物tab晒单banner数据
// app.get(api.TOPIC_FIND_SHOW_BANNER_URL, (req, res)=>{
//     axios.get('https://m.you.163.com/topic/v1/look/getCollection.json?id=39')
//     .then(response=>{
//         res.json({
//             message: 'ok',
//             status: 0,
//             data: response.data.data
//         })
//     })
// })

// // 识物tab晒单列表数据
// app.get(api.TOPIC_FIND_SHOW_DATA_URL, (req, res)=>{
//     let {page, size, type} = url.parse(req.url, true).query;
//     console.log(page, size, type);
//     if( !page || !size || !type){
//         res.json({
//             message: '缺少参数',
//             status: 1,
//             data: null
//         })
//         return;
//     }
//     if( type != 1 && type != 2 && type != 3){
//         res.json({
//             message: 'type参数不正确',
//             status: 2,
//             data: null
//         })
//         return;
//     }
    
//     axios.get('https://m.you.163.com/topic/v1/look/getList.json', {
//         params: {
//             page,
//             size,
//             type
//         }
//     })
//     .then(response=>{
//         res.json({
//             message: 'ok',
//             status: 0,
//             data: response.data.data
//         })
//     })
// })


// // 热门搜索词汇
// app.get(api.HOT_SEARCH_WORDS_URL, (req, res)=>{
//     axios.get('http://m.you.163.com/xhr/search/init.json')
//     .then(response=>{
//         res.json({
//             status: 0,
//             message: 'ok',
//             data: response.data.data.hotKeywordVOList
//         })
//     })
    
// })




app.listen('9090', (error)=>{
    if(error){
        console.log('启动失败');
        console.log(error);
    }else{
        console.log('启动成功');
    }
});