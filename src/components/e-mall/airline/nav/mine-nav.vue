<template>
  <div class="container">
    <div class="bread-crumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">
          <Icon type="ios-home-outline"></Icon> 首页
        </BreadcrumbItem>
        <BreadcrumbItem to="/mine">
          <Icon type="person"></Icon> {{searchItem}}
        </BreadcrumbItem>
      </Breadcrumb>
    </div>      
  </div>
</template>
<script>
export default {
  name: 'MineNav',
  data () {
    return {
      searchItem: '我的积分',
      
    }
  }
}
</script>
<style scoped>

</style>
