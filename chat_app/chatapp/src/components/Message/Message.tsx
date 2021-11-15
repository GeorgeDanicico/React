import React, { useEffect, useRef } from "react";
import ReactEmoji from 'react-emoji';
import { MessageProp } from "../../utils/interfaces";
import './style.css';

const Message: React.FC<MessageProp> = ({ message, name}) => {
    const isSentByCurrentUser = useRef(false);

    const trimmedName = name.trim().toLowerCase();

    useEffect(() => {
        if (trimmedName === message.user) {
            isSentByCurrentUser.current = true;
        } else isSentByCurrentUser.current = false;
    });

    return (
        isSentByCurrentUser.current ? (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{ReactEmoji.emojify(message.text)}</p>
                </div>
            </div>
        )
        : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(message.text)}</p>
                </div>
                <p className="sentText pl-10">{message.user}</p>
            </div>
        )
    )
}

export default Message;