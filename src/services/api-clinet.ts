import axios from "axios";

const apiKey = 'd7b71a07e38c40bc88893b5c1a598b4a'


export default axios.create({
    baseURL: 'https://api.rawg.io/api/games',
    params: {
        key: apiKey
    }
});