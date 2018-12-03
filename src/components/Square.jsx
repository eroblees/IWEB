import React from 'react';

export default class Square extends React.Component {
  constructor(props){
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(){
    if(this.props.className !== "not_clickable") {
      this.props.onClick(this.props.rowIndex,this.props.columnIndex);
    }
  }

  render(){
    return(
      <button style={squareStyle} onClick={this._onClick} className={this.props.className}>
        {this.props.value}
      </button>
    );
  }
}

const squareStyle = {
  height: '100px',
  width: '100px',
  fontSize: '18px'
};