import React, { useState, useEffect, useRef } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ModalProp } from "../../utils/interfaces";
import Button from "../Button/ButtonComponent";
import './style.css'

const Modal:React.FC<ModalProp> = ({ 
    show, handleClose, handleSave, title, modalType, content, 
}) => {
    const modalRef = useRef<HTMLDivElement>();
    const [modalInputValue, setModalInputValue] = useState<string>('');
    const [addPassword, setAddPassword] = useState<boolean>(false);

    const setPassword = () => {
        localStorage.setItem("roomPass", modalInputValue);

        handleSave();
    };

    const handleCancelBtn = () => {
        if (modalType === "insertPassword") {
            handleClose();
        } else {
            if (!addPassword) { 
                localStorage.setItem("roomPass", "");
                handleSave(); 
            }
            else { 
                setAddPassword(false);
            }
        }
    }

    const handleJoinBtn = () => {
        if (!addPassword) {
            setAddPassword(true)
        } else {
            setPassword();
        }
    }

    useEffect(() => {
        setAddPassword(modalType === "insertPassword" ? true : false);
    }, [modalType])

    useEffect(() => {
        const func = (e) => { 
            if (e.target === modalRef.current) {
                handleClose();
            } 
        } 
        let copyRef;
        if (modalRef && modalRef.current) {
            modalRef.current.addEventListener('click', func);
            copyRef = modalRef.current;
        }

        return () => {
            if (copyRef) {
                copyRef.removeEventListener('click', func);
            }
        }
    });

    return (
        show && (
            <div ref={modalRef} className="modal-window">
                <div className="modal-box">
                    <div className="modal-header">
                        <p>{title}</p>
                        <div>
                            <Button btnType="danger" onClick={handleClose}  btnIcon={faTimes} />
                        </div>
                    </div>

                    <div className="modal-content">
                        {!addPassword ? content : (
                            <input 
                                type="text" 
                                className="modal-input" 
                                value={modalInputValue}
                                onChange={(e) => setModalInputValue(e.target.value)}
                                placeholder={modalType === "setPassword" ? "Set password" 
                                    : "Insert password"}
                            />
                        )}
                    </div>

                    <div className="modal-buttons">
                        <div>
                            <Button 
                                btnType="danger" 
                                onClick={() => handleCancelBtn()} 
                                label={!addPassword ? "No" : "Cancel"} 
                            />
                            <Button 
                                btnType="normal"   
                                onClick={() => handleJoinBtn()} 
                                label={!addPassword ? "Yes" : "Join"} 
                            />
                        </div>
                    </div>
                </div>
            </div>
    ))
}

export default Modal;