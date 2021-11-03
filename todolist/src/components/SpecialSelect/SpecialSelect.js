import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const SpecialSelect = ({value, onChange}) => {
    return (
        <div className="select-container" >
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    )
};

SpecialSelect.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SpecialSelect;