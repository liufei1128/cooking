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
        {title:'首页',iconName:'cook-shouyedianpujishishangcheng', path:'/home'},
        {title:'分类',iconName:'cook-fenlei', path:'/category'},
        {title:'优惠',iconName:'cook-weibiaoti-', path:'/discount'},
        {title:'购物车',iconName:'cook-icon-', path:'/cart'},
        {title:'我的',iconName:'cook-wode', path:'/mine'},
      ]
    }
  },
}
</script>

<style>

</style>
