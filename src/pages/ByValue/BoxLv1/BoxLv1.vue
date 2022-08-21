<template>
    <div class="box1">
        <h2>子组件1</h2>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <div class="nextBox1">
            <BoxLv1_1 />
            <BoxLv1_2 />
        </div>
    </div>
</template>

<script lang='ts' setup>
import BoxLv1_1 from './BoxLv1_1.vue';
import BoxLv1_2 from './BoxLv1_2.vue';

</script>

<style scoped>




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