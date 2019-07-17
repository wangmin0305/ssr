<template>
  <ul class="todo-main">
    <!-- 此处遍历数据 注意需要更改为去store中获取  利用$store -->
    <Item
      v-for="(todo, index) in $store.state.todos"
      :key="index"
      :index="index"
      :todo="todo"
      :delTodo="delTodo"
    />
  </ul>
</template>

<script>
  import Item from './Item'

  export default {
    name: "List",
    props: {
      todos: Array,
      delTodo: Function
    },
    components: {
      Item
    }
  }
</script>

<style scoped>
  /*列表*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
</style>
