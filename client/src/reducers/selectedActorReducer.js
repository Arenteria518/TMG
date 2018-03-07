export default function(state = {}, action){

    switch(action.type){
        case 'ACTOR_SELECTED':
            return action.payload
        default:
            return state
    }
}
