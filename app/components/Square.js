import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

export default class Square extends React.Component {
  constructor(props){
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(){
    if(this.props.value === "-") {
      this.props.onClick(this.props.rowIndex,this.props.columnIndex);
    }
  }

  render(){
    return(
      <TouchableHighlight style={styles.square} onPress={this._onClick} disabled={this.props.squareDisabled}>
        <Text style={styles.squareText}>{this.props.value}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee'
  },
  squareText: {
    fontSize: 60
  }
})