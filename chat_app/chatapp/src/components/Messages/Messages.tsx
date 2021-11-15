import React from "react";
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from "../Message/Message";
import { MessagesProp } from "../../utils/interfaces";
import './style.css';

const Messages: React.FC<MessagesProp> = ({ messages, name }) => {
    return (
        <ScrollToBottom className="messages">
            {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
        </ScrollToBottom>
    );
}

export default Messages;