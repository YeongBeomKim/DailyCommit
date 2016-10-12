import React, { Component, PropTypes } from 'react';
import ItemPrice from './ItemPrice';
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
              <ItemPrice/>
            </div>
        );
    }
}
App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default App;
