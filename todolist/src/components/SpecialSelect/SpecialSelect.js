import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const SpecialSelect = ({value, onChange}) => {
    return (
        <div className="select-container" >
            <select name="todos" className="filter-todo" value={value} onChange={onChange}>
                <option value="0">All</option>
                <option value="2">Completed</option>
                <option value="1">Uncompleted</option>
            </select>
        </div>
    )
};

SpecialSelect.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SpecialSelect;