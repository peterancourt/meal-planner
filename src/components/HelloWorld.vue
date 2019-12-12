<template>
  <div class="hello">
    <h1>Meal Planner</h1>
    <button @click="callFoods">Recipes</button>
  </div>
</template>

<script>
import { getFoods } from '../apis';
export default {
  name: 'HelloWorld',
  methods: {
    callFoods: function() {
      console.log(getFoods());
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
