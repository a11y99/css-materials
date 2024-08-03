import React from 'react';
import Spinner from './Spinner';

type ButtonProps = {
    colorScheme?: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    loading?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded' | 'square' | 'circular';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
    colorScheme = 'blue',
    children,
    onClick,
    className = '',
    loading = false,
    disabled = false,
    size = 'medium',
    shape = 'rounded',
    leftIcon,
    rightIcon
}) => {
    const sizeClass = size ? `button-${size}` : '';
    const shapeClass = shape ? `button-${shape}` : '';

    return (
        <button
            className={`button ${colorScheme}-button ${className} ${sizeClass} ${shapeClass} ${loading || disabled ? 'disabled-button' : ''}`}
            onClick={onClick}
            disabled={loading || disabled}
        >
            {loading && <Spinner />}
            {!loading && leftIcon && <span className="left-icon">{leftIcon}</span>}
            {children}
            {!loading && rightIcon && <span className="right-icon">{rightIcon}</span>}
        </button>
    );
};

export default Button;