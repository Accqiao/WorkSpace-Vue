<template>
    <div class="box1_3_1">
      <el-button type="primary" plain @click="funAdd">Vuex ↑</el-button>
      <el-tag class="tag" type="danger">{{ num }}</el-tag>
      <el-tag class="tag" type="danger">{{ bigNum }}</el-tag>

    </div>
</template>

<script lang='ts' setup>
import {computed} from "vue";
import {useStore} from "@/store";
const store = useStore()


const num = computed(()=> store.state.byValue.count)
const bigNum = computed(()=> store.getters["byValue/doubleNum"])

const funAdd = ()=> {
  store.dispatch('byValue/funcAddOne')
}


</script>

<style scoped>
.tag{
  width: 40px;
  height: 31px;
  display: block;
  line-height: 28px;
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