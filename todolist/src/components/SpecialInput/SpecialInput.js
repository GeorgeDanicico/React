import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SpecialInput = React.forwardRef(({value, onChange, inputButtonIcon, 
    inputButtonClick, ...rest}, ref) => {

    return (
        <div className="input-component">
            <input ref={ref} type="text" className="input-text" value={value} onChange={onChange} {...rest} />
            <button className="input-button" onClick={inputButtonClick}>
                <FontAwesomeIcon icon={inputButtonIcon}/>
            </button>
        </div>
    );
});

SpecialInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

SpecialInput.defaultProps = {
    value: "",
    onChange: () => {},
}

export default SpecialInput;