import React from 'react';
import { FiX } from "react-icons/fi";
import Button from './Button';

type AlertDialogProps = {
    visible: boolean;
    onClose: () => void;
    title: string;
    message: string;
};

const AlertDialog: React.FC<AlertDialogProps> = ({ visible, onClose, title, message }) => {
    if (!visible) return null;

    return (
        <div className="alert-dialog">
            <div className="alert-dialog-content">
                <div className="alert-dialog-header">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <button className="close-button" onClick={onClose}><FiX /></button>
                </div>
                <div className="alert-dialog-body">
                    <p>{message}</p>
                </div>
                <div className="alert-dialog-footer">
                    <Button colorScheme="gray" onClick={onClose}>Close</Button>
                </div>
            </div>
        </div>
    );
};

export default AlertDialog;