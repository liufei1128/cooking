<template>
    <nav class="nav">
           <ul class="nav_content clearFix" ref="ul">
               <li v-for="(item,index) in list" :key="item.id"  class="nav_item" ref="item" @click="action(index)" :class="{active:index==selectIndex}">
                   {{item.name}}
               </li>
           </ul>
    </nav>
</template>

<script>
import {getHomeNav} from '../../server/homeService'
import BScroll from 'better-scroll'
export default {
    props:["data"],
    data(){
        return {
            list:[],
            selectIndex:0
        }
    },
    methods: {
        action(index){
            // console.log(index);
            this.selectIndex = index;
            this.data(this.selectIndex);
        }
    },
    created(){
        getHomeNav().then(data=>{
            // console.log(data);
            this.list = [{name:"精选",id:-1},...data];
            this.$nextTick(function(){
                // console.log(this.$refs.item);
                let width = 0;
                this.$refs.item.map(item=>{
                    console.log(item.offsetWidth);
                    width += item.offsetWidth;
                });
                this.$refs.ul.style.width = (width+this.list.length*42*2+84)/100+"rem";
            })
        })
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
    height: 0.8rem;
    padding:0.21rem 0;
    position: absolute;
    left: 0;
    top: 44px;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    // margin-left: 0.32rem;
    .nav_content{
        font-size: 0;
        white-space: nowrap;
        overflow: hidden;
        .nav_item{
            display: inline;
            margin-right: 0.42rem;
            line-height: 0.34rem;
            font-size: 0.28rem;
            &.active{
                color: #b4282d;
                border-bottom: 1px solid #b4282d;
            }
        }
    }
}
</style>

