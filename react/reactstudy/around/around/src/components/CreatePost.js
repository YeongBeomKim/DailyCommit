import React, { Component, PropTypes } from 'react';
const propTypes = {
  onCreate: PropTypes.func
};
const defaultProps = {
  onCreate: ()=>{console.log('onCreate not defined')}
};
class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
          content: '',
          key: 0
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    handleChange(e){
      this.setState({
        content: e.target.value
      })
    };
    handleClick(){
      const data = {
        content: this.state.content,
        key: this.state.key
      }
      this.props.onCreate(data);
      this.setState({
        content: '',
        key: this.state.key +1
      })
    }
    render() {
        return(
            <div>
              <h2>내용</h2>
              <textarea type='text'name='content'value={this.state.content}onChange={this.handleChange}cols='40'rows='10'/>
              <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}
CreatePost.propTypes = propTypes;
CreatePost.defaultProps = defaultProps;
export default CreatePost;
