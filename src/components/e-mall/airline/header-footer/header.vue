<template>
  <div class="box">
    <div class="nav">
      <ul class="location">
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
</template>

<script>
export default {
  name: 'MHeader',
  data () {
    return {
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 35px;
  background-color: #e3e4e5;
}
.nav {
  margin: 0% auto;
  width: 90%;
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
.first a:first-child {
  padding-left: 3px;
  border-left: none;
}
.person-icon {
  color: #d9534f;
  background-color:  #f0cdb2;
}
.username {
  color: #999999;
}
.username-p {
  cursor: pointer;
}
.my-page {
  padding: 3px 5px;
  width: 180px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.my-page a {
  margin: 0px;
  padding: 0px;
  border: none;
}
.my-info {
  padding: 5px;
  width: 50%;
  height: 100%;
  text-align: center;
  cursor: pointer;
}
.my-info:hover {
  box-shadow: 0px 0px 5px #ccc;
}
.my-info i {
  font-size: 28px;
}
.my-info p {
  font-size: 12px;
}
</style>
