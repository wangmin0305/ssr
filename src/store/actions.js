// 从mutation-types中引入函数
import {
    ADD_TODO,
    DEL_TODO,
    SELECTED_ALL_TODO,
    DEL_FINISHED_TODO
} from './mutation-types';
// 如下模块是用于去调用mutations中的方法实现对state的控制
// 需要使用{commit}拿到
export default{
    // 添加一条记录
    addTodo({commit},todo){
        commit(ADD_TODO,{todo})
    },
    // 删除一条记录
    delTodo({commit},todo){
        commit(DEL_TODO,{todo})
    },
    // 选中所有记录
    selectedAll({commit},value){
        commit(SELECTED_ALL_TODO,{value})
    },
    // 删除已完成记录
    delFinishedTodos({commit}){
        commit(DEL_FINISHED_TODO)
    },

}