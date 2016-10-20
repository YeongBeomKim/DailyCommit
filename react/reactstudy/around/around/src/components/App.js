import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Link, Match, Miss} from 'react-router';
import Home from './Home';
import Posts from './Posts';
const propTypes = {
};
const defaultProps = {
};
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div>
            <Router>
              <div>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/post'>Posts</Link></li>
                </ul>
                <hr/>
                <Match exactly pattern='/'component={Home}/>
                <Match pattern='/post'component={Posts}/>
              </div>
            </Router>
          </div>
        );
    }
}
App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default App;
