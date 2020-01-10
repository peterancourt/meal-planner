import axios from 'axios';
const APP_ID = 'f886d8e7';
const APP_KEY = '0bc36ac6a1c962d66fcd18baabff2439'
const recipeSearchUrl = (query) => `https://api.edamam.com/search?q=${query}&app_key=${APP_KEY}&app_id=${APP_ID}&from=0&to=5`;

export async function getFoods(query) {
    return await axios.get(recipeSearchUrl(query))
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error)
        });
}

