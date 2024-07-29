import React, { ChangeEvent } from 'react';

type InputProps = {
    placeholder?: string;
    type?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ placeholder, type = 'text', onChange }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className="input"
        />
    );
};

export default Input;