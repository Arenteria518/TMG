import axios from 'axios';

const API_KEY = 'd2fc40106e7d4e08c42e84a905e3c470';
const ROOT_URL= 'https://api.themoviedb.org/3';

export const FETCH_POPULAR_ACTORS = 'FETCH_POPULAR_ACTORS';
export const FETCH_MOVIES = 'FETCH_MOVIES'

export function selectActor(actor) {
    return {
        type: 'ACTOR_SELECTED',
        payload: actor
    }
}

export function fetchPopularActors() {
    let page = Math.floor(Math.random() * 5) + 1;
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
