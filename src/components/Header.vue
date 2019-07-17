<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入今天的任务清单，按回车键确认"
      v-model="title"
      @keyup.enter="addItem"
    />
  </div>
</template>

<script>
  export default {
    name: "Header",
    // 父传子
    props: {
      addTodo: Function
    },
    data() {
      return {
        title: ''
      }
    },
    methods: {
      addItem() {
        // 1.1 判断是否合理
        // 去掉前后空格 
        const title = this.title.trim();
        if(!title){
           alert('输入的内容不能为空');
           return;
        }
        // 1.2 生成一个todo对象
        const todo = {title, finished: false};
        // 1.3 调用方法
        // this.addTodo(todo);
        // 通过 this.$store.dispatch()方法拿到store中定义在actions中的方法，且传入参数todo
        this.$store.dispatch('addTodo',todo)
        // 1.4 清空输入框
        this.title = ''
      }
    }
  }
</script>

<style scoped>
  /*头部*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    outline: none;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(255, 0, 0, 0.8);
    box-shadow: inset 0 1px 1px rgba(255, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
  }
</style>
