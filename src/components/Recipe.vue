<template>
    <div class="c-recipe--container">
        <img class="c-recipe--image" :src="recipe.recipe.image">
        <div class="c-recipe--info">
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
        &--container {
            grid-area: recipe;
            grid-template-columns: repeat(5, 1fr);
            display: grid;
            grid-template-areas: "image image recipe recipe recipe";
            grid-column-gap: 10px;
        }
        &--image {
            grid-area: image;
            width: 100%
        }
        &--info {
            grid-area: recipe;
            font-family: Helvetica;
        }
    }

    @media (max-width: 768 px) {
        .c-recipe--container {
            grid-area: recipe;
            grid-template-columns: repeat(5, 1fr);
            display: grid;
            grid-template-areas: 
            "image image image image image"
            "recipe recipe recipe recipe recipe";
            grid-column-gap: 10px;
        }
    }
</style>
