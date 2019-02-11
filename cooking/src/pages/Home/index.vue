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
        <home-header-nav></home-header-nav>
    </div>
</template>

<script>
import homeHeaderNav from "../../components/homeCom/homeNav.vue"
export default {
    components:{
        homeHeaderNav
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
</style>

