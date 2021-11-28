import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from "../Modal/Modal";
import './style.css';

const Join: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [room, setRoom] = useState<string>('');
    const [requiredPassword, setRequiredPassword] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [roomExistence, setRoomExistence] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSave = async () => {
        const password = localStorage.getItem('roomPass');
        const data = {
            room: room, 
            password: password
        };

        if (!roomExistence) {
            await fetch('http://localhost:5000/rooms', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(data),
            });
        }

        navigate(`/chat?name=${name}&room=${room}`);
    }

    const handleSignIn = async () => {
        if (name && room) {
            await fetch(`http://localhost:5000/rooms/${room}`, {
                method: 'GET',
            }).then((response) => response.json().then((result) => {
                
                if (result.password === "") {
                    navigate(`/chat?name=${name}&room=${room}`);
                } else {
                    setRoomExistence(true);
                    setRequiredPassword(true);
                    setShowModal(true);
                }

                localStorage.setItem("roomPass", result.password);
            }))
            .catch(() => {
                setRequiredPassword(false);
                setShowModal(true);
            });
        }
    }

    const handleCancel = () => { setShowModal(false) };

    useEffect(() => {
        setRequiredPassword(false);
        setRoomExistence(false);
        setRoom("");
        setName("");
    }, []);

    return (
    <div className="joinOuterContainer">
        <div className="joinInnerContainer">
            <h1 className="heading">Join</h1>

            <div><input placeholder="Name" value={name} className="joinInput" type="text" onChange={(e) => setName(e.target.value)} /></div>
            <div><input placeholder="Room" value={room} className="joinInput mt-20" type="text" onChange={(e) => setRoom(e.target.value)} /></div>

            <button className="button mt-20" onClick={() => handleSignIn()}>Sign In</button>
        </div>
        <Modal 
            show={showModal} 
            handleClose={handleCancel} 
            handleSave={handleSave}
            title="Room Password"
            modalType={requiredPassword ? "insertPassword" : "setPassword"}
            content="Do you want to set a password for the room?"
        />
    </div>)
}

export default Join;