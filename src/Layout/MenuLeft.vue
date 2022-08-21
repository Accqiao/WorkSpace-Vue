<template>

  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="todolist">
        <el-icon><Notebook /></el-icon>
        <template #title>ToDoList</template>
    </el-menu-item>
    <el-menu-item index="byvalue">
      <el-icon><setting /></el-icon>
      <template #title>组件传值</template>
    </el-menu-item>
    <el-sub-menu index="hello">
      <template #title>
        <el-icon><Box /></el-icon>
        <span>HelloWorld</span>
      </template>
      <el-menu-item index="hello-world">
        <router-link to="/hello/world">HelloWorld</router-link>
      </el-menu-item>
      <el-menu-item-group title="Group Two">
       <el-menu-item index="hello-home">hello-home</el-menu-item>
        <el-menu-item index="hello-about">hello-about</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="collapse">
      <el-icon v-if="isCollapse"><ArrowRight /></el-icon>
      <el-icon v-else><ArrowLeft /></el-icon>
      <template #title>Collapse</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import {useRouter,useRoute} from "vue-router";
import {ArrowLeft,ArrowRight,Setting,Notebook,Box} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
// const route = useRoute()
const router = useRouter()

const isCollapse = ref(false)


const notFunc = () => {
  ElMessage('this is a message.')
}
const handleSelect = (key: string) => {
  switch(key){
    case "collapse":
      isCollapse.value = !isCollapse.value;
      break;
    case "todolist":
      router.push('/todolist')
      break;
    case "byvalue":
      router.push('/byvalue')
      break;
    case "hello-home":
      router.push({ path: '/hello/home' })
      break;
    case "hello-about":
      router.push('/hello/about')
      break;
  }
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log("handleOpen",key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log("handleClose",key, keyPath)
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
