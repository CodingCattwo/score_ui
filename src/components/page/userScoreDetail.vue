<style scoped>
.input-m {
  width: 120px;
}
.card-header {
  width: 100%;
  margin-left: 20px;
}
.card-row {
  margin-top: 5px;
  margin-left: 20px !important;
  margin-bottom: 8px;
}
.card-content {
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  padding-left: 16px;
  line-height: 25px;
}

.send-btn {
  margin-left: 8px;
  margin-top: -3px;
}

.form {
  margin-top: 8px;
}

.table-btn {
    margin-bottom: 5px;
}


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
  width: 80%;
  height: 500px;
  position: absolute;
  z-index: 2;
  margin-left: 6%;
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
</style>

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
          <div class="card-header" style=" margin-top: 5px;">
            <h2 style="display: inline-block;">赠送用户：</h2>
            <i-input class="input-m" disabled v-model="selectedUsername"></i-input>
          </div>
          <div class="card-header" style=" margin-top: 5px;">
            <h2 style="display: inline-block;">赠送积分：</h2>
            <i-input class="input-m" v-model="exchangeAccount.sendScore"></i-input>
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
      <div class="form">
        <i-form ref:form-validate :model="formValidate"  :label-width="80">
          <Row :gutter="16" type="flex">
            <Form-item span="6" label="用户账户：" prop="account" style="margin-left: 8px">
                <i-input class="input-m" v-model="formValidate.account" placeholder="-模糊搜索-"></i-input>
            </Form-item>
            <Form-item span="6" label="用户名称：" prop="username">
                <i-input class="input-m" v-model="formValidate.username" placeholder="-模糊搜索-"></i-input>
            </Form-item>
            <Form-item span="6" label="联系方式：" prop="contact">
                <i-input class="input-m" v-model="formValidate.contact" placeholder="-模糊搜索-"></i-input>
            </Form-item>
            <Form-item span="6" label="用户类型" prop="usertype">
              <i-select v-model="formValidate.userType" class="input-m" :value.sync="formValidate.usertype" placeholder="--请选择--">
                  <i-option value="1">电信</i-option>
                  <i-option value="2">非电信</i-option>
              </i-select>
            </Form-item>
          </Row>
          <Row :gutter="16" type="flex">
            <Form-item span="6" label="账号类型" prop="accounttype">
              <i-select v-model="formValidate.accountType" class="input-m" :value.sync="formValidate.usertype" placeholder="--请选择--">
                  <i-option value="1">家庭光纤类</i-option>
                  <i-option value="2">企业光纤类</i-option>
                  <i-option value="3">手机卡类</i-option>
                  <i-option value="4">IPTV类</i-option>
                  <i-option value="5">其他类</i-option>
              </i-select>
            </Form-item>
            <Row type="flex">
              <i-col span="10" offset="1">
                <i-button type="primary" @click.native="handleSubmit('formValidate')">查询</i-button>
              </i-col>
              <i-col span="10">
                <i-button type="primary" @click.native="handleReset('formValidate')" style="margin-left: 8px">重置</i-button>
              </i-col>
            </Row>
          </Row>
        </i-form>
      </div>
      <div class="table-btn">
        <Row type="flex" justify="end" style="margin-right: 8px;">
          <i-button type="success" @click.native="handleShowSendPage">赠送积分</i-button>
        </Row>
      </div>
      <Table :content="self" :columns="columns7" :data="data6" highlight-row @on-current-change="handleSelectedRow" border size="small"></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="100" :current="1" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                // tableData1: this.mockTableData1(),
                self: this,
                exchangeAccount: {
                  score: 10000,
                  sendAccount: '',
                  sendScore: ''
                },
                selectedRowId: '',
                selectedUsername: '',
                columns7: [
                    {
                        title: '用户账号',
                        key: 'account',
                        align: 'center',
                        width: 180,
                        minWidth: 120,
                        render: (h, params) => {
                            return h('div', params.row.account);
                        }
                    },
                    {
                        title: '用户名称',
                        key: 'username',
                        align: 'center',
                        width: 120,
                    },
                    {
                        title: '联系方式',
                        key: 'contact',
                        align: 'center',
                        width: 120
                    },
                    {
                        title: '用户积分',
                        key: 'userScore',
                        align: 'center',
                        width: 120
                    },
                    {
                        title: '用户类型',
                        key: 'userType',
                        align: 'center',
                        width: 120
                    },
                    {
                        title: '账号类型',
                        key: 'accountType',
                        align: 'center',
                        width: 100
                    },
                    {
                        title: '所在城市',
                        key: 'time',
                        width: 200,
                        minWidth: 120,
                        align: 'center',
                        ellipsis: true
                    }
                ],
                data6: this.mockTableData1(),
                formValidate: {
                    account: '',
                    username: '',
                    contact: '',
                    userType: '',
                    accountType: ''
                },
                isSendPage: false
            }
        },
        methods: {
            mockTableData1 () {
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        account: Math.floor(Math.random () * 10 + 1),
                        username: '李时珍'+Math.floor(Math.random () * 10 + 1)
                    })
                }
                return data;
            },
            handleSubmit(name) {
                // 传值选中行的id编号到后台
                console.log("表单数据：");
                console.log(this.formValidate);
                this.$Message.success('console中查看表单数据');
            },
            handleReset(name) {
                this.formValidate = {
                    account: '',
                    number: '',
                    contact: '',
                    productName: '',
                    exchangeSale: '',
                    date1: '',
                    date2: ''
                }; 
                this.$Message.warning('这是一条警告的提示');
            },
            handleSelectedRow (rowData) {
              // console.log(obj);
              this.selectedUsername = rowData.username;
              // this.$Message.success("id: " + rowData.username + "操作后台数据中");
            },
            // handleEdit (rowId) {
            //     this.$Message.success("edit row: " + this.selectedRowId);
            // },
            // handleAdd () {
            //   // window.open(window.location.origin + '/addproduct');
            //   this.$router.push({path: '/addproduct'});
            //   // this.$router.push({path: '/cart?goodsId=12'})
            // },
            changePage () {
              // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
              this.data6 = this.mockTableData1();
            },
            handleShowSendPage () {
              this.isSendPage = true;
              // this.$Message.success("弹出赠送页面");
            },
            handleCloseSendPage () {
              this.isSendPage = false;
            }
        

        }
    }
</script>
