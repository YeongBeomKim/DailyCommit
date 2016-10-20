import React, { PropTypes } from 'react';
import { Link, Match } from 'react-router';
import NewPost from './NewPost';
import ShowPost from './ShowPost';
const Empty = () => {
  return(
    <h3>Please select id</h3>
  );
};

const Posts = ({pathname}) => {
  return (
    <div>
      <ul>
        <li><Link to={`${pathname}/rendering`}>rendering</Link></li>
        <li><Link to={`${pathname}/new`}>NewPost</Link></li>
        <li><Link to={`${pathname}/show`}>ShowPost</Link></li>
      </ul>
      <Match exactly pattern={pathname} component={Empty}/>
      <Match pattern={`${pathname}/new`} component={NewPost}/>
      <Match pattern={`${pathname}/show`} component={ShowPost}/>
    </div>
  )
}

export default Posts
