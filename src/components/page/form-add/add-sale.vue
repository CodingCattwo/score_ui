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
            <h1>新增商户</h1>
          </div>
        </Header>
        <div class="line"></div> 
        <div class="line"></div>       
        <Content class="content">
          <div class="form">
            <h3 class="form-title">基本信息</h3>
            <i-form :model="userValidate"  :label-width="100">
              <Row type="flex" >
                <Form-item span="8" label="商家账户：" prop="account" style="margin-left: 8px;">
                    <i-input class="input-m" v-model="userValidate.account" disabled placeholder="保存后自动生成"></i-input>
                </Form-item>
                <Form-item span="8" label="*商家名称：" prop="salename" >
                    <i-input class="input-m" v-model="userValidate.saleName" placeholder=""></i-input>
                </Form-item>
                <Form-item span="8" label="*所属分类：" prop="saletype" style="width: 262px;">
                  <i-select v-model="userValidate.saleType" class="input-m" :value.sync="userValidate.saleType" placeholder="--请选择--">
                      <i-option value="1">电信自营</i-option>
                      <i-option value="2">电信合作伙伴</i-option>
                      <i-option value="2">第三方</i-option>
                  </i-select>
                </Form-item>
              </Row>
              <Row type="flex" >
                <Form-item span="8" label="固定电话：" prop="phoneNumber" style="margin-left: 8px">
                    <i-input class="input-m" v-model="userValidate.phoneNumber" placeholder=""></i-input>
                </Form-item>
                <Form-item span="8" label="*联系人：" prop="contactname">
                    <i-input class="input-m" v-model="userValidate.contactName" placeholder=""></i-input>
                </Form-item>
                <Form-item span="8" label="*手机号码：" prop="contact">
                    <i-input class="input-m" v-model="userValidate.contact" placeholder=""></i-input>
                </Form-item>
              </Row>
              <Row type="flex" >
                <Form-item span="8" label="邮箱：" prop="emailaddredd" style="margin-left: 8px">
                    <i-input class="input-m" v-model="userValidate.emailAddredd" placeholder=""></i-input>
                </Form-item>
                <Form-item span="16" label="*通讯地址：" prop="contactaddress">
                    <i-input class="input-m" v-model="userValidate.contactAddress" placeholder=""></i-input>
                </Form-item>
              </Row>
              <Row type="flex" >
                <Form-item label="*商家单位描述："  prop="description" type="textarea" style="width:60%; margin-left: 8px">
                    <i-input class="input-m" type="textarea" :rows="4" v-model="userValidate.description" placeholder="请输入商品描述"></i-input>
                </Form-item>
              </Row>
            </i-form>
          </div>
          <div class="line"></div>
        </Content>
        <Row class="footer" type="flex" style="margin-left: 38%;">
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
        saleName: '',
        saleType: '',
        phoneNumber: '', // 固话
        contactName: '',
        contact: '', // 手机号
        emailAddress: '', 
        contactAddress: '',
        description: ''
      }
    }
  },
  methods: {
    Back () {
      // this.$router.go(-1);
      this.$router.push({path: '/3-2'});
    },
    handleSubmit () {
      // 提交data里的数据
      this.$Message.success("提交数据到服务器");
    },
  }
}
</script>
