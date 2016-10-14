import React, { Component, PropTypes } from 'react';
import ItemPrice from './ItemPrice';

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

export default App;
