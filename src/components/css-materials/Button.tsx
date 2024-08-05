import React from 'react';

interface ButtonProps {
    text?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
    disabled?: boolean;
    loading?: boolean;
    shape?: 'rounded' | 'pill' | 'circle';
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    variant = 'primary',
    size = 'medium',
    icon,
    disabled = false,
    loading = false,
    shape = 'rounded',
    children
}) => {
    return (
        <button
            className={`button ${variant} ${size} ${shape} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''}`}
            onClick={onClick}
            disabled={disabled || loading}
        >
        {loading ? <span className={`loading-icon ${variant}`}></span> : icon && <span className="button-icon">{icon}</span>}
            {children || text}
        </button>
    );
}

export default Button;