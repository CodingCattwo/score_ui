<template>
<div>
  <div v-show="isSendPage" class="sendPage">
    <Layout>
      <Header>
        <div class="header-title">
          <h1>赠送积分</h1>
        </div>
      </Header>
      <Content class="sendPageContent">
        <div class="sendPage-card-header" style=" margin-top: 5px;">
          <h2 style="display: inline-block;">赠送用户：</h2>
          <i-input class="input-m" v-model="exchangeAccount.recipient"></i-input>
        </div>
        <div class="sendPage-card-header" style=" margin-top: 5px;">
          <h2 v-model="scoreAmount" style="display: inline-block;">赠送积分：</h2>
          <i-input class="input-m" v-model="exchangeAccount.sendScore">
            <span  slot="append">积分</span>
          </i-input>
        </div>
        <Row class="footer" type="flex" style="margin-left: 32%; margin-top: 20px;">
          <div class="btn">
            <i-button type="success"  long size="large" @click.native="handleSend">   确定   </i-button>
          </div>
          <div class="btn">
            <i-button type="default" long size="large" @click.native="handleCloseSendPage" style="margin-left: 15px">   取消   </i-button>
          </div>
        </Row>
      </Content>
      
    </Layout>
    <div class="line"></div>
  </div>
  <div :class="isSendPage ? 'isShowSendPage' : 'noSendPag'" >
    <div class="tab-container">
      <Tabs value="1" type="card">
        <TabPane label="我的积分" name="1" @on-click="routeTo">
          <Row type="flex">
            <i-col span="8">
              <div class="score-card">
                <p class="card-title">当前积分数</p>
                <img class="card-img" :src="scoreImg">
                <p class="score-amount">{{ scoreNow}}</p>
                <i-button class="card-btn" @click="handleShowSendPage" type="success">赠送积分</i-button>
              </div>
            </i-col>
            <i-col span="14" class="score-card">
              <Row type="flex" style="margin-top: 50px;">
                <i-col span="6" offset="2">
                  <p class="card-title">累计获得</p>
                  <p class="score-amount">{{ scoreIn}}</p>
                </i-col>
                <i-col span="6" offset="2">
                  <p class="card-title">累计使用</p>
                  <p class="score-amount">{{ scoreOut}}</p>
                </i-col>
              </Row>
            </i-col>
          </Row>
          <div class="list">
            <p class="list-header">近期明细<span class="header-right"><a>查看全部></a></span></p>
            <div class="list-item" v-for="(item, index) in txList" :key="index">
              <div class="tx">
                <div class="txType"> {{ item.type }}：</div>
                <div class="txContent">{{ item.content }}</div>
                <div class="txTime"> {{ item.time }}</div>
                <div class="txAmount" :style="inOrOut(item.inOrOut)">{{ plus(item.inOrOut) }}{{ item.amount }}</div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane label="积分明细" name="2" @on-click="routeTo">
          <div class="list">
            <div class="list-header">
              <Icon type="calendar"></Icon> {{ yearMonth }}
              <CheckBoxGroup v-model="checkBox" class="checkbox">
                <Checkbox>
                  <span value="1">入账</span>
                </Checkbox>
                <Checkbox>
                  <span value="2">出账</span>
                </Checkbox>
              </CheckBoxGroup>
            </div>
            <div class="list-item" v-for="(item, index) in allTxList" :key="index">
              <div class="tx">
                <div class="txType"> {{ item.type }}：</div>
                <div class="txContent" :style="isSend(item.isSend)">{{ item.content }}</div>
                <div class="txTime"> {{ item.time }}</div>
                <div class="txAmount" :style="inOrOut(item.inOrOut)">{{ plus(item.inOrOut) }}{{ item.amount }}</div>
              </div>
            </div>
            <Page :total="100" show-total :current="1" :page-size="15" @on-change="changePage" style="margin: 20px 0 0 50%;"></Page>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      scoreImg: '/static/Images/telecom/myscore.png',
      scoreIn: 21000,
      scoreOut: 1500,
      scoreNow: 26000,
      yearMonth: '2017年5月',
      checkBox: ['1', '2'],
      txList: [
        {
          type:'积分互通',
          content: '南方航空里程兑换',
          time: '2018-12-31 15:00',
          inOrOut: 2,
          isSend: false,
          amount: '1000'
        },
        {
          type:'商品兑换',
          content: '品质type-c数据线 * 2',
          time: '2018-12-31 15:00',
          inOrOut: 2,
          isSend: false,
          amount: '1000'
        },
        {
          type:'话费奖励',
          content: '2017年5月',
          time: '2018-12-31 15:00',
          inOrOut: 1,
          isSend: false,
          amount: '1000'
        },
        {
          type:'系统赠送',
          content: '',
          time: '2018-12-31 15:00',
          inOrOut: 1,
          isSend: false,
          amount: '1000'
        }
      ],
      allTxList: [
        {
          type:'积分互通',
          content: '南方航空里程兑换',
          time: '2018-12-31 15:00',
          inOrOut: 2,
          isSend: false,
          amount: '1000'
        },
        {
          type:'商品兑换',
          content: '品质type-c数据线 * 2',
          time: '2018-12-31 15:00',
          inOrOut: 2,
          isSend: false,
          amount: '1000'
        },
        {
          type:'话费奖励',
          content: '2017年5月',
          time: '2018-12-31 15:00',
          inOrOut: 1,
          isSend: false,
          amount: '1000'
        },
        {
          type:'系统赠送',
          content: '',
          time: '2018-12-31 15:00',
          inOrOut: 1,
          isSend: false,
          amount: '1000'
        },
        {
          type:'用户互赠',
          content: 'windiner赠送给我',
          time: '2018-12-31 15:00',
          inOrOut: 1,
          isSend: true,
          amount: '1000'
        },
        {
          type:'用户互赠',
          content: 'windiner赠送给我',
          time: '2018-12-31 15:00',
          inOrOut: 1,
          isSend: true,
          amount: '1000'
        },
        {
          type:'系统赠送',
          content: '',
          time: '2018-12-31 15:00',
          inOrOut: 1,
          isSend: false,
          amount: '1000'
        },
        {
          type:'积分互通',
          content: '南方航空里程兑换',
          time: '2018-12-31 15:00',
          inOrOut: 2,
          isSend: false,
          amount: '1000'
        },
        {
          type:'积分互通',
          content: '南方航空里程兑换',
          time: '2018-12-31 15:00',
          inOrOut: 2,
          isSend: false,
          amount: '1000'
        },
      ],
      isSendPage: false,
      exchangeAccount: {
        recipient: '',
        sendScore: 10000
      },
    }
  },
  methods: {
    mockAllTxList () {
      let allTxList =[];
      return allTxList;
    },
    routeTo (e) {
      if(e == 1) {
        this.$router.push({path:'/myScore'});
      }
      if(e == 2) {
      this.$router.push({path:'/myScoreDetail'});
      }
    },
    inOrOut (flag) {
      if(flag == 1) {
        return "color: #1ABC9C;";
      }
    },
    plus (flag) {
      if(flag == 1) {
        return '+';
      }
      else if (flag == 2) {
        return '-';
      }
    },
    isSend (flag) {
      if(flag) {
        return "color: #F04844; font-weight: 700;";
      }
    },
    changePage () {
      // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
      this.allTxList = this.mockTableData1();
    },
    handleShowSendPage () {
      this.isSendPage = true;
      // this.$Message.success("弹出赠送页面");
    },
    handleCloseSendPage () {
      this.isSendPage = false;
    },
    handleSend () {
      console.log(this.exchangeAccount);
    }
  }
}
</script>
<style>
.tab-container {
  width: 850px;
}
.score-card {
  border: 1px solid #dddee1;
  padding: 30px 40px 30px 40px;
}
.card-title {
  text-align: center;
  font-size: 14px;
}
.score-amount {
  color: #1ABC9C;
  font-size: 36px;
  text-align: center;

}
.card-img {
  display: block;
  width: 40px;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 5px;
}
.card-btn {
  display: block;
  width: 90px;
  margin: 0 auto;
}
.list-header {
  border-bottom: 1px solid #dddee1;
  position: relative;
  margin: 10px 0 5px 5px;
  line-height: 40px;
  font-size: 14px;
}
.header-right {
  position: absolute;
  margin-left: 80%;
}
.checkbox {
  margin-left: 65%;
}

