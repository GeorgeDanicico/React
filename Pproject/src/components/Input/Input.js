import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

const Input = React.forwardRef(({
  label, disabled, labelIcon, placeholder, required, errorMessage, ...rest
}, ref) => (
  <div className="input-component">
    <div className="input-header">
      <div>
        {labelIcon && <FontAwesomeIcon icon={labelIcon} className="icon" />}
        {(required) ? `${label}*` : label}
      </div>
      <div className="input-error-msg">{errorMessage}</div>
    </div>
    <input type="text" ref={ref} {...rest} className={`text-input ${(disabled) ? 'readonly-element' : ''}`} placeholder={placeholder} />
  </div>
));

Input.propTypes = {
  labelIcon: PropTypes.object,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  labelIcon: null,
  required: false,
  errorMessage: '',
  placeholder: '',
  disabled: false,
};

export default Input;