import { mapState, createNamespacedHelpers } from 'vuex'

import { useStateMapper } from './useMapper'

/**
 *
 * @param {*} moduleName 模块名称
 * @param {*} mapper state属性集合 ['name', 'age']
 * @returns
 */
export function useModuleState(moduleName: string, mapper: string[]) {
    let mapperFn = mapState;

    // 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapState方法
    // createNamespacedHelpers 创建基于某个命名空间辅助函数。
    // 它返回一个对象，对象里有新的绑定在给定命名空间值上的组件绑定辅助函数
    if (checkType(moduleName) === "[object String]" && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapState
    }

    return useStateMapper(mapper, mapperFn)
}

export function useState(mapper: string[]) {

    return useStateMapper(mapper, mapState)
}

function checkType(data: string) {
    return Object.prototype.toString.call(data)
}

