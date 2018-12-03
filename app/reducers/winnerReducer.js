import { PLAYER_X, PLAYER_0 } from '../constants/constants';

function winnerReducer(state=null, action) {
    switch (action.type) {
    case 'PLAY_POSITION':
        let newValue = action.turn === PLAYER_X ? 'X' : '0';
        let newBoard = JSON.parse(JSON.stringify(action.values));
        newBoard[action.x][action.y] = newValue;
        return _getWinner(newBoard);
    default:
        return state;
    }
}
export default winnerReducer;

function _getWinner(values){
  var winner = null;
  var n = values.length;
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(values[i][j] !== "-"){
        var horizontalRight = (n - i > 2);
        var verticalDown = (n - j > 2);
        var diagonalRightDown = ((horizontalRight)&&(verticalDown));
        if(horizontalRight){
          if((values[i][j]===values[i+1][j])&&(values[i][j]===values[i+2][j])){
            winner = values[i][j];
          }
        }
        if(verticalDown){
          if((values[i][j]===values[i][j+1])&&(values[i][j]===values[i][j+2])){
            winner = values[i][j];
          }
        }
        if(diagonalRightDown){
          if((values[i][j]===values[i+1][j+1])&&(values[i][j]===values[i+2][j+2])){
            winner = values[i][j];
          }
        }
      }
    }
  }
  if(winner !== null){
    if(winner === 'X'){
      winner = PLAYER_X;
    } else {
      winner = PLAYER_0;
    }
  }
  return winner;
}