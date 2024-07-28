import React from 'react';

type ButtonProps = {
    colorScheme: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ colorScheme, children, onClick, className }) => {
    return (
        <button className={`${colorScheme}-button ${className}`} onClick={onClick}>
        {children}
        </button>
    );
};

export default Button;