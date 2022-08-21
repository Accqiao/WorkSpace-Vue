<template>
    <div class="box1_3">
      <el-button type="primary" plain @click="funAdd">加加加</el-button>
      <el-input class="in" v-model="input" placeholder="Please input" />
      <BoxLv1_3_1 />
    </div>
</template>

<script lang='ts' setup>
// 导入mitt
import emitter from "@/utils/emitter";

import { ref } from 'vue'
import BoxLv1_3_1 from "@/pages/ByValue/BoxLv1/BoxLv1_3_1.vue";
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
  /*margin: 0 auto;*/
  height: 32px;
}
.box1_3 {
    margin:0 auto;
    width: 420px;
    height: 100px;
    background-color: #afdaa3;
    border-radius: 10px;
    text-align: center;
    overflow: hidden;
    display: flex;
    justify-content:space-evenly;
  align-items:center;

}
</style>