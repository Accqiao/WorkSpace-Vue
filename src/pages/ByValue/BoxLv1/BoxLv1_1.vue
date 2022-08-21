<template>
    <div class="box1_1">
        <h2>兄弟组件mitt →</h2>
        <el-tag class="tag" type="danger">{{ num }}</el-tag>
      <el-button type="primary" plain @click="fun">Func</el-button>
      <el-input class="in" v-model="input" placeholder="Please input" />

    </div>
</template>

<script lang='ts' setup>


// 导入mitt
import emitter from "@/utils/emitter";
import {onBeforeUnmount, onMounted, ref} from "vue";
import {ElMessage} from "element-plus/es";

const num = ref(0)
const input = ref('lala')

const fun = ()=>{
  emitter.emit("func", input.value);
}

// 监听订阅推送
emitter.on("addNum", (n: number) => {
  num.value = num.value + n;
});
emitter.on("subNum", (n: number) => {
  num.value = num.value - n;
});




onBeforeUnmount(() => {
  // 移除订阅推送
  emitter.off("mitterPage");
  // 移除全部事件
  //emitter.all.clear();
});

</script>

<style scoped>
.in{
  width: 60px;
  margin: 0 10px;
  height: 32px;
}
.tag{
  margin: 10px auto;
  width: 70px;
  height: 31px;
  display: block;
  line-height: 28px;
}
.box1_1 {
    margin: 10px;
    width: 200px;
    height: 160px;
    background-color: #afdaa3;
    border-radius: 10px;
    text-align: center;
}
</style>