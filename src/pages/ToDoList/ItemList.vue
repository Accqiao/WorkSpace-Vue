<template>
    <el-space
      fill="true"
      direction="vertical"
    >
      <el-card shadow="hover"
        v-for="(item,index) in dataSource.todolist.list"
        :key="index"
      >
        <ItemChild :item="item"/>
      </el-card>
      <div class="pagination">
        <el-pagination
          background
          :page-sizes="[3,5, 10]"
          layout="total, prev, pager, next, jumper,sizes"
          :total="dataSource.todolist.total"
          v-model:currentPage="currentPage"
          v-model:page-size="pageSize"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-space>
</template>

<script lang='ts' setup>
import ItemChild from './ItemChild.vue';
import {toRefs,ref,reactive,defineProps,onMounted} from 'vue'
import {Get_ItemByPages } from '@/services/Api_todoList'

const props = defineProps({
  select: String,
})

// const {select} =toRefs(props)
const textSelect = ref(props.select)

const currentPage = ref(2)
const pageSize = ref(5)
let dataSource: any = reactive({
  todolist: {
    list:[],
    page:10,
    num:20,
    total:30,
  }
})
const handleSizeChange = (val: number) => {
  pageSize.value = val;
  Get__ItemByPages(currentPage.value , pageSize.value)
}
const handleCurrentChange = (val: number) => {
  currentPage.value = val;
  Get__ItemByPages(currentPage.value , pageSize.value)
}
const Get__ItemByPages = async (page: number,num: number) => {
  const res = await Get_ItemByPages({page: page,num: num})
  dataSource.todolist = res;
}

onMounted(() => {
  // testPostFun()
  Get__ItemByPages(currentPage.value , pageSize.value),
  console.log(textSelect,1,2,3)
})
</script>
<style>
.el-card>.el-card__body{
  padding: 15px;
}
</style>