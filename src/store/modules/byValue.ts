import {Module} from "vuex";
import {RootStateTypes,ByValueStateTypes} from "@/store/interface";


const byValue: Module<ByValueStateTypes, RootStateTypes> = {
    namespaced:true,
    state: {
        count: 0
    },
    getters: {
        doubleNum (state:any) {
            return state.count * 2
        }
    },
    mutations: {
        FuncAdd(state:any,value:number){
            state.count +=value
        },
        FuncSub(state:any,value:number){
            state.count -=value
        },
        FuncAddOne(state:any){
            state.count ++
        },
        FuncToZero(state:any) {
            state.count =0
        },
    },
    actions: {
        funcAdd (context:any,value: number) {
            context.commit('FuncAdd', value)
        },
        funcSub (context:any,value: number) {
            context.commit('FuncSub', value)
        },
        funcAddOne (context:any) {
            context.commit('FuncAddOne')
        },
        funcToZero (context:any) {
            context.commit('FuncToZero')
        },

    },
}

export default byValue;
