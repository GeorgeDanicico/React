import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ModalProp } from "../../utils/interfaces";
import Button from "../Button/ButtonComponent";
import './style.css'

const Modal:React.FC<ModalProp> = ({ show, handleClose }) => {
    return (
        show && (
        <div className="modal-box">
            <div className="modal-header">
                <p>Modal Title</p>
                <div>
                    <Button btnType="danger" onClick={handleClose}  btnIcon={faTimes} />
                </div>
            </div>

            <div className="modal-content">
                Modal content to check if it is displayed correctly
            </div>

            <div className="modal-buttons">
                <div>
                    <Button btnType="danger" onClick={handleClose} label="Close" />
                    <Button btnType="normal" onClick={() => {}} label="Save changes" />
                </div>
            </div>
        </div>
    ))
}

export default Modal;