<style scoped>
.input-m {
  width: 120px;
}

.table-btn {
    margin-bottom: 5px;
}
</style>

<template>
  <div>
    <div class="form">
      <i-form ref:form-validate :model="userValidate"  :label-width="80">
        <Row :gutter="8" type="flex">
          <Form-item span="6" label="用户账户：" prop="account" style="margin-left: 8px">
              <i-input class="input-m" v-model="userValidate.account" placeholder="-模糊搜索-"></i-input>
          </Form-item>
          <Form-item span="6" label="用户类型：" prop="usertype">
            <i-select v-model="userValidate.userType" class="input-m" :value.sync="userValidate.userType" placeholder="--请选择--">
                <i-option value="1">电信</i-option>
                <i-option value="2">非电信</i-option>
            </i-select>
          </Form-item>
          <Form-item span="6" label="账号类型：" prop="accounttype">
            <i-select v-model="userValidate.accountType" class="input-m" :value.sync="userValidate.accountType" placeholder="--请选择--">
                <i-option value="1">家庭光纤类</i-option>
                <i-option value="2">企业光纤类</i-option>
                <i-option value="3">手机卡类</i-option>
                <i-option value="4">IPTV类</i-option>
                <i-option value="5">其他类</i-option>
            </i-select>
          </Form-item>
          <Form-item span="6" label="所在城市：" prop="city">
            <i-select v-model="userValidate.city" class="input-m" :value.sync="userValidate.city" placeholder="--请选择--">
                <i-option value="1">广州</i-option>
                <i-option value="2">深圳</i-option>
            </i-select>
          </Form-item>
        </Row>
        <Row :gutter="8" type="flex">
          <Form-item span="6" label="用户名称：" prop="username" style="margin-left: 8px">
              <i-input class="input-m" v-model="userValidate.username" placeholder="-模糊搜索-"></i-input>
          </Form-item>
          <Form-item span="6" label="电话号码：" prop="contact" >
              <i-input class="input-m" v-model="userValidate.contact" placeholder="-模糊搜索-"></i-input>
          </Form-item>
          <Row type="flex">
            <i-col span="10" offset="1">
              <i-button type="primary" @click.native="handleSubmit('userValidate')">查询</i-button>
            </i-col>
            <i-col span="10">
              <i-button type="primary" @click.native="handleReset('userValidate')" style="margin-left: 8px">重置</i-button>
            </i-col>
          </Row>
        </Row>
    </i-form>
    </div>
    <div class="table-btn">
      <Row type="flex" justify="end">
        <i-button type="success" @click.native="handleAdd">新增</i-button>
        <i-button type="info" @click.native="handleEdit" style="margin-left: 8px">修改</i-button>
        <i-button type="error" @click.native="handleEdit" style="margin-left: 8px">删除</i-button>
        <i-button type="default" @click.native="handleEdit" style="margin-left: 8px">查看</i-button>
      </Row>
    </div>
    <Table :content="self" :columns="columns7" :data="data6" highlight-row @on-current-change="handleSelectedRow" border size="small"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
          <Page :total="100" :current="1" @on-change="changePage"></Page>
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
                selectedRowId: '',
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
                        width: 100,
                    },
                    {
                        title: '用户类型',
                        key: 'userType',
                        align: 'center',
                        width: 110,
                        minWidth: 100
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
                        width: 90,
                        align: 'center',
                        ellipsis: true
                    },
                    {
                        title: '电话号码',
                        key: 'contact',
                        align: 'center',
                        width: 120
                    },
                    {
                        title: '创建人',
                        key: 'creator',
                        align: 'center',
                        width: 80
                    },
                    {
                        title: '最后修改时间',
                        key: 'lastEditTime',
                        align: 'center',
                        width: 170,
                        minWidth: 120,
                    },
                ],
                data6: this.mockTableData1(),
                userValidate: {
                    account: '',
                    userType: '',
                    accountType: '',
                    city: '',
                    name: '',
                    contact: '',
                }
            }
        },
        methods: {
            mockTableData1 () {
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        account: Math.floor(Math.random () * 10 + 1)
                    })
                }
                return data;
            },
            handleSubmit(name) {
                // 传值选中行的id编号到后台
                console.log("表单数据：");
                console.log(this.userValidate);
                this.$Message.success('console中查看表单数据');
            },
            handleReset(name) {
                this.userValidate = {
                    account: '',
                    userType: '',
                    accountType: '',
                    city: '',
                    name: '',
                    contact: '',
                }; 
                this.$Message.warning('这是一条警告的提示');
            },
            handleSelectedRow (rowData) {
              //console.log(obj);
              this.selectedRowId = rowData.number;
              this.$Message.success("id: " + rowData.number + "操作后台数据中");
            },
            handleEdit (rowId) {
                this.$Message.success("edit row: " + this.selectedRowId);
            },
            handleAdd () {
              // window.open(window.location.origin + '/addproduct');
              this.$router.push({path: '/adduser'});
              // this.$router.push({path: '/cart?goodsId=12'})
            },
            changePage () {
              // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
              this.data6 = this.mockTableData1();
            }
        

        }
    }
</script>
