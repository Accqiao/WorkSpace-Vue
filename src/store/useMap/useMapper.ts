import { useStore } from '@/store'
import { computed } from 'vue'

export function useStateMapper(mapper: string[], mapFn: any) {
    const store = useStore();
    const storeStateFns = mapFn(mapper);
    const storeState = {};
    Object.keys(storeStateFns).forEach(fnKey => {
        // vuex源码中mapState和mapGetters的方法中使用的是this.$store,所以更改this绑定
        const fn = storeStateFns[fnKey].bind({ $store: store });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        storeState[fnKey] = computed(fn)

    })

    return storeState
}

export function useActionMapper(mapper: string[], mapFn: any) {
    const store = useStore();
    const storeActionsFns = mapFn(mapper);
    const storeAction = {};
    Object.keys(storeActionsFns).forEach(fnKey => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        storeAction[fnKey] = storeActionsFns[fnKey].bind({ $store: store })
    })

    return storeAction
}
