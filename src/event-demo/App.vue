<template>
  <div id="app">
    <h1>Event Bus Demo</h1>
    <img src="../assets/logo.png">
    <TodoCount/>
    <Todo/>
    <Clear/>
  </div>
</template>

<script>
import TodoCount from './TodoCount.vue'
import Todo from './Todo.vue'
import Clear from './Clear.vue'

export default {
  name: 'app',
  components: {
    TodoCount,
    Todo,
    Clear
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
