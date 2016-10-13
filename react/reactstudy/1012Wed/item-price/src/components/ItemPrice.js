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
        this.state = {
          number: -1
        };
        this.handlePlus=this.handlePlus.bind(this);
        this.handleSubstract=this.handleSubstract.bind(this);
    }
    handlePlus(key){
      console.log(this.props.itemDataBase[key]);
      const data = this.props.itemDataBase[key];
      this.setState({
        number: data.number+1
      });
      this.props.updateNum(this.state.number,key);
    }
    handleSubstract(key){
      const data = this.props.itemDataBase[key];
      this.setState({
        number: data.number-1
      });
      this.props.updateNum(this.state.number,key);
    }

    render() {
      const mapToData = (database) => {
        return database.map((data,i) => {
          return (<ItemInfo key={i} data={data}onPlus={(i)=>{this.handlePlus(i)}}onSubstract={(i)=>{this.handleSubstract(i)}}/>)
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
