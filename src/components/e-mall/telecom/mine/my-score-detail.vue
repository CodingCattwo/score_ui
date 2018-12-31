<template>
<div class="tab-container" >
  <Tabs value="2" type="card">
    <TabPane label="我的积分" name="1" @on-click="routeTo">
      无用的页面
    </TabPane>
    <TabPane label="积分明细" name="2" @on-click="routeTo">
      
    </TabPane>
  </Tabs>
</div>
</template>
<script> 
export default {
  data () {
    return {

    }
  },
  methods: {
    routeTo (e) {
      if(e == 1) {
        this.$router.push({path:'/myScore'});
      }
      if(e == 2) {
        this.$router.push({path:'/myScoreDetail'});
    }
  }
  }
}
</script>
<style>
.tab-container {
  width: 850px;
}
</style>

