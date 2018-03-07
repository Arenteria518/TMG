import _ from 'lodash';

import { FETCH_MOVIES } from '../actions/index'

export default function(state = [], action) {
    switch(action.type){
        case FETCH_MOVIES:
            return _.map(action.payload.data.cast, _.partialRight(_.pick, ['title', 'id']));
        default:
            return state
    }

}