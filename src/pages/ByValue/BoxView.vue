<template>
    <div class="box">
      <h2>父组件</h2>
      <div class="nextBox">
        <el-tag class="tag" type="danger">「 Vuex全局 」</el-tag>
        <el-button type="primary" round plain @click="funcToZero">归零</el-button>
        <el-input class="in" v-model="input" />
        <el-button type="info" plain @click="funcAdd(input)">加Num</el-button>
        <el-button type="info" plain @click="funcSub(input)">减Num</el-button>
        <el-button type="info" round plain @click="funcAddOne">+1</el-button>

        <el-tag class="tag" type="success">state值：{{ count }}</el-tag>
        <el-tag class="tag" type="warning">getters加工：{{ doubleNum }}</el-tag>
        <el-tag class="tag" type="info">辅助函数:mapActions,mapGetters,mapState</el-tag>


      </div>
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
import {useModuleState} from "@/store/useMap/useState";
import {useModuleActions} from "@/store/useMap/useActions";
import {useModuleGetters} from "@/store/useMap/useGetters";
import {ref} from "vue";


const storeState = useModuleState('byValue', ['count'])
const storeGetters = useModuleGetters('byValue', ['doubleNum'])
const storeActions = useModuleActions('byValue', ['funcAdd','funcSub','funcAddOne','funcToZero',])

const input = ref(5)

const { count } = { ...storeState };
const { doubleNum } = { ...storeGetters };
const { funcAdd,funcSub,funcAddOne,funcToZero } = { ...storeActions };

</script>

<!--<script>-->
<!--import BoxLv1 from './BoxLv1/BoxLv1.vue';-->
<!--import BoxLv2 from './BoxLv2/BoxLv2.vue';-->
<!--import BoxLv3 from './BoxLv3/BoxLv3.vue';-->
<!--import {useState} from "@/store/useMap/useState";-->
<!--import {useActions} from "@/store/useMap/useActions";-->
<!--import {useGetters} from "@/store/useMap/useGetters";-->
<!--import {computed, ref} from "vue";-->


<!--export default {-->
<!--  components: {-->
<!--    BoxLv1,-->
<!--    BoxLv2,-->
<!--    BoxLv3,-->
<!--  },-->
<!--  setup() {-->
<!--    const input = ref(2)-->
<!--    const storeState = useState('byValue', ['count'])-->
<!--    const storeGetters = useGetters('byValue', ['dubleNum'])-->
<!--    const storeActions = useActions('byValue', ['funcAdd','funcSub','funcAddOne','funcToZero',])-->

<!--    const { count } = { ...storeState };-->
<!--    const { dubleNum } = { ...storeGetters };-->
<!--    const { funcAdd,funcSub,funcAddOne,funcToZero } = { ...storeActions };-->

<!--    return {-->
<!--      input,-->
<!--      dubleNum,-->
<!--      count,-->
<!--      funcAdd,-->
<!--      funcSub,-->
<!--      funcAddOne,-->
<!--      funcToZero,-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->


<style scoped>
.tag{
  width: auto;
  height: 31px;
  line-height: 28px;
}
.in{
  width: 50px;
  /*margin: 0 auto;*/
  height: 32px;
}
.box{
    background-color:  #c6e2ff;
    border-radius: 10px;
    text-align: center;
  overflow: hidden;
}
.nextBox{
    display: flex;
    justify-content: space-evenly;

}
</style>