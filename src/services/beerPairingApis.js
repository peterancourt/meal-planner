import axios from 'axios';
const beerSearchUrl = (query) => `https://api.punkapi.com/v2/beers?food=${query}`;

export async function getBeerPairing(query) {
    return await axios.get(beerSearchUrl(query))
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error)
        });
}