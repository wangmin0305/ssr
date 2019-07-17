<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header/>
      <List/> 
      <Footer/> 
    </div>
  </div>
</template>

<script>
// 引入组件......
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
export default {
  name: "App",
  
  components: {
    Header,
    Footer,
    List
  },
  methods: {
    // 添加一个
    // addTodo(todo) {
    //   this.todos.unshift(todo);
    // },
    // 删除选中
    // delTodo(index) {
    //   this.todos.splice(index, 1);
    // },
    // 选中所有
    // selectedAll(isCheck) {
    //   this.todos.forEach(todo => {
    //     todo.finished = isCheck;
    //   });
    // },
    //清除所有  通过filter方法清除所有finished属性为true的任务  todo=>!todo.finished(意思是todos只留下finised为false的todo)
    // delFinishedTodos(){
    //   this.todos = this.todos.filter(todo=>!todo.finished)
    // }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
