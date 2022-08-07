<template>
<div class="menu">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
     <el-button @click="$router.push('create-menu')">创建菜单</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
</div>
</template>

<script>
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
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
