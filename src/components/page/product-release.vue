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
      <i-form ref:form-validate :model="formValidate"  :label-width="80">
        <Row :gutter="8" type="flex">
          <Form-item span="6" label="活动编号：" prop="number">
              <i-input class="input-m" v-model="formValidate.number" placeholder="-模糊搜索-"></i-input>
          </Form-item>
          <Form-item span="6" label="商品名称：" prop="name"  style="margin-left: 8px">
              <i-input class="input-m" v-model="formValidate.name" placeholder="-模糊搜索-"></i-input>
          </Form-item>
          <Form-item span="6" label="商品类型" prop="type">
              <i-select v-model="formValidate.type" class="input-m" :value.sync="formValidate.type" placeholder="--请选择--">
                  <i-option value="1">电信产品</i-option>
                  <i-option value="2">餐厨</i-option>
                  <i-option value="3">配件</i-option>
                  <i-option value="4">电器</i-option>
                  <i-option value="5">车载</i-option>
              </i-select>
          </Form-item>
          <Form-item span="6" label="发布商家：" prop="sale"  style="margin-left: 8px">
              <i-input class="input-m" v-model="formValidate.sale" placeholder="-模糊搜索-"></i-input>
          </Form-item>
        </Row>
        <Row type="flex">
          <Form-item label="选择日期：">
              <Row type="flex">
                  <i-col span="8">
                      <Form-item prop="date1">
                          <Date-picker type="date" placeholder="请选择日期" v-model="formValidate.date1"></Date-picker>
                      </Form-item>
                  </i-col>
                  <i-col span="1" style="text-align: center">-</i-col>
                  <i-col span="8">
                      <Form-item prop="date2">
                          <Date-picker type="date" placeholder="请选择日期" v-model="formValidate.date2"></Date-picker>
                      </Form-item>
                  </i-col>
                  <i-col span="6" offset="1">
                    <i-button type="primary" @click.native="handleSubmit('formValidate')">查询</i-button>
                    <i-button type="primary" @click.native="handleReset('formValidate')" style="margin-left: 8px">重置</i-button>
                  </i-col>
              </Row>
          </Form-item>
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
                        title: '活动编号',
                        key: 'number',
                        align: 'center',
                        width: 100,
                        render: (h, params) => {
                            return h('div', params.row.number);
                        }
                    },
                    {
                        title: '商品名称',
                        key: 'name',
                        minWidth: 150,
                        align: 'center'
                    },
                    {
                        title: '商品类型',
                        key: 'type',
                        align: 'center',
                        width: 100
                    },
                    {
                        title: '兑换积分',
                        key: 'score',
                        align: 'center',
                        width: 100
                    },
                    {
                        title: '已兑数量',
                        key: 'amount',
                        align: 'center',
                        width: 100
                    },
                    {
                        title: '发布时间',
                        key: 'time',
                        width: 200,
                        align: 'center',
                        ellipsis: true
                    },
                    {
                        title: '发布商家',
                        key: 'sale',
                        align: 'center',
                        width: 140
                    },
                ],
                data6: this.mockTableData1(),
                // data6: [
                //     {
                //         number: '000001',
                //         name: '蓝月亮洗衣液',
                //         type: '电信产品',
                //         score: 200,
                //         amount: 70,
                //         time: '2017-07-20  11：25',
                //         sale: '中国电信'
                //     },
                //     {
                //         number: '000001',
                //         name: '蓝月亮洗衣液',
                //         type: '电信产品',
                //         score: 200,
                //         amount: 70,
                //         time: '2017-07-20  11：25',
                //         sale: '中国电信'
                //     },
                //     {
                //         number: '000001',
                //         name: '蓝月亮洗衣液',
                //         type: '电信产品',
                //         score: 200,
                //         amount: 70,
                //         time: '2017-07-20  11：25',
                //         sale: '中国电信'
                //     },
                //     {
                //         number: '000001',
                //         name: '蓝月亮洗衣液',
                //         type: '电信产品',
                //         score: 200,
                //         amount: 70,
                //         time: '2017-07-20  11：25',
                //         sale: '中国电信'
                //     },
                //     {
                //         number: '000001',
                //         name: '蓝月亮洗衣液',
                //         type: '电信产品',
                //         score: 200,
                //         amount: 70,
                //         time: '2017-07-20  11：25',
                //         sale: '中国电信'
                //     }
                // ],
                formValidate: {
                    number: '',
                    name: '',
                    type: '',
                    sale: '',
                    date1: '',
                    date2: ''
                }
            }
        },
        methods: {
            mockTableData1 () {
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        number: Math.floor(Math.random () * 10 + 1)
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
                    number: '',
                    name: '',
                    type: '',
                    sale: '',
                    date1: '',
                    date2: ''
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
              this.$router.push({path: '/addproduct'});
              // this.$router.push({path: '/cart?goodsId=12'})
            },
            changePage () {
              // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
              this.data6 = this.mockTableData1();
            }
        

        }
    }
</script>
