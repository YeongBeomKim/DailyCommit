import React, { Component, PropTypes } from 'react';
import { Link, Match } from 'react-router';
const propTypes = {
};
const defaultProps = {
};
class ShowPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
          database: [
            {content: '오늘하루수고많았어',key: 0},
            {content: '안녕안녕',key: 1}
          ]
        };
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
              {mapToData(this.state.database)}
            </div>
        );
    }
}
ShowPost.propTypes = propTypes;
ShowPost.defaultProps = defaultProps;
export default ShowPost;
