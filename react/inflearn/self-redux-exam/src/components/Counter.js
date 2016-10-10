import React, { Component} from 'react';
import Value from './Value';
import Control from './Control';
import * as actions from '../actions'
import {connect} from 'react-redux';

class Counter extends Component {

    setRandomColor(){
      const color = [
        Math.floor((Math.random()*55)+200),
        Math.floor((Math.random()*55)+200),
        Math.floor((Math.random()*55)+200)
      ];
      // console.log(this.props.changeFontColor(color));
      this.props.changeFontColor(color);
    }
    render() {
      const color = this.props.color;
      const style = {
        color: `rgb(${color[0]},${color[1]},${color[2]})`
      };
      return(
          <div style={style}>
            <Value number={this.props.number}/>
            <Control handlePlus={this.props.handlePlus} handleSubtract={this.props.handleSubtract}
              changeFontColor={() => this.setRandomColor()}/>
          </div>
      );
    }
}
const mapStateToProps = (state) => {
  return{
    number: state.counter.number,
    color: state.ui.color
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: ()=>{dispatch(actions.increment())},
    handleSubtract: ()=>{dispatch(actions.decrement())},
    changeFontColor: (color)=>{dispatch(actions.setFontColor(color))}
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Counter);
