<template>
  <div class="login">
    <el-form ref="form" label-position="top" label-width="80px" :model="userLogin" :rules="rules">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="userLogin.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <el-input v-model="userLogin.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="isLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login} from '@/services/user'
export default {
  data() {
    return {
      userLogin: {
        phone: '17201234567',
        password: '111111'
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1\d{10}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 30, message: '长度在 5 到 30 个字符', trigger: 'blur' }]
      },
      isLogin: false
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
    async onSubmit() {
      // $refs.form.validate(valid=>{console.log(valid)}) //true或者false
      try {
        await this.$refs.form.validate()
        this.isLogin = true;
        // 执行登录的接口
        let flag = login(this.userLogin);
        if(flag){
         this.$message.success("登录成功")
         // 跳转到首页
         setTimeout(() => {
           // todo commit和push的循序不要搞混，commit是同步请求，如果需要使用异步，在actions中添加异步方法，使用dispart派发
            this.$store.commit("setCurrentUser",this.userLogin)
            this.$router.push(this.$route.query.redirect || "/")
            this.isLogin = false;
          }, 1000);
        }else{
          this.$message.error('账号或密码错误');
          this.isLogin = false;
        }
      } catch (err) {
        console.error('校验失败')
      }
    }
  }
}
</script>
<style lang="scss">
/* @import url(); 引入css类 */
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .el-form {
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;

    .el-button {
      width: 100%;
    }
  }
}
</style>
