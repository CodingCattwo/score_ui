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

.demo-upload-list{
    display: inline-block;
    width: 80px;
    height: 80px;
    text-align: center;
    line-height: 90px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
}
.demo-upload-list img{
    width: 100%;
    height: 100%;
}
.demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
}
.demo-upload-list:hover .demo-upload-list-cover{
    display: block;
}
.demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
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
            <h1>新增商品</h1>
          </div>
        </Header>
        <div class="line"></div>        
        <Content class="content">
          <div class="form">
            <h3 class="form-title">基本信息</h3>
            <i-form ref:form-validate :model="productValidate"  :label-width="100">
              <Row type="flex" >
                <Form-item span="6" label="活动编号：" prop="number" style="margin-left: 8px;">
                    <i-input class="input-m" v-model="productValidate.number" disabled placeholder="保存后自动生成"></i-input>
                </Form-item>
                <Form-item span="6" label="商品名称：" prop="name"  style="margin-left: 8px">
                    <i-input class="input-m" v-model="productValidate.name" placeholder="商品名称"></i-input>
                </Form-item>
                <Form-item span="6" label="商品类型：" prop="type">
                    <i-select v-model="productValidate.type" class="input-m" :value.sync="productValidate.type" placeholder="--请选择--">
                        <i-option value="beijing">北京市</i-option>
                        <i-option value="shanghai">上海市</i-option>
                        <i-option value="shenzhen">深圳市</i-option>
                    </i-select>
                </Form-item>
                <Form-item span="6" label="兑换积分：" prop="amount"  style="margin-left: 8px">
                    <i-input class="input-m" v-model="productValidate.amount" placeholder="兑换积分"></i-input>
                </Form-item>
              </Row>
            </i-form>
          </div>
          <div class="line"></div>
          <div class="form">
            <h3 class="form-title">商品信息</h3>
            <i-form ref:form-validate :model="productValidate"  :label-width="100">
              <Form-item label="发布商家：" prop="sale" style="width:40%; margin-left: 8px;">
                  <i-input class="input-m" v-model="productValidate.sale" placeholder="发布商家"></i-input>
              </Form-item>
              <Form-item label="商品简介：" prop="info"  style="width:80%; margin-left: 8px">
                  <i-input class="input-m" type="textarea" :rows="4" v-model="productValidate.info" placeholder="请输入商品简介"></i-input>
              </Form-item>
              <Form-item label="商品描述：" prop="description" type="textarea" style="width:80%; margin-left: 8px">
                  <i-input class="input-m" type="textarea" :rows="4" v-model="productValidate.description" placeholder="请输入商品描述"></i-input>
              </Form-item>
              <Form-item  label="*商品图片：" prop="img"  style="width:80%; margin-left: 8px">
                  <!-- <i-input class="input-m" v-model="productValidate.img"></i-input>
                  <div>
                      <Upload
                          multiple
                          :before-upload="handleUpload"
                          action="//jsonplaceholder.typicode.com/posts/">
                          <Button type="ghost" icon="ios-cloud-upload-outline">Select the file to upload</Button>
                      </Upload>
                      <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
                  </div> -->
                  <div class="demo-upload-list" v-for="item in uploadList">
                      <template v-if="item.status === 'finished'">
                          <img :src="item.url">
                          <div class="demo-upload-list-cover">
                              <Icon type="ios-eye-outline" size="25" @click.native="handleView(item.name)"></Icon>
                              <Icon type="ios-trash-outline" size="25" @click.native="handleRemove(item)"></Icon>
                          </div>
                      </template>
                      <template v-else>
                          <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                      </template>
                  </div>
                  <Upload
                      ref="upload"
                      :show-upload-list="false"
                      :default-file-list="defaultList"
                      :on-success="handleSuccess"
                      :format="['jpg','jpeg','png']"
                      :max-size="2048"
                      :on-format-error="handleFormatError"
                      :on-exceeded-size="handleMaxSize"
                      :before-upload="handleBeforeUpload"
                      multiple
                      type="drag"
                      action="//jsonplaceholder.typicode.com/posts/"
                      style="display: inline-block;width:80px;">
                      <div style="width:80px;height:80px;line-height: 90px;">
                          <Icon type="camera" size="30"></Icon>
                      </div>
                  </Upload>
                  <Modal title="View Image" v-model="visible">
                      <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
                  </Modal>
              </Form-item>
            </i-form>
          </div>
        </Content>
        <Row class="footer" type="flex" style="margin-left: 35%;">
          <div class="btn">
            <i-button type="success"  long size="large" @click.native="handleSubmit">   保存   </i-button>
          </div>
          <div class="btn">
            <i-button type="default" long size="large" @click.native="Back" style="margin-left: 8px">   取消   </i-button>
          </div>
        </Row>
        <Footer >
          
        </Footer>
    </Layout>
</div>
</template>
<script>
export default {
  data () {
    return {
      // file: null,
      // loadingStatus: false,
      defaultList: [
          {
              'name': 'a42bdcc1178e62b4694c830f028db5c0',
              'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
          },
          {
              'name': 'bc7521e033abdd1e92222d733590f104',
              'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
          }
      ],
      imgName: '',
      visible: false,
      uploadList: [],
      productValidate: {
        number: '',
        name: '',
        type: '',
        amount: '',
        sale: '',
        info: '',
        description: '',
        img: this.uploadList
      }
    }
  },
  methods: {
    Back () {
      // this.$router.go(-1);
      this.$router.push({path: '/1-1'});
    },
    handleSubmit () {
      // 提交data里的数据
      this.$Message.success("提交数据到服务器");
    },
    handleUpload (file) {
        this.file = file;
        return false;
    },
    // 上传后单纯显示文件名，不显示缩略图
    // upload () {
    //     this.loadingStatus = true;
    //     setTimeout(() => {
    //         this.file = null;
    //         this.loadingStatus = false;
    //         this.$Message.success('Success')
    //     }, 1500);
    // }
    handleView (name) {
        this.imgName = name;
        this.visible = true;
    },
    handleRemove (file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess (res, file) {
        file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
        file.name = '7eb99afb9d5f317c912f08b5212fd69a';
    },
    handleFormatError (file) {
        this.$Notice.warning({
            title: 'The file format is incorrect',
            desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
        });
    },
    handleMaxSize (file) {
        this.$Notice.warning({
            title: 'Exceeding file size limit',
            desc: 'File  ' + file.name + ' is too large, no more than 2M.'
        });
    },
    handleBeforeUpload () {
        const check = this.uploadList.length < 5;
        if (!check) {
            this.$Notice.warning({
                title: 'Up to five pictures can be uploaded.'
            });
        }
        return check;
    }
  },
  mounted () {
      this.uploadList = this.$refs.upload.fileList;
  }
}
</script>
