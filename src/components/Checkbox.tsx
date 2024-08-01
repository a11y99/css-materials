import React, { ChangeEvent } from 'react';

type CheckboxProps = {
    checked?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
    return (
        <label className="checkbox">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="form-checkbox hidden"
            />
            <span className="custom-checkbox"></span>
            <span className="custom-label">{label}</span>
        </label>
    );
};

export default Checkbox;