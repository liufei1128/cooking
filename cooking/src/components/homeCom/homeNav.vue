<template>
    <nav class="nav">
           <ul class="nav_content clearFix" ref="ul">
               <li v-for="item in list" :key="item.id"  class="nav_item" ref="item">
                   {{item.name}}
               </li>
           </ul>
    </nav>
</template>

<script>
import {getHomeNav} from '../../server/homeService'
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        getHomeNav().then(data=>{
            // console.log(data);
            this.list = data;
            this.$nextTick(function(){
                // console.log(this.$refs.item);
                let width = 0;
                this.$refs.item.map(item=>{
                    console.log(item.offsetWidth);
                    width += item.offsetWidth;
                });
                this.$refs.ul.style.width = (width+this.list.length*42*2)/100+"rem";
            })
        });
        
    },
    mounted() {
        new BScroll('.nav',{
            scrollX: true,
            click: true
        })
    },
}
</script>

<style lang="scss" scoped>
.nav{
    background-color: brown;
    height: 0.76rem;
    padding:0.21rem 0;
    position: absolute;
    left: 0;
    top: 44px;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    .nav_content{
        font-size: 0;
        white-space: nowrap;
        overflow: hidden;
        .nav_item{
            display: inline;
            margin: 0 0.42rem;
            line-height: 0.34rem;
            font-size: 0.24rem;
            &.active{
                color: #b4282d;
                border-bottom: 1px solid #b4282d;
            }
        }
    }
}
</style>

