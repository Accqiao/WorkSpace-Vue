<template>
  <!-- <el-button :plain="true" @click="open">Show message</el-button>
  <el-button plain @click="open4"> Top Left </el-button> -->
  <el-tabs
    v-model="activeName"
    class="box"
    type="card"
    @tab-click="handleClick"
  >
    <el-tab-pane
      v-for="item in tableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
    </el-tab-pane>
    <ItemList :select = "activeName"/>
  </el-tabs>


</template>

<script lang='ts' setup>
import ItemList from "./ItemList.vue"
import { ElMessage, ElNotification } from 'element-plus'
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('unfinish')
const tableTabs = ref([
  {
    title: '全部',
    name: 'all',
  },
  {
    title: '未完成',
    name: 'unfinish',
  },
  {
    title: '已完成',
    name: 'finish',
  },
  {
    title: '已删除',
    name: 'delete',
  },

])

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}


const open = () => {
  ElMessage({
    message: 'this is a message Test 2.0 !',
    grouping: true,
    type: 'success',
    center: true,
    showClose: true,
  })
}
const open4 = () => {
  ElNotification({
    title: 'Custom Position',
    message: "I'm at the top left corner",
    type: 'info',
    position: 'top-right',
  })
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box{
  width: 800px;
  margin: 0 auto;
}
.el-space{
  width: 100%;
}
.pagination{
  width: auto;
  margin: 0 auto;
}

</style>
