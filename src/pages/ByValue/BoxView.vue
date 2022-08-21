<template>
    <div class="box">
        <h2>父组件</h2>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <div class="nextBox">
            <BoxLv1/>
            <BoxLv2/>
            <BoxLv3/>
        </div>
        
    </div>
</template>

<script lang='ts' setup>
import BoxLv1 from './BoxLv1/BoxLv1.vue';
import BoxLv2 from './BoxLv2/BoxLv2.vue';
import BoxLv3 from './BoxLv3/BoxLv3.vue';
</script>

<style scoped>


.box{
    background-color:  #c6e2ff;
    border-radius: 10px;
    text-align: center;
  overflow: hidden;
}
.nextBox{
    display: flex;
    justify-content: center;

}
</style>