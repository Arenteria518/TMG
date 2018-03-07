import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import actorsReducer from './actorsReducer';
import selectedActorReducer from './selectedActorReducer';
import moviesReducer from './moviesReducers';

const rootReducer = combineReducers({
    actors: actorsReducer,
    selectedActor: selectedActorReducer,
    movies: moviesReducer
});

export default rootReducer