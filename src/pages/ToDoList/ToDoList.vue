<template>
  <!-- <el-button :plain="true" @click="open">Show message</el-button>
  <el-button plain @click="open4"> Top Left </el-button> -->
  <el-tabs v-model="activeName" class="box" type="card" @tab-change="handleChange">
    <el-tab-pane v-for="item in tableTabs" :key="item.name" :label="item.title" :name="item.name">
      <ItemList :select="item.name"  v-if="item.name == activeName" />
    </el-tab-pane>
    
  </el-tabs>


</template>

<script lang='ts' setup>
import ItemList from "./ItemList.vue"

import { ref ,provide } from "vue";


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

const handleChange = (name: string) => {
  console.log("点击", name)
}
const changeTabs = (tab: string) => {
  console.log("change",tab)
  activeName.value = tab;
}
provide('changeTabs', changeTabs)



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
