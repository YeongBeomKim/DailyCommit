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
        this.handlePlus=this.handlePlus.bind(this);
        this.handleSubstract=this.handleSubstract.bind(this);
    }
    handlePlus(data,key){
      const number= data.number+1;
      this.props.updateNum(number,key);
    }
    handleSubstract(data,key){
      const number = data.number-1
      this.props.updateNum(number,key);
      if(number==0){
        if(confirm("삭제하시겟습니까?")==true){
          this.props.deleteItem(key);
        }
        else{
          return
        }
      }
    }
    totalPrice(database){
      let totalprice = 0;
      database.map((data)=>{
        totalprice = totalprice + data.price*data.number;
      })
      return(<h1>총 가격 : {totalprice}원</h1>)
    }
    render() {
      const mapToData = (database) => {
        return database.map((data,i) => {
          return (<ItemInfo key={i} data={data}onPlus={()=>{this.handlePlus(data,i)}}onSubstract={()=>{this.handleSubstract(data,i)}}/>)
        }
      )};

      return(
          <div>
            <CreateItem onCreate={(data)=>{this.props.handleCreateItem(data)}}/>
            <div> 제품 가격</div>
            {mapToData(this.props.itemDataBase)}
            {this.totalPrice(this.props.itemDataBase)}
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
    updateNum: (number,key)=>{dispatch(actions.updateNum(number,key))},
    deleteItem: (key)=>{dispatch(actions.deleteItem(key))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemPrice);
