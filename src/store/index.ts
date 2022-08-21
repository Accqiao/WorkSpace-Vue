import { createStore, Store, useStore as baseUseStore} from 'vuex'
import { InjectionKey } from 'vue'
import byValue from './modules/byValue'
import {RootStateTypes,AllStateTypes} from "@/store/interface";



export default createStore<RootStateTypes>({
  state:{
    num: 0,
  },
  modules: {
    byValue: byValue,
  }
})

export  const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key);
}