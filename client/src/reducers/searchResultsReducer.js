import _ from 'lodash';

import {MOVIE_SEARCH, CLEAR_SEARCH} from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case MOVIE_SEARCH:
            return _.uniqBy(_.map(action.payload.data.results, _.partialRight(_.pick, ['title', 'id', 'poster_path'])), (movie) => movie.title);

        case  CLEAR_SEARCH:
            return action.payload;
        default:
            return state
    }

}