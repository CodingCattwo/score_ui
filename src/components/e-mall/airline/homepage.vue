<template>
  <div>
    <div class="nav">
      <HomeNav></HomeNav>
    </div>
    <div class="goods">
      <HomepageGoods :title='titles[0].title' :subtitle='titles[0].subtitle'></HomepageGoods>
      <HomepageGoods :title='titles[1].title' :subtitle='titles[1].subtitle'></HomepageGoods>
      <HomepageGoods :title='titles[2].title' :subtitle='titles[2].subtitle'></HomepageGoods>
    </div>
    
  </div>
</template>
<script>
import HomeNav from '@/components/e-mall/telecom/nav/home-nav';
import HomepageGoods from '@/components/e-mall/telecom/page/homepage-goods';

export default {
  name: 'HomePage',
  data () {
    return {
      titles: [
        {
          title: '电信产品',
          subtitle: '天翼阅读/天翼视讯/天翼音乐'
        },
        {
          title: '餐厨',
          subtitle: '餐具/茶具'
        },
        {
          title: '电器',
          subtitle: '数码产品'
        },
      ]
    }
  },
  components: {
    HomeNav,
    HomepageGoods
  },
  methods: {

  }
};
</script>
<style scoped>
.nav {
  display: block;
  width: 100%;
  margin-left: 25px;
}
.goods {
  display: block;
}
</style>
