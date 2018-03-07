import { FETCH_POPULAR_ACTORS } from '../actions/index'

export default function(state = [], action) {
    switch(action.type){
        case FETCH_POPULAR_ACTORS:
            return action.payload.data.results;
        default:
            return state
    }

}