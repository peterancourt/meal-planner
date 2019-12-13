<template>
  <div id="app">
    <Heading/>
    <Search @searchTermEvent="getRecipes"/>
    <Recipe/>
  </div>
</template>

<script>
import Recipe from './components/Recipe.vue';
import Search from './components/Search.vue';
import Heading from './components/Heading.vue';
import { getFoods } from './services/recipeApis';

export default {
    name: 'App',
    data() {
        return {
            
        }
    }, 
    components: {
        Recipe,
        Search,
        Heading
    },
    methods: {
        getRecipes(value) {
            const recipeData = getFoods(value);
            console.log(recipeData);
        }
    }
}
</script>

<style>
.c-app-heading
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
