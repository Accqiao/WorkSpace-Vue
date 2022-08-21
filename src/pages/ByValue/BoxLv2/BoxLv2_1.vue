<template>
    <div class="box2_1">
        <h2>Emits子调父函数↑</h2>
        <el-button type="primary" plain
                   @click="handleMult">
          相乘*2</el-button>
        <el-button type="primary" plain
                   @click="handleZero">
          归零</el-button>

      <el-tag class="tag" type="danger">{{ num }}</el-tag>

    </div>
</template>

<script lang='ts' setup>

import {defineEmits, defineProps, defineExpose, ref} from "vue";
import {ElMessage} from "element-plus";

const props = defineProps<{
  num: number
}>()

const emit = defineEmits<{
  (e: 'funSum', tab:number): void
  (e: 'funZero'): void
}>()


const handleMult = () => {
  emit('funSum', 2)
}
const handleZero = () => {
  emit('funZero')
}



const funChild = (value: number) => {
  ElMessage({
    message: '你调用了子组件的函数, 当前Num:'+value,
    grouping: true,
    type: 'success',
  })
}

defineExpose({ funChild })
</script>

<style scoped>

.tag{
  margin: 10px auto;
  width: 70px;
  height: 31px;
  display: block;
  line-height: 28px;
}
.box2_1 {
    margin: 10px;
    width: 180px;
    height: 200px;
    background-color:  #fab6b6;
    border-radius: 10px;
    text-align: center;
  overflow: hidden;
}
</style>