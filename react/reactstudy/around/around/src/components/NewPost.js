import React, { Component, PropTypes } from 'react';
import update from 'react-addons-update';

import CreatePost from './CreatePost'
const propTypes = {
};
const defaultProps = {
};
class Post extends Component {
    constructor(props) {
        super(props);
        this.state={
          database: []
        }
        this.handleCreate=this.handleCreate.bind(this);
    }
    handleCreate(data){
      this.setState({
        database: update(
          this.state.database,
          {
            $push: [data]
          }
        )
      });
    }
    render() {
        return(
            <div>
              <CreatePost onCreate={this.handleCreate}/>
            </div>
        );
    }
}
Post.propTypes = propTypes;
Post.defaultProps = defaultProps;
export default Post;
