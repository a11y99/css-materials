import React from 'react';
import { FiX } from "react-icons/fi";
import Button from './Button';

type AlertDialogProps = {
    visible: boolean;
    onClose: () => void;
    title: string;
    message: string;
    type: 'default' | 'delete' | 'submit';
};

const AlertDialog: React.FC<AlertDialogProps> = ({ visible, onClose, title, message, type }) => {
    if (!visible) return null;

    const renderFooterButtons = () => {
        switch (type) {
        case 'delete':
            return (
            <>
                <Button colorScheme="gray" onClick={onClose} className="mr-1.5">Cancel</Button>
                <Button colorScheme="red" onClick={onClose}>Delete</Button>
            </>
            );
        case 'submit':
            return (
            <>
                <Button colorScheme="gray" onClick={onClose} className="mr-1.5">Cancel</Button>
                <Button colorScheme="green" onClick={onClose}>Submit</Button>
            </>
            );
        case 'default':
        default:
            return <Button colorScheme="gray" onClick={onClose}>Close</Button>;
        }
    };

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
            {renderFooterButtons()}
            </div>
        </div>
        </div>
    );
};

export default AlertDialog;