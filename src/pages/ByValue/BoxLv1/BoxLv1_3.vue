<template>
    <div class="box1_3">
      <el-button type="primary" plain @click="funSub">Vuex ↓</el-button>
      <el-input class="in" v-model="input" />
      <BoxLv1_3_1 />
    </div>
</template>

<script lang='ts' setup>
// 导入mitt

import { ref } from 'vue'
import BoxLv1_3_1 from "@/pages/ByValue/BoxLv1/BoxLv1_3_1.vue";
import store from "@/store";

const input = ref(4)


const funSub = ()=> {
  store.dispatch('byValue/funcSub',input.value)
}

</script>

<style scoped>
.tag{
  margin: 10px auto;
  width: 70px;
  height: 31px;
  display: block;
  line-height: 28px;
}
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