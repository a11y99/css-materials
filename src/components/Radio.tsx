import React, { ChangeEvent } from 'react';

type RadioProps = {
    checked?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    label: string;
    name: string;
};

const Radio: React.FC<RadioProps> = ({ checked, onChange, label, name }) => {
    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="radio"
                checked={checked}
                onChange={onChange}
                name={name}
                className="form-radio hidden"
            />
            <span className="custom-radio"></span>
            <span className="ml-2">{label}</span>
        </label>
    );
};

export default Radio;