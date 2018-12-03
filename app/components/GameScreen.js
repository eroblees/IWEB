import React from 'react';
import { View } from 'react-native';

import Header from './Header.js';
import Board from './Board.js';

import { connect } from 'react-redux';
import { playPosition } from './../reducers/actions';

class GameScreen extends React.Component {
  constructor(props){
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  componentDidUpdate(){
    if(this.props.winner !== null){
      setTimeout(function(){
        alert("The winner is " + this.props.winner);
      }.bind(this),0);
    }
  }

  _onClick(rowNumber,columnNumber){
    this.props.dispatch(playPosition(rowNumber, columnNumber, this.props.turn, this.props.values));
  }

  render(){
    var text = "Turn of " + this.props.turn;
    return (
      <View style={{flex:1, margin:10, justifyContent:'center'}}>
        <Header text={text}/>
        <Board values={this.props.values} onClick={this._onClick} winner={this.props.winner}/>
      </View>
    );
  }
}

function mapStateToProps(state) {
    return {
        values: state.values,
        turn: state.turn,
        winner: state.winner
    };
}
export default connect(mapStateToProps)(GameScreen);