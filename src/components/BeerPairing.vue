<template>
    <div class="c-beer-pairing--container" v-if="beerPairings.length > 0">
        <h3 class="c-beer-pairing--heading">{{ beerPairings[0].name }}</h3>
        <img class="c-beer-pairing--image" :src="beerPairings[0].image_url">
    </div>
    <div class="c-beer-pairing--container" v-else>
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
    .c-beer-pairing {
        &--container {
            display: block;
            grid-area: beer;
        }
        &--heading {
            font-family: Helvetica;
            text-align: center;
            padding-top: 20px;
            padding-bottom: 20px;
            margin: 0;
        }
        &--image {
            display: block;
            max-height: 300px;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>