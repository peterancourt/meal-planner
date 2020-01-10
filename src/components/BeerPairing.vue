<template>
    <div v-if="beerPairings.length > 0" style="border: 1px solid red">
        <picture>
            <img :src="beerPairings[0].image_url">
        </picture>
        {{ beerPairings[0].name }}
    </div>
    <div v-else>
        No Beer Found
    </div>
</template>

<script>
    import { getBeerPairing } from '../services/beerPairingApis';
    export default {
        data: () => {
            return {
                beerPairings: []
            }
        },
        props: {
            searchQuery: String
        },
        methods: {
            getBeer(value) {
                const beerResponse = getBeerPairing(value);
                beerResponse.then((response) => {
                    this.beerPairings = response;
                })
            },
        },
        
        created: function() {
            this.getBeer(this.searchQuery);
        },

        watch: {
            searchQuery: function() {
                this.getBeer(this.searchQuery);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>