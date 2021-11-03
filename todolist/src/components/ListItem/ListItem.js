import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const ListItem = ({ text, ...rest }) => {
    return (
        <div {...rest}>
            <div className="content" >
                {text}
            </div>

            <div className="buttons" >

            </div>
        </div>
    )
};

ListItem.propTypes = {
    text: PropTypes.string.isRequired,
}

export default ListItem;