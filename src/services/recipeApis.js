import axios from 'axios';
const recipeSearchUrl = (query) => `https://api.edamam.com/search?q=${query}&app_key=0bc36ac6a1c962d66fcd18baabff2439&app_id=f886d8e7`;
const APP_ID = 'f886d8e7';
const APP_KEY = '0bc36ac6a1c962d66fcd18baabff2439'

export function getFoods(query) {
    axios.get(recipeSearchUrl(query))
        .then(function(res) {
            return res;
        });
}

