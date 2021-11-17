import React from "react";
import { TextContainerProp } from "../../utils/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import './style.css';

const TextContainer: React.FC<TextContainerProp> = ({ users }) => {

    return (
        <div className="text-container">
            <div className="text-label">
                Online
            </div>

            <div className="users-container">
                {users.map((user) => 
                    <div key={user.id} className="user-box"> 
                        <FontAwesomeIcon icon={faCircle} className="onlineIcon" />
                        {user.name}
                    </div>)}
            </div>
        </div>
    )
}

export default TextContainer;
