import axios from 'axios';
const recipeSearchUrl = `https://api.edamam.com/search?q=chicken&app_key=0bc36ac6a1c962d66fcd18baabff2439&app_id=f886d8e7`;
const APP_ID = 'f886d8e7';
const APP_KEY = '0bc36ac6a1c962d66fcd18baabff2439'

export async function getFoods() {
     const res = await axios({
         method: 'get',
         url: recipeSearchUrl
     });
     const recipes = res.data;
     return recipes.hits;
}

