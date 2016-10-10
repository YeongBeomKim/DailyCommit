import React, { Component, PropTypes } from 'react';
const propTypes = {
  handlePlus: PropTypes.func,
  handleSubtract: PropTypes.func,
  changeFontColor: PropTypes.func
};
const defaultProps = {
  handlePlus: ()=>{console.error('handlePlus not defined')},
  handleSubtract: ()=>{console.error('handleSubtract not defined')},
  changeFontColor: ()=>{console.error('changeFontColor not defined')}
};
class Control extends Component {

    render() {
        return(
            <div>
              <button onClick={this.props.handlePlus}>+</button>
              <button onClick={this.props.handleSubtract}>-</button>
              <button onClick={this.props.changeFontColor}>숫자색변경</button>
            </div>
        );
    }
}
Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
export default Control;
