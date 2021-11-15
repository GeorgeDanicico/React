/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { useLocation } from "react-router";
import InfoBar from "../InfoBar/InfoBar";
import InputComponent from "../InputComponent/InputComponent";
import Messages from "../Messages/Messages";
import { messagesObj } from "../../utils/interfaces";
import './style.css';

let socket;

const Chat: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [room, setRoom] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<messagesObj[]>([]);
    const ENDPOINT = 'localhost:5000';
    const location = useLocation()

    useEffect(() => {
        const data = queryString.parse(location.search);

        socket = io(ENDPOINT, { transports: ['websocket']});

        if (typeof data.name === 'string' && typeof data.room === 'string') {
            setName(data.name);
            setRoom(data.room);
        }

        socket.emit('join', { name: data.name, room: data.room }, () => {});

        return () => {
            socket.emit('disconnect')
            socket.off(); // close the socket.
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })

        console.log(messages);
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    };


    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <InputComponent message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default Chat;