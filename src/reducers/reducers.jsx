import { combineReducers } from 'redux';
import turnReducer from './turnReducer';
import boardReducer from './boardReducer';
import winnerReducer from './winnerReducer';

const GlobalState = combineReducers({
    turn: turnReducer,
    values: boardReducer,
    winner: winnerReducer
});

export default GlobalState;