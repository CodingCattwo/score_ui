<template>
  <div class="container">
    <p><Icon type="checkmark-circled" size="120" color="#0FCE96"></Icon></p>
    <p class="title">商品兑换成功</p>
    <p class="subtitle">我们将尽快为您发货，收货期间请保持手机畅通</p>
    <p style=" margin-top: 10px; font-size: 12px;">
      <span style="backgroud:white; color:#666;">积分已扣减成功：</span>
      <span style="color:red;">264积分</span>
      </p>
    <div style=" margin-top: 30px;">
      <i-button @click="routeToHome" type="success" size="large" class="btn">进入商城首页</i-button>
      <i-button @click="routeToMine" type="ghost" size="large" class="btn">查看积分</i-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Pay',
  methods: {
    routeToHome () {
      this.$router.push({path: '/home'});
    },
    routeToMine () {
      this.$router.push({path: '/mine'});
    }
  }
}
</script>
<style scoped>
.container {
  text-align: center;
  margin:0 auto;
  display: block;
  padding-top: 80px;
  margin-bottom: 40px;
}
.title {
  font-size: 24px;
  font-weight: 410;
  padding-top: 10px;
}
.subtitle {
  font-size: 16px;
  font-weight: 400;
  padding-top: 10px;
}
.btn {
  margin-right: 10px;
  padding: 10px 20px 10px 20px;
}

</style>
