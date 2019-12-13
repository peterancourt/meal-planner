<template>
    <div>
        <form>
            <input 
                type="text"
                v-model.lazy="searchTerm"/>
            <button @click.prevent="submitted">Get Recipes</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchTerm: ''
            }
        },
        methods: {
            submitted(event) {
                this.$emit('searchTermEvent', this.searchTerm);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>