<template>
<el-container>
  <el-aside width="200px">
    <app-aside></app-aside>
  </el-aside>
  <el-container>
    <el-header>
      <app-header></app-header>
    </el-header>
    <el-main><router-view/></el-main>
  </el-container>
</el-container>
</template>

<script>
import AppAside from './components/AppAside'
import AppHeader from './components/AppHeader'

export default {
    data() {
        return {

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

    },
    components: {
      AppAside,
      AppHeader
    }
}
</script>
<style lang="scss">
/* @import url(); 引入css类 */
 .el-container{
  height: 100vh; // vh视口高度， vw视口宽度
  // width: 50vw;
  // min-width: 980px;
 }
 .el-header{
  background-color: #fff;
 }
 .el-aside{
  background-color: #d3dce6;
 }
 .el-main{
   background-color: #e9eef3;
 }
</style>
