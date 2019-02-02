<template>
  <div id="app">
    <router-view></router-view>
      <tab-bar :info="tabList"></tab-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList:[
        {title:'首页',iconName:'wap-home', path:'/home'},
        {title:'分类',iconName:'qr', path:'/category'},
        {title:'优惠',iconName:'coupon-o', path:'/discount'},
        {title:'购物车',iconName:'shopping-cart-o', path:'/cart'},
        {title:'我的',iconName:'manager-o', path:'/mine'},
      ]
    }
  },
}
</script>

<style>

</style>
