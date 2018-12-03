import { PLAYER_X, INITIAL_BOARD } from '../constants/constants';

function boardReducer(state = INITIAL_BOARD, action) {
    switch (action.type) {
    case 'PLAY_POSITION':
        let newValue = action.turn === PLAYER_X ? 'X' : '0';
        let newState = JSON.parse(JSON.stringify(state));
        newState[action.x][action.y] = newValue;
        return newState;
    default:
        return state;
    }
}
export default boardReducer;