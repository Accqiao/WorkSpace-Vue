<template>
  <div class="space">
    <el-card shadow="hover" v-for="(item,index) in dataSource.todolist.list" :key="index">
      <DeleteItem :item="item" v-if="textSelect == 'delete' " />
      <ItemChild :item="item" :select="textSelect" v-else />
    </el-card>
  </div>
  <div class="pagination">
    <el-pagination background :page-sizes="[3,5, 10]" layout="total, prev, pager, next, jumper,sizes"
      :total="dataSource.todolist.total" v-model:currentPage="currentPage" v-model:page-size="pageSize"
      @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </div>
</template>

<script lang='ts' setup>
import ItemChild from './ItemChild/ItemView.vue';
import DeleteItem from './ItemChild/DeleteItem.vue';
import { Get_ItemByPages } from '@/services/Api_todoList'
import { toRefs, ref, reactive, defineProps, defineEmits} from 'vue'
import {
  onBeforeMount, onMounted,
  onBeforeUpdate, onUpdated,
  onBeforeUnmount, onUnmounted } from 'vue'
const props = defineProps<{
  select: string
}>()

const emit = defineEmits<{
  (e: 'changeTabsEmit', tab:string): void
}>()

// const props = defineProps({
//   select: String,//
// })
//const emit = defineEmits(['changeTabsEmit'])
// const {select} =toRefs(props)
const textSelect = ref(props.select)
const currentPage = ref(1)
const pageSize = ref(3)
const dataSource = reactive({
  todolist: {
    list:[],
    page:1,
    num:5,
    total:0,
  }
})

const handleClick = () => {
  console.log("change2")
  emit('changeTabsEmit', "okkkkk")
}


const handleSizeChange = (val: number) => {
  pageSize.value = val;
  Get__ItemByPages(currentPage.value , pageSize.value)
}
const handleCurrentChange = (val: number) => {
  currentPage.value = val;
  Get__ItemByPages(currentPage.value , pageSize.value)
}
const Get__ItemByPages = async (page: number,num: number) => {
  const res: any = await Get_ItemByPages(textSelect.value, {page: page, num: num})
  console.log('get Res',res)
  dataSource.todolist = res;
}

onMounted(() => {
  // testPostFun()
  Get__ItemByPages(currentPage.value, pageSize.value),
    console.log("挂载完成",textSelect.value)
})

//挂载前。
onBeforeMount(() => {
  console.log('挂载前onBeforeMount', textSelect.value);
}),
//挂载完成。在这个里面发送异步请求。调用接口。

//修改后，页面重新挂载前
onBeforeUpdate(() => {
  console.log('页面重新挂载前onBeforeUpdate', textSelect.value);
})
//修改后，页面重新挂载完成
onUpdated(() => {
  console.log('页面重新挂载完成onUpdated', textSelect.value);
})
//卸载前
onBeforeUnmount(() => {
  console.log('卸载前onBeforeUnmount', textSelect.value);
})
//卸载完成
onUnmounted(() => {
  console.log('卸载完成onUnmounted', textSelect.value);
})
</script>
<style>




.el-card{
  margin-top: 8px;
}
.el-card>.el-card__body{
  padding: 15px;
}
.space{
  width: 100%;
  min-height: 300px;
}
.pagination{
  margin-top: 10px;
}
.pagination>.el-pagination{
  display: flex;
  justify-content: center;
}

</style>