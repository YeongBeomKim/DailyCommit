import React, { Component, PropTypes } from 'react';
const propTypes = {
  data: PropTypes.object,
  onEdit: PropTypes.func
};
const defaultProps = {
  data: [],
  onEdit: ()=>{console.error('onEdit is not define')}
};
class ItemInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props)
        return(
          <div>
            <div>{this.props.data.item} {this.props.data.price}</div>
            <div>
              {this.props.data.number}

              <button onClick={this.props.onPlus}>+</button>
              <button onClick={this.props.onSubstract}>-</button>
            </div>
          </div>
        );
    }
}
ItemInfo.propTypes = propTypes;
ItemInfo.defaultProps = defaultProps;
export default ItemInfo;
