<template>
    <div class="box1_2">
        <h2>← mitt兄弟组件</h2>
        <el-button type="primary" plain @click="funAdd">加加加</el-button>
        <el-button type="primary" plain @click="funSub">减减减</el-button>
      <el-input class="in" v-model="input" placeholder="Please input" />
    </div>
</template>

<script lang='ts' setup>
// 导入mitt
import emitter from "@/utils/emitter";

import { ref } from 'vue'
const input = ref(3)

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
  margin: 10px auto;
}
.box1_2 {
    margin:  10px;
    width: 200px;
    height: 160px;
    background-color: #afdaa3;
    border-radius: 10px;
    text-align: center;
}
</style>