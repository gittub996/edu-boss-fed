<template>
    <div class="createMenu">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>添加菜单</span>
            </div>
            <div>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="菜单名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="菜单路径">
                        <el-input v-model="form.path"></el-input>
                    </el-form-item>
                    <el-form-item label="上级菜单">
                        <el-select v-model="form.parentId" placeholder="请选择上级菜单">
                            <el-option label="无上级菜单" :value="'-1'"></el-option>
                            <el-option :label="menu.name" :value="menu.id" v-for="(menu, key) in pMenus" :key="key">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="描述">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="前端图标">
                        <el-input v-model="form.icon"></el-input>
                    </el-form-item>
                    <el-form-item label="是否显示">
                        <el-radio v-model="form.shown" :label="true">是</el-radio>
                        <el-radio v-model="form.shown" :label="false">否</el-radio>
                    </el-form-item>
                    <el-form-item label="排序">
                        <el-input-number v-model="form.orderNum" :min="1" :max="10" label="描述文字"></el-input-number>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
import { getMenusBypId, addMenu } from '@/services/menu'
export default {
    name: "create-menu",
    data() {
        return {
            form: {
                id:'',
                name: '',
                parentId: -1,
                path: '',
                icon: '',
                desc: '',
                shown: '',
                orderNum: ''
            },
            pMenus: []
        }
    },
    mounted() {
        this.init();
    },
    methods: {
       async init() {
            this.pMenus = getMenusBypId();
        },
        onSubmit() {
            try {
                addMenu(this.form)
                this.$message.success("操作成功")
            } catch (err) {
                this.$message.success("操作失败")
            }
        }
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
