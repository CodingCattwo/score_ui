<template>
  <div class="container">
    <div class="bread-crumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">
          <Icon type="ios-home-outline"></Icon> 首页
        </BreadcrumbItem>
        <BreadcrumbItem to="/goodsDetail">
          <Icon type="bag"></Icon> {{searchItem}}
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
    <ShowGoods></ShowGoods>
    
  </div>
</template>
<script>
import ShowGoods from '@/components/e-mall/telecom/nav/show-goods';

export default {
  name: 'GoodsDetail',
  data () {
    return {
      searchItem: '电信产品'
    }
  },
  components: {ShowGoods}
}
</script>
<style scoped>

</style>
