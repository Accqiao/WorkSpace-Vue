<template>
  <div class="box">
    <h2>监听对象</h2>
    <el-input class="in" v-model="obj.name" />
    <el-input class="in" v-model="obj.age" />
    <el-input class="in" v-model="obj.sign.text" />
    <el-input class="in" v-model="obj.sign.mark" />

  </div>
</template>

<script setup lang="ts">

import {reactive, watch} from "vue";

const obj = reactive({
  name:'李白',
  age:"23",
  sign: {
    text:"lalala",
    mark:"know",
  },
})
watch(
    () => obj.sign,
    val => {
      console.log('lala:', val ,val.text)
    },
    { deep: true , immediate: true }
)
watch(
    () => obj,
    val => {
      console.log('OBJ:', val)
    },
    { deep: true , immediate: true }
)




</script>

<style scoped>
.box{
  text-align: center;
  background-color: #7ef8f3;
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