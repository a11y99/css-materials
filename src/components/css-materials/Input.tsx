import React, { ChangeEvent, FocusEvent, useState } from 'react';

interface InputProps {
    label?: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel';
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    errorMessage?: string;
    readOnly?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
    clearable?: boolean;
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    placeholder,
    type = 'text',
    value,
    onChange,
    onFocus,
    onBlur,
    required = false,
    minLength,
    maxLength,
    pattern,
    errorMessage,
    readOnly = false,
    disabled = false,
    icon,
    clearable = false,
    size = 'medium',
    className = '',
}) => {
    const [inputValue, setInputValue] = useState(value || '');
    const [isFocused, setIsFocused] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        if (onChange) {
            onChange(event);
        }
        if (
            (required && newValue === '') ||
            (pattern && !new RegExp(pattern).test(newValue)) ||
            (minLength && newValue.length < minLength) ||
            (maxLength && newValue.length > maxLength)
        ) {
            setIsError(true);
        } else {
            setIsError(false);
        }
    };

    const handleClear = () => {
        setInputValue('');
        if (onChange) {
            const fakeEvent = { target: { value: '' } } as ChangeEvent<HTMLInputElement>;
            onChange(fakeEvent);
        }
        setIsError(false);
    };

    return (
        <div className={`input-container ${isFocused ? 'focused' : ''} ${isError ? 'error' : ''} ${className}`}>
            {label && <label className="input-label">{label}</label>}
            <div className="input-wrapper">
                {icon && <span className="input-icon">{icon}</span>}
                <input
                    type={type}
                    value={inputValue}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onFocus={(e) => {
                        setIsFocused(true);
                        if (onFocus) onFocus(e);
                    }}
                    onBlur={(e) => {
                        setIsFocused(false);
                        if (onBlur) onBlur(e);
                    }}
                    required={required}
                    minLength={minLength}
                    maxLength={maxLength}
                    pattern={pattern}
                    readOnly={readOnly}
                    disabled={disabled}
                    className={`input-element ${size}`}
                />
                {clearable && inputValue && (
                    <button type="button" className="input-clear-button" onClick={handleClear}>
                        ×
                    </button>
                )}
            </div>
            {isError && errorMessage && <span className="input-error-message">{errorMessage}</span>}
        </div>
    );
};

export default Input;