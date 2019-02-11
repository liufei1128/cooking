<template>
<div class="scroller-wrap" ref="scroll"
    :style="wrapStyle">
    <div class="scroller-content">
        <slot/>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'scroller',
    props: {
        width: Number,
        height: Number,
        top: Number,
        bottom: Number
    },
    computed: {
        wrapStyle(){
            //定位的滚动视图
            if(this.top && this.bottom){
                return {
                    position: 'absolute',
                    top: this.top+'px',
                    bottom: this.bottom + 'px',
                    width: '100%',
                    left: 0
                }
            }else{
                //普通调用滚动视图
                return {
                    width: this.width+'rem', 
                    height: this.height+'rem'
                }
            }
        }
    },
    mounted(){
        const scroll = new BScroll(this.$refs.scroll);
    }
}
</script>

<style lang="scss" scoped>
.scroller-wrap{
    overflow: hidden;
}
</style>

