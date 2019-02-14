<template>
    <div class="home">
        <header class="header">
            <img src="/images/Page 1 Copy 2.png" alt="" class="logo">
            <div class="search">
                <i class="iconfont cook-sousuo"></i>
                <span>想吃点什么吗？</span>
            </div>
            <img src="/images/Group 2.png" alt="" class="message">
        </header>
        <home-header-nav :data="getIndex"></home-header-nav>
        <scroller :bottom="49" :top="84">
            <!-- <div class="focus">
                <van-swipe :autoplay="3000" indicator-color="white">
                    <van-swipe-item><img src="images/Rectangle 5.png" alt="" /></van-swipe-item>
                    <van-swipe-item><img src="images/Rectangle 6 Copy.png" alt="" /></van-swipe-item>
                    <van-swipe-item><img src="images/Rectangle 6.png" alt="" /></van-swipe-item>
                    <van-swipe-item><img src="images/味噌汤.png" alt="" /></van-swipe-item>
                </van-swipe>
            </div> -->
            <template v-if="isShow">
                 <selectionCom></selectionCom>
                <home-content></home-content>
            </template>
            <template v-else-if="isShow2"> 
                <div class="order">
                    <span>综合排序</span>
                    <span>筛选 <van-icon name="close" /></span>
                </div>
                <home-content></home-content>
            </template>
           
        </scroller>
    </div>
</template>

<script>
// import Vue from 'vue'
// import Icon from 'vant'
// Vue.use(Icon);
import homeHeaderNav from "../../components/homeCom/homeNav.vue"
import homeContent from "../../components/homeCom/homeContent.vue"
import selectionCom from "../../components/homeCom/selectionCom.vue"
import homeShopClass from "../../components/homeCom/homeShopClass.vue"
import {getHomeAction,getHomeGoods} from '../../server/homeService'
export default {
    data(){
        return {
           selectIndex:0,
           isShow:true,
           isShow2:false
        }
    },
    components:{
        homeHeaderNav,
        homeContent,
        selectionCom
    },
    created(){
    },
    methods:{
        getIndex(index){
            // console.log(index);
            this.selectIndex = index;
            if(index==0){
                this.isShow = true;
            }else{
                this.isShow = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    .logo{
        margin: 0 0.498rem 0 0.32rem;
    }
    .search{
        width: 5.12rem;
        height: 0.6rem;
        background: #EFEFEF ;
        border-radius: 0.6rem;
        position: relative;
        font-size: 0.24rem;
        i.cook-sousuo{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0.24rem;
        }
        span{
            line-height: 0.6rem;
            padding-left: 0.84rem;
            color :#999999;
        }
    }
    .message{
        margin: 0 0.32rem 0 0.46rem;
    }
}
.order{
    display: flex;
    align-items: center;
    height: 0.8rem;
    border-top: 0.06rem solid #F0F0F0;
    border-bottom: 0.06rem solid #F0F0F0;
    span{
        display:block;
        height: 100%;
        flex:1;
        font-size: 0.24rem;
        line-height: 0.8rem;
        text-align: center;
        // i{
        //     display: inline-block;
        //     width:16px;
        //     height: 16px;
        // }
    }
    span:nth-of-type(1){
        border-right: 0.06rem solid #F0F0F0;
        display: flex;
        justify-content: center;
        align-items: center;
        &:after{
            content: " ";
            display:block;
            height: 0;
            border: 0.12rem solid #222222;
            border-color: #222222 transparent transparent transparent;
            transform: translateY(50%);
            margin-left: 0.08rem;
        }
    }
}
</style>

