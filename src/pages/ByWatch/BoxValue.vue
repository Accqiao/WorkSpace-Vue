<template>
  <div class="box">
    <h2>监听单个值</h2>
    <el-input class="in" v-model="input" />
    <br/>
    <h2>监听多个值</h2>
    <el-input class="in" v-model="input2" />
    <el-input class="in" v-model="input3" />

  </div>

</template>

<script setup lang="ts">
import {ElMessage} from "element-plus";
import {ref, watch} from "vue";

const input = ref(0)
const input2 = ref(2)
const input3 = ref(3)

watch(input, (newVal, oldVal) => {
  console.log({ newVal, oldVal })
  ElMessage('Watch监听: ' + newVal + "    [ old: " + oldVal+" ]",)
})

watch([input2,input3], (newVal, oldVal) => {
  console.log({ newVal, oldVal })
  ElMessage('Watch监听: ' + newVal + "    [ old: " + oldVal+" ]")
})


</script>

<style scoped>
.box{
  text-align: center;
  background-color: #95d475;
  width: 300px;
  height: 300px;
  /*display: flex;*/
  /*justify-content: space-evenly;*/
}
.in{
  width: 100px;
  margin: 5px;
}
</style>