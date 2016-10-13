import React, { Component, PropTypes } from 'react';
const propTypes = {
  onCreate: PropTypes.func
};
const defaultProps = {
  onCreate: ()=>{console.error('onCreate not define')}
};
class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          item: '',
          price: '',
          key: 0
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    handleChange(e){
      const nextState = [];
      nextState[e.target.name]=e.target.value;
      this.setState(nextState);
    }
    handleClick(){
      const data = {
        item: this.state.item,
        price: this.state.price,
        number: 1,
        key: this.state.key
      }
      this.props.onCreate(data);
      this.setState({
        item: '',
        price: '',
        key: this.state.key+1
      });
    }
    render() {
        return(
            <div>
              <h3>아이템 추가하기</h3>
              <div>
                <input name='item' value={this.state.item}placeholder='제품'onChange={this.handleChange}/>
                <input name='price'value={this.state.price}placeholder='가격'onChange={this.handleChange}/>
                <button onClick={this.handleClick}>아이템추가</button>
              </div>
            </div>
        );
    }
}
CreateItem.propTypes = propTypes;
CreateItem.defaultProps = defaultProps;
export default CreateItem;
