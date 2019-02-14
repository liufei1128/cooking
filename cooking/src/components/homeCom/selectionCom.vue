<template>
    <div>
         <div class="banner">
                <img src="images/Rectangle 5.png" alt="">
            </div>
            <div class="huodong">
                <ul>
                    <li v-for="item in huodongList" :key="item.src" class="huodong-item">
                        <img :src="item.src" alt="">
                        <span>{{item.title}}</span>
                    </li>
                </ul>
            </div>
            <div class="message">
                <p>公告：欣和自营电商平台，品质保障</p>
            </div>
            <div class="goods">
                <div class="title">
                    <p>{{goods.title}}</p>
                </div>
                <div class="content">
                    <img v-for="item in goods.data" :key="item.id" :src="item.src">
                </div>
            </div>
    </div>
</template>

<script>
import {getHomeAction,getHomeGoods} from '../../server/homeService'
export default {
    data(){
        return{
            huodongList:[],
            goods:{}
        }     
    },
    created(){
        getHomeAction().then(data=>{
            // console.log(data);
            this.huodongList = data;
        });
        // 获取美烹好食
        getHomeGoods().then(data=>{
        // console.log(data[0]);
           this.goods = data[0];
        });
    }
}
</script>

<style lang="scss" scoped>
.banner{
    img{
      display: block;
      border: 0;
      width: 100%;
      height: 4.8rem;
    }
}
.huodong{
    ul{
        display: flex;
        height: 1.4rem;
        .huodong-item{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                width: 0.42rem;
                height: 0.37rem;
            }
            span{
                font-size: 0.24rem;
                line-height: 0.28rem;
                margin-top: 0.38rem;
                color: #101010;
            }
        }
    }
}
.message{
   
    p{ 
        height: 1rem;
        border-top: 0.1rem solid #ECECEC;
        border-bottom: 0.1rem solid #ECECEC;
        font-size: 0.24rem;
        line-height: 0.28rem;
        padding-left: 0.32rem;
        line-height: 1rem;
    }
}
.goods{
    .title{
        height: 1rem;
        text-align: center;
        font-size: 0.28rem;
        line-height: 1rem;
    }
    .content{
        display: flex;
        justify-content: space-between;
        padding: 0 0.32rem;
        img{
            width: 3.32rem;
            height: 2rem;
        }
    }
}
</style>

