import React, { ChangeEvent } from 'react';

type RadioProps = {
    checked?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    label: string;
    name: string;
    value: string;
};

const Radio: React.FC<RadioProps> = ({ checked, onChange, label, name, value }) => {
    return (
        <label className="radio">
            <input
                type="radio"
                checked={checked}
                onChange={onChange}
                name={name}
                value={value}
                className="form-radio hidden"
            />
            <span className="custom-radio"></span>
            <span className="custom-label">{label}</span>
        </label>
    );
};

export default Radio;