import React from "react";

import './style.css';

interface Props {
    room: string,
}

const InfoBar: React.FC<Props> = ({ room }) => {

    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" alt="online icon" src="https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/onlineIcon.png" />
                <h3>{room}</h3>
            </div>
            <div className="RightInnerContainer">
                <a href="/"><img className="closeIcon" alt="close icon" src="https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/closeIcon.png" /></a>
            </div>

        </div>
    )
};

export default InfoBar;
