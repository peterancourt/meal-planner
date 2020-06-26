<template>
  <div id="app">
    <Heading/>
    <Search @searchTermEvent="getRecipes"/>
    <div v-if="recipes">
        <div class="o-grid-system c-container" v-for="(recipe, index) in recipes" :key="index">
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
.o-grid-system {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-areas: "recipe recipe recipe recipe recipe beer beer";
    grid-column-gap: 10px;
}
.c-container {
    border: 1px #33D7FF solid;
    border-radius: 25px;
    background-color: #33D7FF;
    padding: 20px;
    margin-bottom: 20px;
}
</style>
