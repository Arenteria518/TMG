import { FETCH_ACTORS } from '../actions/index'

export default function(state = [], action) {
    switch(action.type){
        case FETCH_ACTORS:
            console.log(action.payload)
            return action.payload.data.results;
        default:
            return state
    }

}