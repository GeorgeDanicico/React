import React from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/ButtonComponent";
import { InfoBarProp } from "../../utils/interfaces";
import './style.css';

const InfoBar: React.FC<InfoBarProp> = ({ room }) => {
    const navigate = useNavigate();

    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <FontAwesomeIcon icon={faCircle} className="onlineIcon" />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <Button btnType="danger" onClick={() => { navigate('/', { replace: true }); }}  btnIcon={faTimes} />
            </div>

        </div>
    )
};

export default InfoBar;
