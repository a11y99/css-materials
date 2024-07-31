import Link from 'next/link';
import React from 'react';

type CardProps = {
    title?: string;
    children?: React.ReactNode;
    link?: string;
    className?: string;
};

const Card: React.FC<CardProps> = ({ title, children, link, className }) => {
    const Header = (
        <div className="p-5 border-b bg-blue-500 bg-opacity-5">
            <h1 className="font-semibold text-lg">{title}</h1>
        </div>
    );

    return (
        <div className={`border rounded ${className || ''}`}>
            {link ? <Link href={link}>{Header}</Link> : Header}
            <div className="p-5 space-y-2.5">
                {children}
            </div>
        </div>
    );
};

export default Card;