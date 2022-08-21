<template>
    <div class="box3">
        <h2>依赖注入</h2>
      <el-tag class="tag" type="danger">{{ num }}</el-tag>
      <BoxLv3_1 />
    </div>
</template>

<script lang='ts' setup>
import BoxLv3_1 from "@/pages/ByValue/BoxLv3/BoxLv3_1.vue";
import {provide, ref} from "vue";
import {ElMessage} from "element-plus";

const num = ref(0)
const funAdd = (str: string)=>{
  ElMessage({
    message: '父组件: num++ ,' + str + "  " + num.value,
    grouping: true,
    type: 'success',
  })
  num.value++;
}
const funZero = ()=>{
  num.value = 0
}

provide('num', num)
provide('funAdd', funAdd)

</script>

<style scoped>
.tag{
  margin: 10px auto;
  width: 70px;
  height: 31px;
  display: block;
  line-height: 28px;
}
.box3 {
    margin: 10px 10px 20px;
    width: 200px;
    height: 400px;
    background-color:   #dedfe0;
    border-radius: 10px;
    text-align: center;
}
</style>