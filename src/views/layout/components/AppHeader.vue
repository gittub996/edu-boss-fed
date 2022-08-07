<template>
    <div class="app-header">
        <!-- 左侧面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 右侧下拉框 -->
        <el-dropdown>
            <span class="el-dropdown-link">
                <!-- 用户头像使用了avatar组件 -->
                <el-avatar size="30"
                    :src="userInfo.portImg || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'">
                </el-avatar><i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>{{ userInfo.userName || '用户信息' }}</el-dropdown-item>
                <!-- @click上的元素为自定义元素，要使用原生dom操作需要使用修饰符 -->
                <el-dropdown-item @click.native="handleLogout" divided>登出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

    </div>
</template>

<script>
import { getUserInfo } from '@/services/user'

export default {
    name: "AppHeader",
    data() {
        return {
            userInfo: {}
        }
    },
    mounted() {
        this.loadUserInfo();
    },
    methods: {
        async loadUserInfo() {
            this.userInfo = getUserInfo();
            console.log(this.userInfo)
        },
        handleLogout() {
            this.$confirm('确认退出吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // 删除本地存储的数据
                this.$store.commit("setCurrentUser", null)
                // 跳转到登录页
                this.$router.push({ name: "login" })
                this.$message({
                    type: 'success',
                    message: '退出成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消退出'
                });
            });
        }
    }
}
</script>
<style lang="scss">
.app-header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between; //space-around

    .el-dropdown-link {
        display: flex;
        align-items: center;
    }
}
</style>
