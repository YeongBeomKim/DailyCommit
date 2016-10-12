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

        this.handlePlus=this.handlePlus.bind(this);
        this.handleSubstract=this.handleSubstract.bind(this);
    }

    handlePlus(){
      const num = this.props.data.number+1;
      console.log(this.props.key);
      const key = this.props.key;
      this.props.onEdit(num,key);
    }
    handleSubstract(){
      const num = this.props.data.number-1;
      const key = this.props.key;
      this.props.onEdit(num,key);
    }

    render() {
        console.log(this.props)
        return(
          <div>
            <div>{this.props.data.item} {this.props.data.price}</div>
            <div>
              {this.props.data.number}

              <button onClick={this.handlePlus}>+</button>
              <button onClick={this.handleSubstract}>-</button>
            </div>
          </div>
        );
    }
}
ItemInfo.propTypes = propTypes;
ItemInfo.defaultProps = defaultProps;
export default ItemInfo;
