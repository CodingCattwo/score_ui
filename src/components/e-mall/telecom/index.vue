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
              <span>您好，欢迎来到中国电信积分交易商城</span>
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
        <img class="logo" src="/static/images/telecom/logo.png">
      </div>
      <Menu class="menu" mode="horizontal" :theme="light" :active-name="setActive" @on-select="routeTo">
        <MenuItem name="home">
          <Icon type="ios-paper"></Icon>
          首页
        </MenuItem>
        <MenuItem name="exchange">
          <Icon type="ios-people"></Icon>
          积分互通
        </MenuItem>
        <MenuItem name="mine">
          <Icon type="settings"></Icon>
          我的积分
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
    <Footer class="footer">电信footer</Footer>
  </div>
</template>

<script>

export default {
  name: 'GoodsListNav',
  methods: {
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

.layout-content {
    min-height: 600px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
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
  padding: 0 200px;
  position: relative;
}

.layout-content-main {
    padding: 20px 40px;
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
