import React, { Component, PropTypes } from 'react';
const propTypes = {
  data: PropTypes.object,
  onPlus: PropTypes.func,
  onSubstract: PropTypes.func
};
const defaultProps = {
  data: [],
  onPlus: ()=>{console.error('onPlus is not define')},
  onSubstract: ()=>{console.error('onSubstract is not define')}
};
class ItemInfo extends Component {

    render() {
        return(
          <div>
            <div>{this.props.data.item} {this.props.data.price}원</div>
            <div>
              {this.props.data.number}
              <button onClick={this.props.onPlus}>+</button>
              <button onClick={this.props.onSubstract}>-</button>
              제품 총 가격 : {this.props.data.price*this.props.data.number}원
            </div>
          </div>
        );
    }
}
ItemInfo.propTypes = propTypes;
ItemInfo.defaultProps = defaultProps;
export default ItemInfo;
