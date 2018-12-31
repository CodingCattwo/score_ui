<template>
  <div>
    <MineNav></MineNav>
    <MineDetail></MineDetail>
  </div>
</template>
<script>
import MineNav from '@/components/e-mall/telecom/nav/mine-nav';
import MineDetail from '@/components/e-mall/telecom/page/mine-detail';

export default {
  name: 'MinePage',
  components: {
    MineNav,
    MineDetail
  },
  methods: {

  }
};
</script>