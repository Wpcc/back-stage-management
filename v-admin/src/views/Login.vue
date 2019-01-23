<template>
  <div id="login">
    <el-input placeholder="请输入姓名" v-model="input1" ></el-input>
    <el-input placeholder="请输入密码" v-model="input2" ></el-input>
    <el-button type='primary'>登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: ''
    }
  }
}
</script>
<style media="screen" lang="less">
  #login{
    width: 400px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    /* background: #ccc; */
    .el-input{
      margin-top: 20px;
    }
    .el-button{
      margin-top: 20px;
      width: 100%
    }
  }
</style>
