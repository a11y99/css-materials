import React from 'react';
import Button from './Button';

interface AlertDialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
    isOpen,
    onClose,
    title,
    message,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm
}) => {
    if (!isOpen) return null;

    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm();
        }
        onClose();
    };

    return (
        <div className="alert-dialog-overlay">
            <div className="alert-dialog">
                <div className="alert-dialog-header">
                    <h2>{title}</h2>
                </div>
                <div className="alert-dialog-body">
                    <p>{message}</p>
                </div>
                <div className="alert-dialog-footer">
                    <Button text={cancelText} variant="secondary" onClick={onClose} />
                    <Button text={confirmText} variant='primary' onClick={handleConfirm} />
                </div>
            </div>
        </div>
    );
}

export default AlertDialog;