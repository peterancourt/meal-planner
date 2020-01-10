<template>
  <div id="app">
    <Heading/>
    <Search @searchTermEvent="getRecipes"/>
    <div v-if="recipes">
        <div v-for="(recipe, index) in recipes" :key="index">
            <Recipe :recipe="recipe"/>
        </div>
    </div>
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
            recipes: {}
        }
    }, 
    components: {
        Recipe,
        Search,
        Heading
    },
    methods: {
        getRecipes(value) {
            const recipeResponse = getFoods(value);
            recipeResponse.then((response) => {
                this.recipes = response.hits;
            })
            console.log(this.recipes);
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
