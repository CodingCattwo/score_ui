<template> 
  <div>
    <div class="header">
      <img :src="banner">
      <div class="header-content">
        <p class="title">中国南方航空</p>
        <p class="subtitle">优质的空旅空乘服务</p>
        <p style="height: 100px; font-size: 14px;">{{ text }}</p>
      </div>
      <div class="line"></div>
      <Row type="flex">
        <i-col span="10" >
          <div class="info-form">
            <Form :model="formValidate" :label-width="80">
              <FormItem label="姓名" prop="name">
                  <i-input v-model="formValidate.name" clearable   placeholder="请输入姓名"></i-input>
              </FormItem>
              <FormItem label="手机号" prop="phone">
                  <i-input v-model="formValidate.phone" clearable    placeholder="请输入手机号"></i-input>
              </FormItem>
              <FormItem label="南航卡号" prop="cardId">
                  <i-input v-model="formValidate.cardId" clearable    placeholder="请输入卡号"></i-input>
              </FormItem>
              <FormItem label="南航里程" prop="mileage">
                  <i-input v-model="formValidate.mileage" clearable>
                    <span slot="append">×100点</span>
                  </i-input>
              </FormItem>
              <FormItem label="验证码" prop="checkNum">
                  <i-input v-model="formValidate.checkNum"    placeholder="请输入验证码">
                    <Button slot="append" @click="getcheckNum">获取验证码</Button>
                  </i-input>
              </FormItem>
              <FormItem label="电信积分" prop="store">
                  <span>{{ getStore }} 积分</span>
              </FormItem>
              <Button type="error"   long @click="handleSubmit('formValidate')">立即兑换</Button>
              <Checkbox style="margin-top: 8px; padding-left: 170px;" v-model="agree">我已阅读并同意里程<a>兑换规则</a></Checkbox>
            </Form>
          </div>
        </i-col>
        <i-col span="8" offset="3">
          <div class="header-content" style="width: 500px;">
            <p class="title">兑换规则</p>
            <p class="content">1、 南航积分即“南方万里行”积分，电信积分兑换获得的“南方万里行”积分，可用于兑换免费机票、升舱、逾重行李、南航积分商城礼品等，不可用于衡量南方万里行会员等级；</p>
            <p class="content">2、 兑换“南方万里行”积分订单生成后不可撤销，所消耗电信积分不予退还，请确认支付前核实扣减积分数额；</p>
            <p class="content">3、 兑换时请正确输入南航卡号，“南方万里行”积分将于1个月内到账，请注意查询；</p>
            <p class="content">4、 电信积分兑换“南方万里行”积分比例为：100:1，每次须以100点电信积分的整数倍兑换;</p>
            <p class="content">5、 关于“南方万里行”积分规则条款，请访问南方万里行会员门户网站查询 http://easternmiles.ceair.com</p>
            <p class="content">6、 关于“南方万里行”积分的其他疑问或咨询，请致电南航客服热线95530。</p>
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExchangeDetail',
  data () {
    return {
      banner: '/static/images/telecom/exchange.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputateCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin',
      formValidate: {
        name: '',
        phone: '',
        cardId: '',
        mileage: '',
        checkNum: ''
      },
      agree: true,
      // ruleValidate: {
      //   phone: [
      //     { required: true, message: '手机号不能为空', trigger: 'blur' },
      //     { type: 'string', pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '手机号格式出错', trigger: 'blur' }
      //   ],
      //   checkNum: [
      //     { required: true, message: '必须填写验证码', trigger: 'blur' },
      //     { type: 'string', min: 4, max: 4, message: '验证码长度错误', trigger: 'blur' }
      //   ]
      // }
    }
  },
  computed: {
    getStore: function () {
      return  this.formValidate.mileage*100;
    }
  },
  methods: {
    getcheckNum () {
      if (this.formValidate.phone.length === 11) {
        this.$Message.success({
          content: '验证码为: 1234',
          duration: 6,
          closable: true
        });
      } else {
        this.$Message.error({
          content: '请输入正确的手机号',
          duration: 6,
          closable: true
        });
      }
    },
    handleSubmit (name) { // 提交验证
      this.$router.push({path:'/pay'});
      // this.$refs[name].validate((valid) => {
      //   if (valid) {
      //     this.$router.push({ path: '/SignUp/inputInfo', query: { phone: this.formValidate.phone } });
      //   } else {
      //     this.$Message.error({
      //       content: '请填写正确的信息',
      //       duration: 6,
      //       closable: true
      //     });
      //   }
      // });
    }
  }
}
</script>
<style scoped>
.header-content {
  text-align: center;
  margin: 0 auto;
  width: 1200px;
}
.title {
  font-size: 24px;
  font-weight: 410;
  padding-top: 10px;
  padding-bottom: 5px;
}
.subtitle {
  font-size: 16px;
  font-weight: 200;
}
.content {
  font-size: 14px;
  font-weight: 200;
  text-align: left;
}
.line {
  height: 3px;
  background: #999999;
  width: 1300px;
  opacity: 0.1;
}
.info-form {
  width: 500px;
  padding: 50px 20px 20px 120px; 
}
</style>
