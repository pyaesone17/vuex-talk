<template>
  <div id="todo">
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.message }}
      </li>
    </ul>
    <h3>{{ items.length }}</h3>
    <div>
      <input type="text" v-model="input"/>
      <button v-on:click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "Todo",
    props: {
      msg: String
    },
    data: function() {
      return {
        input: '',
        items: [{ message: "so hai" }]
      };
    },
    methods: {
      submit: function ()  {
        this.items.push({ message: this.input })
        this.input = ""
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#todo{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 500px;
}

li {
  border-bottom: 1px solid rgb(230, 230, 230);
  padding: 15px;
}

input{
  height: 40px;
  width: 300px;
}

button{
  height: 45px;
}
</style>
