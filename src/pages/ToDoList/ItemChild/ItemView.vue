<template>
  <el-row :gutter="20">
    <el-col :span="2">
      <el-button type="success" :icon="props.item.oksign == 0 ? Check : Back" circle :disabled="isEdit" plain
        @click="handleFinish(props.item.oksign)" />
      <el-button type="primary" :icon="Edit" circle plain size="small" @click="handleUpdate" />
    </el-col>
    <el-col :span="20">
      <template v-if="isEdit">
        <el-input v-model="textContent" autosize type="textarea" />
        <el-input v-model="textMark" autosize placeholder="Please input Mark" />
      </template>
      <template v-else>
        <span :class="props.item.oksign == 0 ? '' : 'finish'">
          {{props.item.content}}
        </span>
        <br />
        <span :class="props.item.oksign == 0 ? '' : 'finish'">{{props.item.mark}}</span>
      </template>
    </el-col>
    <el-col :span="2">
      <el-button type="danger" :icon="Delete" :disabled="isEdit" circle plain @click="handleDelete" />
    </el-col>
  </el-row>
</template>

<script lang='ts' setup>
import { Check, Delete, Edit, Back } from '@element-plus/icons-vue'
import { defineProps, ref, inject} from 'vue'
import { Post_Update, Post_Change } from '@/services/Api_todoList'
import { ElMessage } from 'element-plus'

interface Props{
    item: {
      id: string,
      content: string,
      mark: string,
      oksign: number,
      delsign: number,
      updateTime: string,
      createTime: string,
    },
    select: string,
}
const props = defineProps<Props>()
const textContent = ref(props.item.content)
const textMark = ref(props.item.mark)
const isEdit = ref(false)
const changeTabs = inject('changeTabs')

const handleFinish = (oksign: number)=>{
  let sign: boolean = Post__FinishDelete(props.item.id, 'finish', oksign ? 0 : 1)
  if (sign) {
    ElMessage({
      message: '修改成功 !',
      type: 'success',
      center: true,
      showClose: true,
    })
    changeTabs(oksign ? "unfinish" : "finish");
  } else {
    ElMessage({
      message: '修改失败，请稍后再试 !',
      grouping: true,
      type: 'error',
      center: true,
      showClose: true,
    })
  }
}
const handleToUnFinish = () => {
  let sign: boolean = Post__FinishDelete(props.item.id, 'finish', 0)
  if (sign) {
    ElMessage({
      message: '修改成功 !',
      type: 'success',
      center: true,
      showClose: true,
    })
    changeTabs("unfinish");
  } else {
    ElMessage({
      message: '修改失败，请稍后再试 !',
      grouping: true,
      type: 'error',
      center: true,
      showClose: true,
    })
  }
}

const handleUpdate = ()=>{
  isEdit.value = !isEdit.value;
  if(!isEdit.value){
     console.log(textContent.value,textMark.value)
    let sign : boolean =  Post__Update(props.item.id, textContent.value, textMark.value)
    if(sign){
        ElMessage({
          message: '修改成功 !',
          grouping: true,
          type: 'success',
          center: true,
          showClose: true,
        })
      changeTabs("unfinish");
    }else{
      ElMessage({
        message: '修改失败，请稍后再试 !',
        grouping: true,
        type: 'error',
        center: true,
        showClose: true,
      })
    }
  }


}
const handleDelete = () => {
  let sign: boolean = Post__FinishDelete(props.item.id, 'delete', 1)
  if (sign) {
    ElMessage({
      message: '修改成功 !',
      type: 'success',
      center: true,
      showClose: true,
    })
  } else {
    ElMessage({
      message: '修改失败，请稍后再试 !',
      grouping: true,
      type: 'error',
      center: true,
      showClose: true,
    })
  }
}

const Post__Update = async (id: string, content: string | null, mark: string | null)=>{
  const res: any = await Post_Update({id: id,content: content, mark: mark })
  return res.isOK;
}
const Post__FinishDelete = async (id: string, type: string, sign: number)=>{
  const res: any = await Post_Change({id, type, sign})
  return res.isOK;
}

</script>

<style>

.finish {
  text-decoration: line-through;
  color: #707477;
}
</style>