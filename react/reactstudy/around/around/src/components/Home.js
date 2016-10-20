import React, { Component, PropTypes } from 'react';
const propTypes = {
};
const defaultProps = {
};
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div><h2>Home</h2></div>
        );
    }
}
Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
export default Home;
