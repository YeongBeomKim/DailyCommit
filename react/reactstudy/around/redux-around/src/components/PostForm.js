import React, { Component, PropTypes } from 'react';
const propTypes = {
};
const defaultProps = {
};
class postForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          content: ''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    handleChange(e){
      this.setState({
        content: e.target.value
      })
    }
    handleClick(){
      const data= {
        content: this.state.content
      };
      this.props.createPost(data);
      this.setState({
        content: ''
      })
    }
    render() {
        return(
            <div>
              <input type='text'name='content'value={this.state.content}placeholder='내용'onChange={this.handleChange}/>
              <button onClick={this.handleClick}>submit</button>
          </div>
        );
    }
}
postForm.propTypes = propTypes;
postForm.defaultProps = defaultProps;
export default postForm;
