import React from 'react';

type CardProps = {
    title: string;
    children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
        <div className="border rounded">
            <div className="p-5 border-b bg-blue-500 bg-opacity-5">
                <h1 className="font-semibold text-lg">{title}</h1>
            </div>
            <div className="p-5 space-y-2.5">
                {children}
            </div>
        </div>
    );
};

export default Card;