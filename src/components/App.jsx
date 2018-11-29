import React from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';

const PLAYER_X = "Player 1 (X)";
const PLAYER_0 = "Player 2 (0)";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        turn: PLAYER_X,
        winner: undefined,
        values: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-'],
        ],
    };
    this._onClick = this._onClick.bind(this);
  }

  componentDidUpdate(){
    if(typeof this.state.winner !== "undefined"){
      setTimeout(function(){
        alert("The winner is " + this.state.winner);
      }.bind(this),0);
    }
  }

  _onClick(rowNumber,columnNumber){
    if(typeof this.state.winner !== "undefined"){
      return;
    }
    var newValues = this.state.values.slice(); //Copy array to a new array (this method is valid for arrays of literal values)
    var newValue = (this.state.turn === PLAYER_X ? 'X' : '0');
    newValues[rowNumber][columnNumber] = newValue;
    this.setState({
      turn: (this.state.turn === PLAYER_X ? PLAYER_0 : PLAYER_X),
      winner: this._getWinner(newValues),
      values: newValues
    });
  }

  _getWinner(values){
    var winner = undefined;
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
    if(typeof winner !== "undefined"){
      if(winner === 'X'){
        winner = PLAYER_X;
      } else {
        winner = PLAYER_0;
      }
    }
    return winner;
  }

  render(){
    var text = "Turn of " + this.state.turn;
    return (
      <div>
        <Header text={text}/>
        <Board values={this.state.values} onClick={this._onClick} winner={this.state.winner}/>
      </div>
    );
  }
}