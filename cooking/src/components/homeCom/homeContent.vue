<template>
    <div class="shop_content">
                <div class="shop_list" v-for="item in shoppingList" :key="item.id">
                    <div class="title">
                        <p>{{item.title}}</p>
                    </div>
                    <div class="shop_box">
                        <div class="shop_info" v-for="list in item.data" :key="list.title">
                            <div class="img">
                                <img :src="list.src" alt="" >
                            </div>
                            <p class="img_title">{{list.title}}</p>
                            <p class="number">{{list.number}}/袋</p>
                            <p class="price"><span>￥{{list.new_price}}</span><span>￥{{list.old_price}}</span></p>
                        </div>
                    </div>
                </div>
    </div>
</template>

<script>
import {getHomeShoppingList} from '../../server/homeService'
export default {
    data(){
        return {
             shoppingList:[]
        }
    },
    created() {
          getHomeShoppingList().then(data=>{
            console.log(data);
            this.shoppingList = data;
        });
    },
}
</script>

<style lang="scss" scoped>
.shop_content{
    .shop_list{
        .title{
            // height: 1.5rem;
            text-align: center;
            p{
                font-size: 0.28rem;
                color: #222222;
                line-height: 0.34rem;
                margin-top: 0.6rem;
                margin-bottom: 0.56rem;
                display: flex;
                justify-content: center;
                align-items: center;
                &:after{
                    content: " ";
                    display:block;
                    height:0.16rem;
                    width: 0.16rem;
                    border:1px solid #000;
                    border-left: 0;
                    border-bottom: 0;
                    transform: rotate(45deg);
                    margin-left: 0.08rem;
                }
            }
        }
        .shop_box{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            font-size: 0.28rem;
            padding: 0 0.32rem;
            .shop_info{
                margin-bottom: 0.38rem;
            }
            .img{
                img{
                    display: block;
                    border: 0;
                    width: 3.28rem;
                    height: 3.5rem;
                }
            }
            .img_title{
               color: #222222;
               line-height: 0.34rem;
               margin-top: 0.1rem;
            }
            .number{
                font-size: 0.24rem;
                color: #9E9E9E;
                line-height: 0.28rem;
                margin:0.14rem 0  0.08rem 0;
            }
            .price{
                span:nth-of-type(1){
                    color: #BE141C ;
                }
                span:nth-of-type(2){
                    color: #9E9E9E ;
                    font-size: 0.24rem;
                    text-decoration: line-through;
                    margin-left: 0.14rem;
                }
                
            }
        }
    }
}
</style>
