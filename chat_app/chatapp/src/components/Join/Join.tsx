import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Modal from "../Modal/Modal";
import './style.css';

const Join: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [room, setRoom] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSave = () => {

    }

    const handleCancel = () => { setShowModal(false) };

    return (
    <div className="joinOuterContainer">
        <div className="joinInnerContainer">
            <h1 className="heading">Join</h1>

            <div><input placeholder="Name" value={name} className="joinInput" type="text" onChange={(e) => setName(e.target.value)} /></div>
            <div><input placeholder="Room" value={room} className="joinInput mt-20" type="text" onChange={(e) => setRoom(e.target.value)} /></div>

            {/* /<Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}> */}
                <button className="button mt-20" onClick={() => setShowModal(true)}>Sign In</button>
            {/* </Link> */}
        </div>
        <Modal show={showModal} handleClose={handleCancel} />
    </div>)
}

export default Join;