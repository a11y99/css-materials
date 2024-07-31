import Link from 'next/link';
import React, { useState } from 'react';

type CardProps = {
    title?: string;
    children?: React.ReactNode;
    href?: string;
    className?: string;
    maxHeight?: string;
};

const Card: React.FC<CardProps> = ({ title, children, href, className, maxHeight }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const Header = (
        <div className="p-5 border-b bg-blue-500 bg-opacity-5">
            <h1 className="font-semibold text-lg">{title}</h1>
        </div>
    );

    const Content = (
        <div
            className={`relative p-5 space-y-2.5 overflow-hidden transition-max-height duration-300 ease-in-out`}
            style={{
                maxHeight: isExpanded ? 'none' : maxHeight ? `${maxHeight}px` : 'none'
            }}
        >
            {children}
            {!isExpanded && maxHeight && (
                <div
                    className="absolute bottom-0 left-0 right-0 h-10"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'
                    }}
                />
            )}
        </div>
    );

    return (
        <div className={`border rounded ${className || ''}`}>
            {href ? <Link href={href}>{Header}</Link> : Header}
            {Content}
            {maxHeight && (
                <div className="pb-5 text-center">
                    <button
                        className="text-blue-500 hover:underline focus:outline-none"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Card;