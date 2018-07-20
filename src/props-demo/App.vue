<template>
  <div id="app">
    <h1> Props Demo </h1>
    <TodoCount
      :items="items"
    />
    <img src="../assets/logo.png">
    <Todo 
      :submit="submit.bind(this)"
      :items="items"
    />
    <Clear
      :clear="clear"
      :items="items"
    />
  </div>
</template>

<script>
import Todo from './Todo.vue'
import TodoCount from './TodoCount.vue'
import Clear from './Clear.vue'

export default {
  name: 'app',
  components: {
    Todo,
    TodoCount,
    Clear
  },
  data: function() {
    return {
      items: [{ message: "so hai" }]
    };
  },
  methods: {
    submit: function (input)  {
      this.items.push({ message: input })
      this.input = ""
    },
    clear: function ()  {
      this.items = []
    }
  }
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
