import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonProp } from "../../utils/interfaces";
import './style.css';

const Button: React.FC<ButtonProp> = ({ btnIcon, label, btnType, onClick }) => {
    return (
            <button className={`buttons ${btnType}`} onClick={onClick}>
                {label && <p>{label}</p>}
                {btnIcon &&
                    <FontAwesomeIcon icon={btnIcon} className="icon"/>
                }
            </button>
    );
}

export default Button;