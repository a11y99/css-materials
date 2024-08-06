import React from 'react';
import { useLinks } from '@/context/LinkContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
    const linkItems = useLinks();
    const pathname = usePathname();

    return (
        <div className="fixed w-[25%] h-[calc(100vh-56px)] bg-white left-0 bg-white p-5 top-[56px] overflow-y-scroll">
            <ul className="space-y-2.5">
                {linkItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <li key={item.name}>
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className={`flex items-center py-[5px] px-[10px] rounded-md ${item.size === 'large' ? 'font-semibold' : ''} ${isActive ? 'bg-[#007fff] bg-opacity-10 text-[#007fff]' : ''}`}
                                >
                                    {item.icon && <span className="mr-2.5">{item.icon}</span>}
                                    {item.name}
                                </Link>
                            ) : (
                                <div
                                    className={`flex items-center py-[5px] px-[7.5px] ${item.size === 'large' ? 'font-semibold' : ''}`}
                                >
                                    {item.icon && <span className="mr-2.5">{item.icon}</span>}
                                    {item.name}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;