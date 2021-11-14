import React from "react";
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from "../Message/Message";
import './style.css';

interface obj {
    user: string,
    text: string,
}

interface Props {
    messages: obj[],
    name: string,
}

const Messages: React.FC<Props> = ({ messages, name }) => {
    return (
        <ScrollToBottom className="messages">
            {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
        </ScrollToBottom>
    );
}

export default Messages;