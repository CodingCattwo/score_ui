<template>
  <div>
    <Header class="header">
      <div class="box">
        <div class="nav">
          <ul class="location">
            <!-- <li>
              <img class="logo" src="/static/images/telecom/logo.png">
            </li> -->
            <li>
              <Icon type="android-volume-up" class="icon"></Icon>
              <span>您好，欢迎来到南航里程交易商城</span>
            </li>
          </ul>
          <ul class="detail">
            <li class="first">
              你好，请<router-link to="/login">登录 <Icon type="person"></Icon></router-link>
            </li>
            <li><router-link to="/">商城首页</router-link></li>
            <li><router-link>我的积分</router-link></li>
          </ul>
        </div>
      </div>
    </Header>
    <Content>
      <div class="logoContainer">
        <img class="logo" src="/static/images/airline/logo.png">
      </div>
      <div class="searchContainer">
        <Input class="search" v-model="searchData" size="large" placeholder="请输入搜索的内容" clearable>
          <Button slot="append" icon="ios-search" @click="search"></Button>
        </Input>
      </div>
      <Menu class="menu" mode="horizontal" theme="light" :active-name="setActive" @on-select="routeTo">
        <MenuItem name="home">
          <Icon type="ios-paper"></Icon>
          首页
        </MenuItem>
        <MenuItem name="exchange">
          <Icon type="ios-people"></Icon>
          里程互通
        </MenuItem>
        <MenuItem name="mine">
          <Icon type="settings"></Icon>
          我的里程
        </MenuItem>
      </Menu>
    
      <div class="layout-content">
          <div class="layout-content-main">
              <transition mode="out-in">
                  <!-- 跳转的页面区域 -->
                  <router-view></router-view>
              </transition>
          </div>
      </div>
    </Content>
    <Footer class="footer">
      <div>
        <Row type="flex" >
          <i-col span="6" offset="2">
            <p class="info"><Icon class="icon" type="ios-box" size="30"></Icon> 海量商场产品</p>
          </i-col>
          <i-col span="6" offset="1">
            <p class="info"><Icon class="icon" type="loop" size="30"></Icon> 积分兑换互通</p>
          </i-col>
          <i-col span="6" offset="1">
            <p class="info"><Icon class="icon" type="happy-outline"  size="30"></Icon> 品质保证</p>
          </i-col>
        </Row>
      </div>
      <div class="line"></div>
      <div style="margin-bottom: 10px;">增值南航业务经营许可证A2.B1.B2-20090001 |   商户合作邮箱  |  南航统一门户 |  京ICP备09031924号</div>
      <div>版权所有(C)中国南方航空公司</div>
    </Footer>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data () {
    return {
      searchData: '',
    }
  },
  methods: {
    search () {
      // this.$router.push({path: '/goodsList', query: { sreachData: this.sreachData }});
      this.$router.push({path: '/goodsList'});
    },
    setActive() {
      return this.$route.path.replace('/','');
    },
    routeTo (e) {
        console.log(e);
        this.$router.push(e);
    },
  }
};
</script>

<style scoped>

.header {
  height: 35px;
}
.footer {
  text-align: center;
}
.footer .line {
  background: #999999;
  height: 1px;
  z-index: 901;
  margin-top: 10px;
  margin-bottom: 15px;
  opacity:0.2; 
}
.info {
  font-size: 24px;
  font-weight: 500;
}

.logoContainer {
  position: absolute;
  padding-left: 5px;
  z-index: 1000;
}
.logo {
  height: 60px;
}
.menu {
  padding-left: 200px;
  position: relative;
}
.searchContainer {
  position: absolute;
  padding-top: 10px;
  padding-left: 70%;
  z-index: 1000;
  width: 250px;
  height: 0px;
}
.search {
  width: 220px;
}


.layout-content {
    min-height: 600px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}
.layout-content-main {
    padding: 20px 40px;
    margin: 0 auto;
    width: 75%;
}

.box {
  width: 100%;
  height: 35px;
  background-color: #495060;
}
.nav {
  margin: 0% auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.nav ul {
  list-style: none;
}
.nav li {
  float: left;
  font-size: 14px;
  line-height: 35px;
  margin-right: 15px;
  font-weight: bold;
}
.nav a {
  text-decoration: none;
  color: #999999;
  padding-left: 15px;
  border-left: 1px solid #ccc;
  cursor: pointer;
}
.location a {
  border-left: none;
}
.nav a:hover {
  color: #d9534f;
}
.location {
  color: #999999;
}
.icon {
  color: #999999;
}
.first {
  color: #999999;
}

.search-nav{
  width: 100%;
  height: 64px;
  border-bottom: 2px solid #B1191A;
}
.search-nav-container{
  width: 80%;
  min-width: 1000px;
  height: 64px;
  margin: 0px auto;
}
.search-nav-container-90{
  width: 90%;
}
.search-nav-container ul{
  margin: 0px;
  padding-left: 0px;
  list-style: none;
}
.search-nav-container li{
  cursor: pointer;
  margin-left: 30px;
  line-height: 64px;
  color: #C81623;
  font-size: 18px;
  /*font-weight: bold;*/
  float: left;
}
.search-nav-container a{
  color: #C81623;
  text-decoration: none;
}
.search-nav-container li:first-child{
  padding: 0px 38px;
  background:#B1191A;
  margin: 0px;
  color: #fff;
}


</style>
