// 从mutation-types中引入函数
import {
    ADD_TODO,
    DEL_TODO,
    SELECTED_ALL_TODO,
    DEL_FINISHED_TODO
} from './mutation-types';
// 如下模块是用于改变state的状态
export default {
    // 在此处改变state的状态 因为引入后是字符串，需要使用[]将其变为一个可使用的函数名，并且传入参数，其中第一个参数是state，后面的则是需要传入的函数参数{}
    [ADD_TODO](state, { todo }) {
        // 如下，需要改变状态时都需要用   state.  去调用
        state.todos.unshift(todo);
    },
    [DEL_TODO](state, { index }) {
        // 如下，需要改变状态时都需要用   state.  去调用
        state.todos.splice(index, 1);
    },
    [SELECTED_ALL_TODO](state, { value }) {
        // 如下，需要改变状态时都需要用   state.  去调用
        state.todos.forEach(todo => {
            todo.finished = value
        })
    },
    [DEL_FINISHED_TODO](state) {
        state.todos = state.todos.filter(todo => !todo.finished)
    },
}