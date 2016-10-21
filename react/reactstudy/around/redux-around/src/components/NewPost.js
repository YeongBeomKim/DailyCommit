import React, { Component, PropTypes } from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import PostForm from './PostForm';
const propTypes = {
};
const defaultProps = {
};
class NewPost extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div><PostForm createPost={(data)=>{this.props.createPost(data)}}/>{console.log(this.props.DataBase)}</div>
        );
    }
}
const mapStateToProps = (state) => {
  return{
    DataBase: state.posts.DataBase
  };
}
const mapDispatchToProps = (dispatch) => {
  return{
    createPost: (data)=>{dispatch(actions.createPost(data))}
  };
}
NewPost.propTypes = propTypes;
NewPost.defaultProps = defaultProps;
export default connect(mapStateToProps,mapDispatchToProps)(NewPost);
