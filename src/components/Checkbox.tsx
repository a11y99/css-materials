import React, { ChangeEvent } from 'react';

type CheckboxProps = {
    checked?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
    return (
        <label className="inline-flex items-center">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="form-checkbox h-5 w-5 text-blue-custom"
            />
            <span className="ml-2">I agree to the terms and conditions</span>
        </label>
    );
};

export default Checkbox;