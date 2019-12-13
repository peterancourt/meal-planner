<template>
    <div class="c-heading">
        <h1 class="c-heading--title">{{ title }}</h1>
        <h3 class="c-heading--sub-title">{{ subTitle }}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Meal Planner',
            subTitle: 'Recipes and a Beer for Whatever You\'re in the Mood For',
        }
    }
}
</script>

<style lang="scss" scoped>
    .c-heading {
        padding-bottom: 20px;

        &--title {
            font-family: Helvetica;
            font-size: 48px;
            margin: auto;
        }
        
        &--sub-title {
            font-family: Helvetica;
            margin: auto;
        }
    }
</style>