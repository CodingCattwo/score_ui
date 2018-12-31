<template>
  <div>
    <div class="goods-box">
      <div class="goods-list-box">
        <div class="goods-list-tool">
          <Row type="flex" style="padding-top: 10px;">
            <i-col span="2" justify="start">
              <p style="font-size: 20px;  font-weight: 700">{{ title }}</p>
            </i-col>
            <i-col span="4" justify="start"  style="padding-top: 7px; opacity: 0.5;">
              <p> {{ subtitle }}</p>
            </i-col>
            <i-col span="2" justify="end" offset="16" align="right"  style="padding-top: 7px;">
              <router-link to="/goodsList">查看更多<Icon type="chevron-r  ight"></Icon></router-link>
            </i-col>
          </Row>
        </div>
        <div class="goods-list">
          <div class="goods-show-info" v-for="(item, index) in goodsList" :key="index">
            <div class="goods-show-img">
              <router-link to="/goodsDetail"><img :src="item.img"/></router-link>
            </div>
            <div class="goods-show-price">
              <span>
                <Icon type="social-yen text-danger"></Icon>
                <span class="seckill-price text-danger">{{item.price}}</span>
              </span>
            </div>
            <div class="goods-show-detail">
              <span>{{item.intro}}</span>
            </div>
            <div class="goods-show-num">
              已有<span>{{item.remarks}}</span>人评价
            </div>
            <div class="goods-show-seller">
              <span>{{item.shopName}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomepageGoods',
  data () {
    return {
      searchItem: '电信产品',
      isAction: [ true, false, false ],
      icon: [ 'arrow-up-a', 'arrow-down-a', 'arrow-down-a' ],
      goodsList: [
        {
          img: 'static/images/telecom/goodsList/item-show-1.jpg',
          price: 36.60,
          intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬壳男女磨砂防摔 火影红(苹',
          remarks: 6160,
          shopName: '元亨利配件专营店',
          sale: 9900
        },
        {
          img: 'static/images/telecom/goodsList/item-show-2.jpg',
          price: 28.00,
          intro: '蒙奇奇 苹果6s手机壳磨砂防摔保护套 适用于iphone6/6s/6sPlus/6plus 6/6s 4.7英',
          remarks: 3000,
          shopName: 'monqiqi旗舰店',
          sale: 9600
        },
        {
          img: 'static/images/telecom/goodsList/item-show-3.jpg',
          price: 15.00,
          intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
          remarks: 2800,
          shopName: 'BIAZE官方旗舰店',
          sale: 8900
        },
        {
          img: 'static/images/telecom/goodsList/item-show-4.jpg',
          price: 29.90,
          intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
          remarks: 9000,
          shopName: '歌乐力手配专营店',
          sale: 8600
        }
      ]
      
    }
  },
  props: [
    'title',
    'subtitle'
  ],
  methods: {
    // routeTo () {
    //   this.$router.push({
    //       path: '/goodsDetail',
    //       query: {
    //         id: index,
    //         goodsName: this.item[index].shopName
    //       }
    //   })
    // }
  }
}
</script>
<style scoped>
.container {
  margin: 15px auto;
  width: 93%;
  min-width: 1000px;
}
.text-danger {
  color: #A94442;
}
.seckill-price{
  margin-right: 5px;
  font-size: 25px;
  font-weight: bold;
}

/* ---------------商品栏开始------------------- */
.goods-list-box {
  margin-left: 15px;
  width: 1300px;
  background: #F1F1F1;
  margin-left: 30px;
}
.goods-list-tool{
  width: '100% - 40px';
  height: 38px;
  background-color: #F1F1F1;
  margin-top: 10px;
}
.goods-list-tool ul{
  padding-left: 15px;
  list-style: none;
}
.goods-list-tool li{
  cursor: pointer;
  float: left;
}
.goods-list-tool span{
  padding: 5px 8px;
  border: 1px solid #ccc;
  border-left: none;
  line-height: 36px;
  background-color: #fff;
}
.goods-list-tool span:hover{
  border: 1px solid #E4393C;
}
.goods-list-tool i:hover{
  color: #E4393C;
}
.goods-list-tool-active {
  color: #fff;
  border-left: 1px solid #ccc;
  background-color: #E4393C !important;
}

.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goods-show-info{
  width: 240px;
  padding: 10px;
  margin: 15px 20px;
  cursor: pointer;
}
.goods-show-info:hover{
  border: 1px solid #ccc;
  box-shadow: 0px 0px 15px #ccc;
}
.goods-show-price{
  margin-top: 6px;
}
.goods-show-detail{
  font-size: 12px;
  margin: 6px 0px;
}
.goods-show-num{
  font-size: 12px;
  margin-bottom: 6px;
  color: #009688;
}
.goods-show-num span{
  color: #005AA0;
  font-weight: bold;
}
.goods-show-seller{
  font-size: 12px;
  color:#E4393C;
}
.goods-page {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
/* ---------------商品栏结束------------------- */

</style>
