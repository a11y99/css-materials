import React from 'react';

const Switch: React.FC = () => {
    return (
        <div className="switch">
        <label className="switch">
            <input type="checkbox" />
            <span className="slide round"></span>
        </label>
        </div>
    );
};

export default Switch;