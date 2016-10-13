import React, { Component, PropTypes } from 'react';
const propTypes = {
  itemDataBase: PropTypes.array
};
const defaultProps = {
  itemDataBase: []
};
class ItemDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>

            </div>
        );
    }
}
ItemDetails.propTypes = propTypes;
ItemDetails.defaultProps = defaultProps;
export default ItemDetails;