.tx {
  height: 70px;
  border-bottom: 1px solid #dddee1;
  padding: 25px 15px 25px 35px; 
  position: relative;
}
.txType {
  font-size: 15px;
  position: absolute;
}
.txContent {
  position: absolute;
  margin-left: 10%;
  font-size: 15px;
  
}
.txTime {
  font-size: 15px;
  margin-left: 40%;
  display: inline-block;

}
.txAmount {
  margin-left: 25%;
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  color: #F04844;
}

/* send page*/
.header-title {
  display: inline-block;
  margin-left: 41%;
  text-align: center;
  color: whitesmoke;
}
.footer {
  padding: 10px, 50px;
}
.btn {
  width: 100px;
}
.sendPage {
  width: 40%;
  height: 500px;
  position: absolute;
  z-index: 2;
  margin-left: 3%;
}
.sendPageContent {
  margin-left: 30px;
  margin-top: 10px;
}
.line {
  margin-top: 10px;
  background: #495060;
  height: 50px;
}

.noSendPage {
  width: 100%;
  height: 100%;
  position: relative;
}

.isShowSendPage {
  position: absolute;
  filter: blur(2px);
  width: 100%;
  height: 100%;
}

.input-m {
  width: 120px;
}
.sendPage-card-header {
  width: 100%;
  margin-left: 20px;
}
.sendPage-card-row {
  margin-top: 5px;
  margin-left: 20px !important;
  margin-bottom: 8px;
}
.sendPage-card-content {
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  padding-left: 16px;
  line-height: 25px;
}

</style>

