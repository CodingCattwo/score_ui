<template>
  <div>
    <div class="mine-container">
      <Menu class="menu" theme="light" active-name="4" @on-select="routeTo">
        <div class="mine-info">
          <div class="mine-icon"><Icon type="person" size="80"></Icon></div>
          <div class="mine">
            <div class="mine-name"> {{ mineInfo.name }}</div>
            <div class="mine-account"> {{ mineInfo.account }}</div>
          </div>
        </div>
        <MenuItem name="1">
          消息通知
        </MenuItem>
        <MenuItem name="2">
          个人信息
        </MenuItem>
        <MenuItem name="3">
          地址管理
        </MenuItem>
        <MenuItem name="4">
          我的积分
        </MenuItem>
        <MenuItem name="5">
          我的兑换
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
    </div>
  </div>
</template>
<script>
export default {
  name: 'MineDetail',
  data () {
    return {
      mineInfo: {
        name: '李时珍的皮',
        account: '17602039018'
      }
    }
  },
  methods: {
    routeTo (e) {
      if(e == 1|2|3|5) {
        this.$router.push({path:'/myScore'});
      }
      if(e == 4) {
        this.$router.push({path:'/myScore'});
      }
      
    },
  }
}
</script>
<style scoped>
.mine-info {
  height: 80px;
  width: 220px;
  display: flex;
  padding: 14px 14px;
  margin: 10px;
}
.mine {
  margin: 10px 0 0 10px;
  text-align: center;

}
.mine-name {
  margin-top: 10px;
  font-weight: 600;
}
.mine-account {
  width: 95px;
  margin-top: 5px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(227, 104, 68, 1);
  border-radius: 21px;
  font-weight: 404;
  font-style: normal;
  font-size: 12px;
  color: #E36844;
  text-align: center;
}


.menu {
  width: 220px;
}
.mine-container {
  display: flex;
  margin-top: 20px;
}
.layout-content {
    min-height: 600px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    display: flex;
}
.layout-content-main {
    padding: 10px 40px;
    width: 850px;
}

</style>
