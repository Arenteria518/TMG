import { combineReducers } from 'redux';

import actorsReducer from './actorsReducer';
import selectedActorReducer from './selectedActorReducer';
import moviesReducer from './moviesReducers';
import searchResultReducer from './searchResultsReducer';

const rootReducer = combineReducers({
    actors: actorsReducer,
    selectedActor: selectedActorReducer,
    movies: moviesReducer,
    searchResults: searchResultReducer
});

export default rootReducer