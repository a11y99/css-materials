import React from 'react';
import { useLinks } from '@/context/LinkContext';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    const linkItems = useLinks();

    return (
        <div className="fixed w-[25%] h-screen bg-white left-0 bg-white p-5 top-16">
            <ul className="space-y-2.5">
                {linkItems.map((item) => (
                    <li key={item.name}>
                        {item.href ? (
                            <Link
                                href={item.href}
                                className={`flex items-center ${item.size === 'large' ? 'font-semibold' : ''}`}
                            >
                                {item.icon && <span className="mr-2.5">{item.icon}</span>}
                                {item.name}
                            </Link>
                        ) : (
                            <div
                                className={`flex items-center ${item.size === 'large' ? 'font-semibold' : ''}`}
                            >
                                {item.icon && <span className="mr-2.5">{item.icon}</span>}
                                {item.name}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;