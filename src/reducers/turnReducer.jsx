import {PLAYER_X, PLAYER_0} from '../constants/constants';

function turnReducer(state = PLAYER_X, action) {
    switch (action.type) {
    case 'PLAY_POSITION':
        return action.turn === PLAYER_X ? PLAYER_0 : PLAYER_X;
    default:
        return state;
    }
}

export default turnReducer;