import React from 'react';
import Square from './Square.jsx';

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
        let squareClassName = (value === "-" ? "clickable" : "not_clickable");
        if(this.props.winner !== null){
          squareClassName = "not_clickable";
        }
        return (
          <Square value={value} key={squareKey} rowIndex={rowIndex} columnIndex={columnIndex} onClick={this._onClick} className={squareClassName}/>
        );
      });
      let boardRowKey = "boardRow" + rowIndex;
      return (
        <div key={boardRowKey}>{boardRow}</div>
      );
    });

    return (
      <div>{board}</div>
    );
  }
}