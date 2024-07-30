import React from 'react';
import Spinner from './Spinner';

type ButtonProps = {
    colorScheme: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    loading?: boolean;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ colorScheme, children, onClick, className, loading = false, disabled = false }) => {
    return (
        <button
            className={`${colorScheme}-button ${className} flex items-center ${loading || disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={onClick}
            disabled={loading || disabled}
        >
            {loading && <Spinner />}
            {children}
        </button>
    );
};

export default Button;