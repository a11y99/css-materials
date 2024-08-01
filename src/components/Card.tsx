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
        <div className="card-header">
            <h1 className="card-title">{title}</h1>
        </div>
    );

    const Content = (
        <div
            className="card-content"
            style={{
                maxHeight: isExpanded ? 'none' : maxHeight ? `${maxHeight}px` : 'none'
            }}
        >
            {children}
            {!isExpanded && maxHeight && (
                <div
                    className="card-gradient"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'
                    }}
                />
            )}
        </div>
    );

    return (
        <div className={`card ${className || ''}`}>
            {href ? <Link href={href}>{Header}</Link> : Header}
            {Content}
            {maxHeight && (
                <div className="card-max-height">
                    <button
                        className="card-max-height-button"
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