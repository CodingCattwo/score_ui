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
      <i-form :model="userValidate"  :label-width="80">
        <Row :gutter="8" type="flex">
          <Form-item span="6" label="商家账户：" prop="account" style="margin-left: 8px">
              <i-input class="input-m" v-model="userValidate.account" placeholder="-模糊搜索-"></i-input>
          </Form-item>
          <Form-item span="6" label="商家名称：" prop="saleName" >
              <i-input class="input-m" v-model="userValidate.saleName" placeholder="-模糊搜索-"></i-input>
          </Form-item>
          <Form-item label="创建时间：" style="margin-left: 8px">
              <Row type="flex">
                  <i-col span="8">
                      <Form-item prop="date1">
                          <Date-picker type="date" placeholder="请选择日期" v-model="userValidate.date1"></Date-picker>
                      </Form-item>
                  </i-col>
                  <i-col span="1" style="text-align: center">-</i-col>
                  <i-col span="8">
                      <Form-item prop="date2">
                          <Date-picker type="date" placeholder="请选择日期" v-model="userValidate.date2"></Date-picker>
                      </Form-item>
                  </i-col>
              </Row>
          </Form-item>
        </Row>
        <Row :gutter="8" type="flex">
          <Form-item span="6" label="商家分类：" prop="accounttype" style="margin-left: 8px">
            <i-select v-model="userValidate.saleType" class="input-m" :value.sync="userValidate.saleType" placeholder="--请选择--">
                <i-option value="1">家庭光纤类</i-option>
                <i-option value="2">企业光纤类</i-option>
                <i-option value="3">手机卡类</i-option>
                <i-option value="4">IPTV类</i-option>
                <i-option value="5">其他类</i-option>
            </i-select>
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
                        title: '商家名称',
                        key: 'saleName',
                        align: 'center',
                        width: 250,
                        minWidth: 120
                    },
                    {
                        title: '用户类型',
                        key: 'userType',
                        align: 'center',
                        width: 100,
                        minWidth: 100
                    },
                    {
                        title: '联系人',
                        key: 'contactName',
                        align: 'center',
                        width:  80
                    },
                    {
                        title: '手机号',
                        key: 'contact',
                        width: 100,
                        align: 'center',
                        ellipsis: true
                    },
                    {
                        title: '通讯地址',
                        key: 'contactAddress',
                        align: 'center',
                        width: 200,
                        minWidth: 120
                    },
                    {
                        title: '最后修改时间',
                        key: 'lastEditTime',
                        align: 'center',
                        width: 170,
                        minWidth: 120,
                    },
                    {
                        title: '状态',
                        key: 'status',
                        align: 'center',
                        width: 80
                    }
                ],
                data6: this.mockTableData1(),
                userValidate: {
                    account: '',
                    saleName: '',
                    date1: '',
                    date2: '',
                    saleType: '',
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
                    saleName: '',
                    date1: '',
                    date2: '',
                    saleType: '',
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
              this.$router.push({path: '/addsale'});
              // this.$router.push({path: '/cart?goodsId=12'})
            },
            changePage () {
              // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
              this.data6 = this.mockTableData1();
            }
        

        }
    }
</script>
