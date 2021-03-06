import axios from 'axios';

import { API_KEY } from '../config/keys';
const ROOT_URL= 'https://api.themoviedb.org/3';

export const FETCH_POPULAR_ACTORS = 'FETCH_POPULAR_ACTORS';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const MOVIE_SEARCH = 'MOVIE_SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export function selectActor(actor) {
    return {
        type: 'ACTOR_SELECTED',
        payload: actor
    }
}

export function fetchPopularActors() {
    let page = Math.floor(Math.random() * 8) + 1;
    const url = `${ROOT_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    var request = axios.get(url);
    return {
        type: FETCH_POPULAR_ACTORS,
        payload: request
    }
}

export function fetchMovies(actorID){
    const url = `${ROOT_URL}/person/${actorID}/movie_credits?api_key=${API_KEY}&language=en-US`
    var request = axios.get(url);
    return{
        type: FETCH_MOVIES,
        payload: request
    }
}

export function movieSearch(term) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`
    var request = axios.get(url);
    return{
        type: MOVIE_SEARCH,
        payload: request
    }
}

export function clearSearch(){
    return{
        type: CLEAR_SEARCH,
        payload: []
    }
}