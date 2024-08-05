import React, { ChangeEvent, useState } from 'react';
import Input from './css-materials/Input';
import { FaSearch } from 'react-icons/fa';
import { useLinks } from '@/context/LinkContext';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    const linkItems = useLinks();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredLinks = linkItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="fixed w-[25%] h-screen top-0 left-0 bg-white p-5 mt-[50px]">
            <Input
                placeholder='Search the docs'
                icon={<FaSearch />}
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <div className="mt-5">
                <nav>
                    <ul className="space-y-2.5">
                        {filteredLinks.map((item) => (
                            <li key={item.name}>
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className={`flex items-center ${item.size === 'large' ? 'text-md' : 'text-sm'}`}
                                    >
                                        {item.icon && <span className="mr-2.5">{item.icon}</span>}
                                        {item.name}
                                    </Link>
                                ) : (
                                    <div
                                        className={`flex items-center ${item.size === 'large' ? 'text-md' : 'text-sm'}`}
                                    >
                                        {item.icon && <span className="mr-2.5">{item.icon}</span>}
                                        {item.name}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;