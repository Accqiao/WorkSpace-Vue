<template>
    <div class="box1">
        <h2>Vuex</h2>
        <el-button type="primary" plain @click="funAdd">Vuex +1</el-button>
        <el-tag class="tag" >{{ num }}</el-tag>
        <el-button type="primary" plain @click="funSub">Vuex -1</el-button>
        <div class="nextBox1">
            <BoxLv1_1 />
            <BoxLv1_2 />
        </div>
        <BoxLv1_3 />
    </div>
</template>

<script lang='ts' setup>
import BoxLv1_1 from './BoxLv1_1.vue';
import BoxLv1_2 from './BoxLv1_2.vue';
import BoxLv1_3 from './BoxLv1_3.vue';
import {computed} from "vue";
import {useStore} from "@/store";
const store = useStore()

const num = computed(()=> store.state.byValue.count)
const funAdd = ()=> {
  store.dispatch('byValue/funcAddOne')
}
const funSub = ()=> {
  store.dispatch('byValue/funcSub',1)
}


</script>

<style scoped>

.tag{
  width: 50px;
  height: 32px;
  line-height: 28px;
  margin: 0 5px;
}


.box1 {
    margin:10px 10px 20px;
    width: 500px;
    height: 400px;
    background-color:   #d1edc4;
    border-radius: 10px;
    text-align: center;
}
.nextBox1 {
    display: flex;
    justify-content: center;
}
</style>