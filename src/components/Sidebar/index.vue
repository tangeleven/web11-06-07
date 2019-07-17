<template>
   <div>
       <el-scrollbar wrap-class="scrollbar-wrapper">
           <el-menu
               
                :background-color="variables.menuBg"
                :text-color="variables.menuText"
                :unique-opened="false"
                :active-text-color="variables.menuActiveText"
                :collapse-transition="false"
                mode="vertical"
            >
                <!-- 
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3" disabled>消息中心</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
                <sidebar-item
                    v-for="route in permission_routes"
                    :key="route.path"
                    :item="route"
                    :base-path="route.path"
                />
            </el-menu>
       </el-scrollbar>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
    components: {
        SidebarItem
    },
    computed: {
        ...mapGetters(["permission_routes"]),
        variables() {
            return {
                menuText: "#bfcbd9",
                menuActiveText: "#409EFF",
                menuBg: "#304156"
            };
        }
    },
    created() {
        console.log(this.permission_routes);
        
    }
}

</script>
<style lang='scss' scoped>

</style>