import { combineReducers } from 'redux';
import actorsReducer from './actorsReducer';
import selectedActorReducer from './selectedActorReducer';

const rootReducer = combineReducers({
    actors: actorsReducer,
    selectedActor: selectedActorReducer,
});

export default rootReducer