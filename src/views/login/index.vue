<template>
<div class="login">
  <el-form label-position="top" label-width="80px" :model="userLogin">
  <el-form-item label="手机号">
    <el-input v-model="userLogin.phone"></el-input>
  </el-form-item>
  <el-form-item label="验证码">
    <el-input v-model="userLogin.password"></el-input>
  </el-form-item>
   <el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
export default {
  data() {

      return {
        userLogin:{
            phone:'',
            password:''
        }
      }

  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {

  },
  // methods方法
  methods: {
    onSubmit(){

    }
  }
}
</script>
<style lang="scss">
/* @import url(); 引入css类 */
.login{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-form {
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    .el-button{
      width: 100%;
    }
  }
}
</style>
