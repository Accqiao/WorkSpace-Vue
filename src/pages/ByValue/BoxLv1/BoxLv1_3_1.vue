<template>
    <div class="box1_3_1">
      <el-button type="primary" plain @click="funAdd">加加加</el-button>
      <el-input class="in" v-model="input" placeholder="Please input" />
    </div>
</template>

<script lang='ts' setup>
// 导入mitt
import emitter from "@/utils/emitter";

import { ref } from 'vue'
const input = ref(2)

function funAdd() {
  // mitt推送让列表更新
  emitter.emit("addNum", input.value);
}
function funSub() {
  emitter.emit("subNum", input.value);
}

</script>

<style scoped>

.in{
  width: 50px;
  /*margin: 10px auto;*/
}
.box1_3_1 {
    /*margin:0 auto;*/
    width: 240px;
    height: 80px;
    background-color:  #95d475;
    border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content:space-evenly;
  align-items:center;
}
</style>