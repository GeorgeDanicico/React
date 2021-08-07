import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BUTTON_TYPES } from '../../utils/constants';
import './style.scss';

const Button = ({
  text, onClick, buttonIcon, buttonType, small, ...rest
}) => (
  <button type="button" {...rest} className={small ? `button ${buttonType} small` : `button ${buttonType}`} onClick={onClick}>
    {buttonIcon != null ? <FontAwesomeIcon icon={buttonIcon} className="button-icon" /> : null}
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  small: PropTypes.bool,
  onClick: PropTypes.func,
  buttonIcon: PropTypes.object,
  buttonType: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
};

Button.defaultProps = {
  text: '',
  small: false,
  onClick: () => {},
  buttonIcon: null,
  buttonType: '',
};

export default Button;