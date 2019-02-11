<template>
    <nav class="nav-tab border-top">
            <ul class="tab">
                <li v-for="item in info" :key="item.index">
                    <router-link :to="item.path">
                            <!-- <van-icon :name="item.iconName" /> -->
                            <i class="iconfont" :class="item.iconName"></i>
                            <span>{{item.title}}</span>
                    </router-link> 
                </li>
            </ul>
    </nav>
</template>

<script>

export default {
    name:"tab-bar",
    props:["info"]
}
</script>
<style lang="scss" scoped>
.nav-tab{
    width: 100%;
    height: 49px;
    position: absolute;
    bottom: 0;
    left: 0;
   ul{
       width: 100%;
       height: 100%;
       display: flex;
       li{
           flex: 1;
           
           a{
               display: flex;
               flex-direction: column;
               justify-content: space-around;
               align-items: center;
               color: #222222 ;
               height: 100%;
                span{
                    font-size: 0.2rem;
                    text-align:center;
                    line-height: 0.24rem;
                }
                &.router-link-active{
                    color: #EFB31F; 
                }
           }
          
       }
   }
}
</style>

