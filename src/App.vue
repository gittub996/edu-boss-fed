<template>
  <div id="app">
    <div id="nav">
      <h3>拉钩教育</h3>
    </div>
    <router-view/>

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

  </div>
</template>

<style lang="scss">
  div{
    background-color:  $success-color;
  }
</style>
