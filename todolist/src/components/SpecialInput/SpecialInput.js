import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const SpecialInput = React.forwardRef(({value, onChange, ...rest}, ref) => {

    return (
        <div className="input-component">
            <input type="text" className="input-text" />
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