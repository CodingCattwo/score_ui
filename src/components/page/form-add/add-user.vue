<style scoped>
.content {
  margin-left: 50px;
  margin-right: 50px;
}
.footer {
  padding: 10px, 50px;
}

.form {
  background: white;
}
.form-title {
  padding-bottom: 5px;
  padding-left: 5px;
  padding-top: 5px;
}

.back-btn {
  width: 80px;
  display: inline-block;
}

.btn {
  width: 100px;
}

.header-title {
  display: inline-block;
  margin-left: 35%;
  text-align: center;
  color: whitesmoke;
}
.line {
  background: #f5f7f9;
  height: 15px;
}

</style>
<template>
<div class="layout">
    <Layout>
        <Header class="header">
          <div class="back-btn">
            <i-button size="small" long class="back-btn" @click="Back">返回</i-button>
          </div>
          <div class="header-title">
            <h1>新增用户</h1>
          </div>
        </Header>
        <div class="line"></div> 
        <div class="line"></div>       
        <Content class="content">
          <div class="form">
            <h3 class="form-title">基本信息</h3>
            <i-form ref:form-validate :model="userValidate"  :label-width="100">
              <Row type="flex" >
                <Form-item span="6" label="用户账户：" prop="account" style="margin-left: 8px;">
                    <i-input class="input-m" v-model="userValidate.account" disabled placeholder="保存后自动生成"></i-input>
                </Form-item>
                <Form-item span="6" label="*用户名：" prop="username" >
                    <i-input class="input-m" v-model="userValidate.username" placeholder=""></i-input>
                </Form-item>
                <Form-item span="6" label="*用户类型：" prop="usertype" style="width: 262px;">
                  <i-select v-model="userValidate.userType" class="input-m" :value.sync="userValidate.userType" placeholder="--请选择--">
                      <i-option value="1">电信</i-option>
                      <i-option value="2">非电信</i-option>
                  </i-select>
                </Form-item>
                <Form-item span="6" label="*账号类型：" prop="accounttype" style="width: 262px;">
                  <i-select v-model="userValidate.accountType" class="input-m" :value.sync="userValidate.accountType" placeholder="--请选择--">
                      <i-option value="1">家庭光纤类</i-option>
                      <i-option value="2">企业光纤类</i-option>
                      <i-option value="3">手机卡类</i-option>
                      <i-option value="4">IPTV类</i-option>
                      <i-option value="5">其他类</i-option>
                  </i-select>
                </Form-item>
              </Row>
              <Row type="flex" >
                <Form-item span="6" label="性别：" prop="gender" style="margin-left: 8px; width: 262px;">
                  <i-select v-model="userValidate.gender" class="input-m" :value.sync="userValidate.gender" placeholder="--请选择--">
                      <i-option value="1">男</i-option>
                      <i-option value="2">女</i-option>
                  </i-select>
                </Form-item>
                <Form-item span="6" label="*所在城市：" prop="city" style="width: 262px;">
                  <i-select v-model="userValidate.city" class="input-m" :value.sync="userValidate.city" placeholder="--请选择--">
                      <i-option value="1">广州</i-option>
                      <i-option value="2">深圳</i-option>
                  </i-select>
                </Form-item>
                <Form-item span="6" label="*手机号码：" prop="contact">
                    <i-input class="input-m" v-model="userValidate.contact" placeholder=""></i-input>
                </Form-item>
                <Form-item span="6" label="身份证号：" prop="idNumber">
                    <i-input class="input-m" v-model="userValidate.idNumber" placeholder=""></i-input>
                </Form-item>
              </Row>
              <Row type="flex" >
                <Form-item span="6" label="固定电话：" prop="phoneNumber" style="margin-left: 8px">
                    <i-input class="input-m" v-model="userValidate.phoneNumber" placeholder=""></i-input>
                </Form-item>
                <Form-item span="12" label="通讯地址：" prop="contactAddress">
                    <i-input class="input-m" v-model="userValidate.contactAddress" placeholder=""></i-input>
                </Form-item>
              </Row>
            </i-form>
          </div>
          <div class="line"></div>
        </Content>
        <Row class="footer" type="flex" style="margin-left: 40%;">
          <div class="btn">
            <i-button type="success"  long size="large" @click.native="handleSubmit">   保存   </i-button>
          </div>
          <div class="btn">
            <i-button type="default" long size="large" @click.native="Back" style="margin-left: 8px">   关闭   </i-button>
          </div>
        </Row>
      <div class="line"></div>        

    </Layout>
</div>
</template>
<script>
export default {
  data () {
    return {
      userValidate: {
        account: '',
        username: '',
        userType: '',
        accountType: '',
        gender: '',
        city: '',
        contact: '',
        idNumber: '',
        phoneNumber: '',
        contactAddress: '',
      }
    }
  },
  methods: {
    Back () {
      // this.$router.go(-1);
      this.$router.push({path: '/3-1'});
    },
    handleSubmit () {
      // 提交data里的数据
      this.$Message.success("提交数据到服务器");
    },
  }
}
</script>
