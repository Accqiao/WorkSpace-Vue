
<template>
    <div class="box2">
      <h2>Ref父调子函数↓</h2>
      <div>Props</div>
      <el-button type="primary" plain @click="funAdd">计数+1</el-button>
      <el-button type="primary" plain @click="funChild">ref子函数</el-button>

      <el-tag class="tag" type="danger">{{ num }}</el-tag>

      <div class="bfc">
        <BoxLv2_1
            :num="num"
            @funSum="funSum"
            @funZero="funZero"
            ref="refChild"
        />
      </div>
    </div>
</template>

<script lang='ts' setup>
import BoxLv2_1 from './BoxLv2_1.vue';
import {ref} from "vue";

const num = ref(0)
const refChild = ref()

const funAdd = ()=>{
  num.value++
}
const funSum = (n: number)=>{
  num.value = num.value * n
}
const funZero = ()=>{
  num.value = 0
}

const funChild = () => {
  refChild.value.funChild(num.value)
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


.bfc{
  /*position: absolute;*/
  overflow: hidden;
  /*display: inline-block;*/
  /*float: left;*/
}
.box2 {
    margin: 10px 10px 20px;
    width: 200px;
    height: 400px;
    background-color:   #fcd3d3;
    border-radius: 10px;
    text-align: center;
}
</style>