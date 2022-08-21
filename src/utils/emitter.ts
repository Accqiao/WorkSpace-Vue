import mitt, { type Emitter } from "mitt";
import {ElMessage} from "element-plus/es";




type Events = {
    func: string | number;
    addNum: number;
    subNum: number;
};
// 提供泛型参数让 emitter 能自动推断参数类型
const emitter = mitt<Events>();
//const emitter = mitt<any>();
//不想写这个<Events>就直接使用any,上下一样any
//const emitter: Emitter<any> = mitt();
export default emitter;




// 'e' 被推断为string类型
emitter.on("func", (one) => {
    ElMessage({
        message: '@/utils/emitter.ts 函数 ,' + one,
        grouping: true,
        type: 'success',
    })
});

// ts error: 类型 string 的参数不能赋值给类型 'number' 的参数
//emitter.emit("bar", "xx");

// ts error: otherEvent 不存在与 Events 的key中
// emitter.on("otherEvent", () => {
//     //
// });