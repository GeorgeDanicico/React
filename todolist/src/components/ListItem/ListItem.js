import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import SpecialButton from '../SpecialButton/SpecialButton';
import './style.css'

const ListItem = ({ text, onDelete, onComplete, status,...rest }) => {
    const currentListItem = useRef(null);

    const handleDeleteTask = () => {
        
        currentListItem.current.classList.add("delete");
        
        setTimeout(() => {
            currentListItem.current.classList.remove("delete");
            onDelete(); 
        }, 1000);
    }

    return (
        <div ref={currentListItem} className="todo-item" {...rest}>
            <div className="content-container">
                <div className="content">
                    {text}
                </div>

                <div className={`legend ${status === 1 ? 'unfinished' : 'finished'}`}>
                    {status === 1 ? 'To do' : 'Completed'}
                </div>
            </div>

            <div className="buttons" >
                <SpecialButton buttonType="default" buttonIcon={faEdit} onClick={onComplete} />
                <SpecialButton buttonType="delete" buttonIcon={faTimes} onClick={handleDeleteTask} />
            </div>
        </div>
    )
};

ListItem.propTypes = {
    text: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
}

export default ListItem;