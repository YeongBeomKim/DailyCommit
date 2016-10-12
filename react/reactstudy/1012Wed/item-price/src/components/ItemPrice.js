import React, { Component, PropTypes } from 'react';
import CreateItem from './CreateItem';
import ItemInfo from './ItemInfo';
import ItemDetails from './ItemDetails';
import * as actions from '../actions';
import {connect} from 'react-redux';

const propTypes = {
};
const defaultProps = {
};
class ItemPrice extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      const mapToData = (database) => {
        return database.map((data,i) => {
          return (
            <ItemInfo key={i} data={data}onEdit={()=>{this.props.updateNum()}}/>
          )
        }
      )};
        return(
            <div>
              <CreateItem onCreate={(data)=>{this.props.handleCreateItem(data)}}/>
              <div> 제품 가격</div>
              {mapToData(this.props.itemDataBase)}
              <ItemDetails itemDataBase={this.props.itemDataBase}/>
            </div>
        );
    }
}
ItemPrice.propTypes = propTypes;
ItemPrice.defaultProps = defaultProps;
const mapStateToProps = (state) => {
  return{
    itemDataBase: state.control.itemDataBase
  };
}
const mapDispatchToProps = (dispatch) => {
  return{
    handleCreateItem: (data)=>{dispatch(actions.createItem(data))},
    updateNum: (number,key)=>{dispatch(actions.updateNum(number,key))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemPrice);
