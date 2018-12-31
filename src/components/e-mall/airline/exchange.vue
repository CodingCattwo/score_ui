<template>
  <div>
    <ExchangeNav></ExchangeNav>
    <div class="goods-list">
      <div class="goods-show-info" v-for="(item, index) in exchangeList" :key="index">
        <router-link to="/exchangeDetail"><img class="goods-show-img" :src="item"/></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import ExchangeNav from '@/components/e-mall/telecom/nav/exchange-nav';

export default {
  name: 'ExchangePage',
  data () {
    return {
      exchangeList: [
        '/static/images/telecom/card-1.png',
        '/static/images/telecom/card-2.png',
        '/static/images/telecom/card-3.png',
        '/static/images/telecom/card-4.png',
        '/static/images/telecom/card-1.png',
        '/static/images/telecom/card-2.png',
        '/static/images/telecom/card-3.png',
        '/static/images/telecom/card-4.png',
      ]
    }
  },
  components: {
    ExchangeNav
  },
  methods: {

  }
};
</script>
<style scoped>
.goods-list {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goods-show-info{
  width: 25%;
  padding: 15px 15px 15px 35px;
  margin: 15px 0px;
  border: 1px solid #fff;
  cursor: pointer;
}
.goods-show-info:hover{
  border: 1px solid #ccc;
  box-shadow: 0px 0px 15px #ccc;
}
.goods-show-img {
  width: 240px;
  height: 260px;
}
</style>
