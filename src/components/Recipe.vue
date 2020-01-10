<template>
    <div class="c-recipe">
        <picture>
            <img :src="recipe.recipe.image">
        </picture>
        <div>
            <a :href="recipe.recipe.url">{{ recipe.recipe.label }}</a>
            <h4>Serves: {{ recipe.recipe.yield }}</h4>
            <h4>Ingredients:</h4>
            <ul>
                <li v-for="(ingredient, index) in recipe.recipe.ingredients" :key=index>
                    {{ ingredient.text }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        recipe: Object
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .c-recipe {
        border: 1px solid blue;
        font-family: Helvetica;
        //&--details {

        //}
    }
</style>
