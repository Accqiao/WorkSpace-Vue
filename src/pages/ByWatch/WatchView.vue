<template>
  <div class="boxView">
    <BoxValue/>
    <BoxObj/>
  </div>
</template>

<script lang='ts' setup>
import BoxObj from "@/pages/ByWatch/BoxObj.vue";
import BoxValue from "@/pages/ByWatch/BoxValue.vue";
</script>

<style scoped>
.boxView{
  background-color: #95d475;
  width: 800px;
  height: 400px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
}

</style>