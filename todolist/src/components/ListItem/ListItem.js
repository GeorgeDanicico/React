import React from 'react';
import PropTypes from 'prop-types';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import SpecialButton from '../SpecialButton/SpecialButton';
import './style.css'

const ListItem = ({ text, onDelete, ...rest }) => {
    return (
        <div {...rest}>
            <div className="content" >
                {text}
            </div>

            <div className="buttons" >
                <SpecialButton buttonType="default" buttonIcon={faEdit} />
                <SpecialButton buttonType="delete" buttonIcon={faTimes} onClick={onDelete}/>
            </div>
        </div>
    )
};

ListItem.propTypes = {
    text: PropTypes.string.isRequired,
}

export default ListItem;