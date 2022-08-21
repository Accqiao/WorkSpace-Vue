<template>
  <div class="box3_1_1">
    <p>孙组件</p>
    <el-button type="primary" plain
               @click="handleClick">
      加加</el-button>

    <el-tag class="tag" type="danger">{{ num }}</el-tag>

  </div>
</template>

<script lang='ts' setup>
import {inject} from "vue";
const funAdd = inject('funAdd',Function)
const num = inject('num')

const handleClick = ()=>{
  funAdd("Nice！")
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
.box3_1_1 {
  margin: 10px;
  width: 160px;
  height: 180px;
  background-color:    #b1b3b8;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
}
</style>