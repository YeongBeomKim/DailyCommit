import React, { Component, PropTypes } from 'react';
const propTypes = {
  onPlus: PropTypes.func,
  onSubtract: PropTypes.func,
  onRandomizeColor: PropTypes.func
};
const defaultProps = {
  onPlus: ()=>{console.error('onPlus not defined')},
  onSubtract: ()=>{console.error('onSubtract not defined')},
  onRandomizeColor: ()=>{console.error('onRandomizeColor not defined')}
};
class Control extends Component {

    render() {
        return(
            <div>
              <button onClick={this.props.onPlus}>+</button>
              <button onClick={this.props.onSubtract}>-</button>
              <button onClick={this.props.onRandomizeColor}>랜덤색상변화</button>
            </div>
        );
    }
}
Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
export default Control;
