import axios from 'axios';

const API_KEY = 'd2fc40106e7d4e08c42e84a905e3c470';
const ROOT_URL= 'https://api.themoviedb.org/3';

export const FETCH_ACTORS = 'FETCH_ACTORS';

export function selectActor(actor) {
    return {
        type: 'ACTOR_SELECTED',
        payload: actor
    }
}

export function fetchActors() {
    const url = `${ROOT_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=1`;
    var request = axios.get(url);
    return {
        type: FETCH_ACTORS,
        payload: request
    }
}