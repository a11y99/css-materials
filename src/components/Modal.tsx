import React from 'react';
import { FiX } from "react-icons/fi";
import Button from './css-materials/Button';

type ModalProps = {
    visible: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ visible, onClose, title, children, footer }) => {
    if (!visible) return null;

    return (
        <div className="modal-overlay">
        <div className="modal-content">
            <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
            <button className="close-button" onClick={onClose}><FiX /></button>
            </div>
            <div className="modal-body">
            {children}
            </div>
            <div className="modal-footer">
            {footer ? footer : <Button variant='secondary' onClick={onClose}>Close</Button>}
            </div>
        </div>
        </div>
    );
};

export default Modal;