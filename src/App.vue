<template>
  <div id="app">
    <Heading/>
    <Search @searchTermEvent="getRecipes"/>
    <div v-if="recipes">
        <div v-for="(recipe, index) in recipes" :key="index">
            <Recipe :recipe="recipe"/>
            <beer-pairing :searchQuery="searchTerm"/>
        </div>
    </div>
  </div>

</template>

<script>
import Recipe from './components/Recipe.vue';
import Search from './components/Search.vue';
import Heading from './components/Heading.vue';
import BeerPairing from './components/BeerPairing.vue';
import { getFoods } from './services/recipeApis';

export default {
    name: 'App',
    data() {
        return {
            recipes: {},
            searchTerm: ''
        }
    }, 
    components: {
        Recipe,
        Search,
        Heading,
        BeerPairing
    },
    methods: {
        getRecipes(value) {
            this.searchTerm = value;
            const recipeResponse = getFoods(value);
            recipeResponse.then((response) => {
                this.recipes = response.hits;
            })
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
