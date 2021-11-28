/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { useLocation } from "react-router";
import InfoBar from "../InfoBar/InfoBar";
import InputComponent from "../InputComponent/InputComponent";
import { ENDPOINT } from "../../utils/interfaces";
import Messages from "../Messages/Messages";
import { messagesObj } from "../../utils/interfaces";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import messageActions from "../../redux/actions/messageActions";
import TextContainer from "../TextContainer/TextContainer";
import { User } from "../../utils/interfaces";
import './style.css';

let socket;

const Chat: React.FC = () => {
    const chatMessages = useAppSelector((state) => state.message.messages)

    const [name, setName] = useState<string>('');
    const [room, setRoom] = useState<string>('');
    const [roomUsers, setRoomUsers] = useState<User[]>([]);
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<messagesObj[]>(chatMessages);
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const data = queryString.parse(location.search);

        socket = io(ENDPOINT, { transports: ['websocket']});

        if (typeof data.name === 'string' && typeof data.room === 'string') {
            setName(data.name);
            setRoom(data.room);
        }

        socket.emit('join', { name: data.name, room: data.room }, () => {});

        return () => {
            socket.disconnect();
            socket.off(); // close the socket.
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('roomData', (roomData) => {
            setRoom(roomData.room);
            setRoomUsers(roomData.users);
        })
    }, [roomUsers]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })

        dispatch(messageActions.newMessage(messages));
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

            <TextContainer users={roomUsers}/>
        </div>
    )
}

export default Chat;