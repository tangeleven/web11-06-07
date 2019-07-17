<template>
  <div class="home">
    <h2>home page</h2>
    <button v-permission="['admin', 'editor']">editor button</button>
    <button v-permission="['admin']">admin button</button>

    <!-- 自定义指令v-permission 只能删除挂载指令的元素，对于那些额外生成的和指令无关的元素无能为力，比如下面的tab组件 -->
    <el-tabs>
      <el-tab-pane label="用户管理" name="first" v-permission="['admin', 'editor']">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second" v-permission="['admin', 'editor']">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third" v-permission="['admin']">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth" v-permission="['admin', 'editor']">定时任务补偿</el-tab-pane>
    </el-tabs>
    
    <!-- 只能使用v-if实现 -->
    <el-tabs>
      <el-tab-pane label="用户管理" name="first" v-if="checkPermission(['admin', 'editor'])">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second" v-if="checkPermission(['admin', 'editor'])">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third" v-if="checkPermission(['admin'])">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth" v-if="checkPermission(['admin', 'editor'])">定时任务补偿</el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import store from "@/store"
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    checkPermission(permissionRoles) {
      const roles = store.getters && store.getters.roles;

      return roles.some(role => {
        return permissionRoles.includes(role);
      });
    }
  }
}
</script>
