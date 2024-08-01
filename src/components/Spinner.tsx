import React from 'react';

const Spinner: React.FC = () => (
    <svg
        className="spin"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10" className="spin-circle"></circle>
        <path d="M22 12a10 10 0 01-10 10" className="spin-path"></path>
    </svg>
);

export default Spinner;