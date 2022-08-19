<template>
  <el-row :gutter="20">
            <el-col :span="2">
                <el-button type="success" :icon="Check" circle plain/>
                <el-button type="primary" :icon="Edit" circle plain size="small"
                  @click="handleInput"/>
            </el-col>
            <el-col :span="20">
              <template v-if="isEdit">
                <el-input
                    v-model="textContent"
                    autosize
                    type="textarea"
                />
                <el-input
                    v-model="textMark"
                    autosize
                    placeholder="Please input Mark"
                />
              </template>
              <template v-else>
                <span>{{props.item.content}}</span>
                <br/>
                <span>{{props.item.mark}}</span>
              </template>
            </el-col>
            <el-col :span="2"><el-button type="danger" :icon="Delete" circle plain/></el-col>
        </el-row>
</template>

<script lang='ts' setup>
import {Check,Delete,Edit} from '@element-plus/icons-vue'
import {defineProps,ref} from 'vue'
interface Props{
    item: {
      id: string,
      content: string,
      mark: string,
      finish: boolean,
      delete: boolean,
      updateTime: string,
      createTime: string,
    },
}
const props = defineProps<Props>()
const textContent = ref(props.item.content)
const textMark = ref(props.item.mark)
const isEdit = ref(false)

const handleInput = ()=>{
  isEdit.value = !isEdit.value;
  if(!isEdit.value)
  console.log(textContent.value,textMark.value)
}
</script>

<style>

</style>