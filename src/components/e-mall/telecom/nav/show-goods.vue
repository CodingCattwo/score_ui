<template>
  <div class="container">
    <div>
      <div class="item-detail-show">
        <div class="item-detail-left">
          <div class="item-detail-big-img">
            <img :src="goodsInfo.goodsImg[imgIndex]" alt="">
          </div>
          <div class="item-detail-img-row">
            <div class="item-detail-img-small" v-for="(item, index) in goodsInfo.goodsImg" :key="index" @mouseover="showBigImg(index)">
              <img :src="item" alt="">
            </div>
          </div>
        </div>
        <div class="item-detail-right">
          <div class="item-detail-title">
            <p>
              <span class="item-detail-express">电信产品</span> {{goodsInfo.title}}</p>
          </div>
          <div class="item-detail-tag">
            <p>
              <span v-for="(item,index) in goodsInfo.tags" :key="index">{{item}}</span>
            </p>
          </div>
          <div class="item-detail-price-row">
            <div class="item-price-left">
              <div class="item-price-row">
                <p>
                  <span class="item-price-title">价格：</span>
                  <span class="item-price">￥{{price.toFixed(2)}}积分</span>
                </p>
              </div>
              <div class="item-price-row">
                <p>
                  <span class="item-price-title">优 惠 价</span>
                  <span class="item-price-full-cut" v-for="(item,index) in goodsInfo.discount" :key="index">{{item}}</span>
                </p>
              </div>
              <div class="item-price-row">
                <p>
                  <span class="item-price-title">促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                  <span class="item-price-full-cut" v-for="(item,index) in goodsInfo.promotion" :key="index">{{item}}</span>
                </p>
              </div>
              <div class="item-price-row">
                <p>
                  <span class="item-price-title">商品详情：</span>
                  <div style="padding: 5px 10px; height: 120px;">
                  <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor 
                    sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. 
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, 
                    sed rhoncus sapien nunc eget.</p>
                  </div>
                </p>
              </div>
            </div>
            <div class="item-price-right">
              <div class="item-remarks-sum">
                <p>累计评价</p>
                <p>
                  <span class="item-remarks-num">{{goodsInfo.remarksNum}} 条</span>
                </p>
              </div>
            </div>
          </div>
          <div class="add-buy-car-box">
            <div class="add-buy-car">
              <InputNumber :min="1" v-model="count" size="large"></InputNumber>
              <Button @click="routeTo" type="error" size="large">立即兑换</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item-intro-recommend">
      <div class="item-recommend-title">
        <p>同类推荐</p>
      </div>
      <div class="item-intro-recommend-column">
        <div class="item-recommend-column" v-for="(item, index) in goodsInfo.hot" :key="index">
          <div class="item-recommend-img">
            <img :src="item.img" alt="">
          </div>
          <div class="item-recommend-intro">
            <span>
              <span class="item-recommend-top-num">{{index + 1}}</span> 热销{{item.sale}}件</span>
            <span class="item-recommend-price">￥{{item.price.toFixed(2)}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShowGoods',
  data () {
    return {
      searchItem: '电信产品',
      price: 264,
      count: 1,
      selectBoxIndex: 0,
      imgIndex: 0,
      goodsInfo: {
        goodsImg: [
          'static/images/telecom/goodsDetail/item-detail-1.jpg',
          'static/images/telecom/goodsDetail/item-detail-2.jpg',
          'static/images/telecom/goodsDetail/item-detail-3.jpg',
          'static/images/telecom/goodsDetail/item-detail-4.jpg'
        ],
        title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳',
        tags: ['商家', '广州瑞达广场有限公司'],
        discount: ['满148减10', '满218减20', '满288减30'],
        promotion: ['跨店满减', '多买优惠'],
        remarksNum: 6000,
        hot: [
            {
              img: 'static/images/telecom/goodsDetail/hot/1.jpg',
              price: 28.0,
              sale: 165076
            },
            {
              img: 'static/images/telecom/goodsDetail/hot/2.jpg',
              price: 36.0,
              sale: 135078
            },
            {
              img: 'static/images/telecom/goodsDetail/hot/3.jpg',
              price: 38.0,
              sale: 105073
            },
            {
              img: 'static/images/telecom/goodsDetail/hot/4.jpg',
              price: 39.0,
              sale: 95079
            },
            {
              img: 'static/images/telecom/goodsDetail/hot/5.jpg',
              price: 25.0,
              sale: 5077
            },
            {
              img: 'static/images/telecom/goodsDetail/hot/6.jpg',
              price: 20.0,
              sale: 3077
            }
          ],
      }
    }
  },
  methods: {
    routeTo () {
      this.$router.push({path: '/order'});
    }
  }
}
</script>
<style scoped>
.text {
  overflow:hidden; /*禁止文本溢出显示,为text-overflow作准备*/
  text-overflow:ellipsis;/*兼容 ie Safari (Webkit)*/
}
/******************商品图片及购买详情开始******************/
.item-detail-show {
  width: 80%;
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.item-detail-left {
  width: 350px;
  margin-right: 30px;
}
.item-detail-big-img {
  width: 350px;
  height: 350px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-big-img img {
  width: 100%;
}
.item-detail-img-row {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item-detail-img-small {
  width: 68px;
  height: 68px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-img-small img {
  width: 100%;
}
/*商品选购详情*/
.item-detail-right {
  display: flex;
  flex-direction: column;
}
.item-detail-title p {
  color: #666;
  font-size: 20px;
}
.item-detail-express {
  font-size: 14px;
  padding: 2px 3px;
  border-radius: 3px;
  background-color: #666;
  color: #fff;
}
/*商品标签*/
.item-detail-tag {
  font-size: 12px;
  color: #666;
}
/*价格详情等*/
.item-detail-price-row {
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f3f3f3;
}
.item-price-left {
  display: flex;
  flex-direction: column;
}
.item-price-title {
  color: #999999;
  font-size: 14px;
  margin-right: 15px;
}
.item-price-row {
  margin: 5px 0px;
}
.item-price {
  color: #e4393c;
  font-size: 23px;
  cursor: pointer;
}
.item-price-full-cut {
  margin-right: 5px;
  padding: 3px;
  color: #666;
  font-size: 12px;
  background-color: #ffdedf;
  border: 1px dotted #666;
  cursor: pointer;
}
.item-remarks-sum {
  padding-left: 8px;
  border-left: 1px solid #ccc;
}
.item-remarks-sum p {
  color: #999999;
  font-size: 12px;
  line-height: 10px;
  text-align: center;
}
.item-remarks-num {
  line-height: 18px;
  color: #005eb7;
}
.item-select {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.item-select-title {
  color: #999999;
  font-size: 14px;
  margin-right: 15px;
}
.item-select-column {
  display: flex;
  flex-direction: column;
}
.item-select-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
}
.item-select-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.item-select-img {
  width: 36px;
}
.item-select-box {
  padding: 5px;
  margin-right: 8px;
  background-color: #f7f7f7;
  border: 0.5px solid #ccc;
  cursor: pointer;
}
.item-select-box:hover {
  border: 0.5px solid #e3393c;
}
.item-select-box-active {
  border: 0.5px solid #e3393c;
}
.item-select-img img {
  width: 100%;
}
.item-select-intro p {
  margin: 0px;
  padding: 5px;
}
.item-select-class {
  padding: 5px;
  margin-right: 8px;
  background-color: #f7f7f7;
  border: 0.5px solid #ccc;
  cursor: pointer;
}
.item-select-class:hover {
  border: 0.5px solid #e3393c;
}
.add-buy-car-box {
  width: 100%;
  margin-top: 15px;
  border-top: 1px dotted #ccc;
}
.add-buy-car {
  margin-top: 15px;
}
/******************商品图片及购买详情结束******************/
.item-intro-recommend{
  width: 1000px;
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-top: 50px;
}
.item-intro-recommend-column{
  display: flex;
  flex-direction: row;
  box-shadow: 0px 0px 5px #999;
}
.item-recommend-title{
  width: 100%;
  height: 38px;
  font-size: 16px;
  line-height: 38px;
  color: #fff;
  background-color: #e4393c;
  box-shadow: 0px 0px 5px #e4393c;
  text-align: center;
}
.item-recommend-column{
  margin-top: 15px;
}
.item-recommend-intro{
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
  cursor: pointer;
}
.item-recommend-img{
  width: 80%;
  margin: 0px auto;
  cursor: pointer;
}
.item-recommend-img img{
  width: 100%;
}
.item-recommend-top-num{
  color: #fff;
  margin: 0px 2px;
  padding: 1px 5px;
  border-radius: 12px;
  background-color: #e4393c;
}
.item-recommend-price{
  color: #999;
  font-weight: bolder;
}
</style>
