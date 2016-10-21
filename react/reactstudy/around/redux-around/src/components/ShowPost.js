import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import PostShowForm from './PostShowForm';
const propTypes = {
};
const defaultProps = {
};
class ShowPost extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const mapToData = (database) =>{
          return database.map((data)=>{
            return(
              <div>{data.content}<hr/></div>
            )
          })
        }
        return(
            <div>
              {mapToData(this.props.DataBase)}
            </div>
        );
    }
}
ShowPost.propTypes = propTypes;
ShowPost.defaultProps = defaultProps;
const mapStateToProps = (state)=> {
  DataBase: state.posts.DataBase
}
export default connect(mapStateToProps,undefined)(ShowPost);
