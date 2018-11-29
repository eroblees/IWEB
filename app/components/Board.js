import React from 'react';
import { View, StyleSheet } from 'react-native';

import Square from './Square.js';

export default class Board extends React.Component {
  constructor(props){
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(rowNumber,columnNumber){
    this.props.onClick(rowNumber,columnNumber);
  }

  render(){
    var board = this.props.values.map((rowValues,rowIndex) => {
      let boardRow = rowValues.map((value,columnIndex) => {
        let squareKey = "" + rowIndex + columnIndex;
        let squareDisabled = (value === "-" ? false : true);
        if(typeof this.props.winner != "undefined"){  
          squareDisabled = true;  
        }
        return (
          <Square value={value} key={squareKey} rowIndex={rowIndex} columnIndex={columnIndex} onClick={this._onClick} squareDisabled={squareDisabled}/>
        );
      });
      let boardRowKey = "boardRow" + rowIndex;
      return (
        <View key={boardRowKey} style={styles.boardRow}>{boardRow}</View>
      );
    });

    return (
      <View style={styles.board}>{board}</View>
    );
  }
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  boardRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})