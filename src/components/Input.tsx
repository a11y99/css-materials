import React from 'react';

type InputProps = {
    placeholder: string;
};

const Input: React.FC<InputProps> = ({ placeholder }) => {
    return (
        <input placeholder={placeholder} className="input" />
    );
};

export default Input;