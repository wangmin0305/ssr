// getters用于定义一些不会影响到原始的state状态的操作和一些数据（所以需要传入参数state），在哪使用getter一样需要引入，
export default {
    // 已经完成的计划数量
    // 传入参数 state 状态
    finishedCount(state) {
        // 使用reduce()函数拿到已完成的数据 根据todo的finished属性判断已完成的total加一还是加零
        return state.todos.reduce(
            (total, todo) => total + (todo.finished ? 1 : 0),
            0
        );
    },
    // 计划的总数量
    totalCount(state) {
        return state.todos.length;
    },
    // 判断是否全部选中，此处返回的是布尔值
    isCheckedAll(state, getter) {
        // 此处需要使用getter中的数据finishedCount，所以要传入参数getter
        return getter.finishedCount === state.todos.length && state.todos.length > 0;
    }
}