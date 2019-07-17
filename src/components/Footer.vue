<template>
  <div class="todo-footer">
    <label>
      <!-- 绑定一个属性isCheck -->
      <input type="checkbox" v-model="isCheck">
    </label>
    <span>
      <span>已完成{{finishedCount}}件</span>
      / 总计{{totalCount}}件
    </span>
    <!-- 注意 是调用store中的方法delFinishedTodos 利用$store.dispatch(delFinishedTodos)  -->
    <button class="btn btn-warning"
    @click="$store.dispatch('delFinishedTodos')">清除已完成任务</button>
  </div>
</template>

<script>
// 引入getters 是一个对象
import {mapGetters} from 'vuex'
export default {
  name: "Footer",
  // 夫传子
  // props: {
  //   todos: Array,
  //   selectedAll: Function,
  //   delFinishedTodos: Function
  // },
  // 写在computed钩子函数中，用于计算
  computed: {
    // finishedCount() {
    //   // 使用reduce()函数拿到已完成的数据 根据todo的finished属性判断已完成的total加一还是加零
    //   return this.todos.reduce(
    //     (total, todo) => total + (todo.finished ? 1 : 0),
    //     0
    //   );
    // },
    
// 拿到getters中的两个状态
    ...mapGetters(['finishedCount','totalCount']),
    isCheck: {
      // 任何属性都有两个方法，get取值，set设值
      // 这一步获取value  此处获取的是一个布尔值
      get() {
        // return (
        //   this.finishedCount === this.todos.length && this.todos.length > 0
        // );
        return this.$store.getters.isCheckedAll
      },
      // 此处设置，并且调用函数
      set(value) {
        // this.selectedAll(value);
        this.$store.dispatch('selectedAll', value)
      }
    }
  }
};
</script>

<style scoped>
/*尾部*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
