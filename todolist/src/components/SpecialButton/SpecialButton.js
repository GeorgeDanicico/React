import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import './style.css';

const SpecialButton = React.forwardRef(({buttonIcon, onClick, buttonType, label, ...rest}, ref) => {
    return (
        <div className="button-container">
            <button ref={ref} onClick={onClick} className={`button ${buttonType}`} {...rest} >
                <FontAwesomeIcon icon={buttonIcon} />
            </button>
        </div>
    )
});

SpecialButton.propTypes = {
    buttonIcon: PropTypes.object,
    onClick: PropTypes.func,
    label: PropTypes.string,
    buttonType: PropTypes.string,
};

SpecialButton.defaultProps = {
    buttonIcon: null,
    onClick: () => {},
    label: '',
    buttonType: "",
}

export default SpecialButton;