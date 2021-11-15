import React from 'react';
import Button from '../Button/ButtonComponent';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { InputProp } from '../../utils/interfaces';
import './style.css';

const InputComponent: React.FC<InputProp> = ({ message, setMessage, sendMessage}) => {
    return (
        <form className="form">
            <input 
                className="input"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
            />

            <Button btnType="primary" onClick={(event) => sendMessage(event)} btnIcon={faPaperPlane} />
        </form>
    );
}

export default InputComponent;