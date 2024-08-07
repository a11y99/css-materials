import React, { createContext, useContext, ReactNode } from 'react';
import { FiBookOpen, FiCode } from 'react-icons/fi';

type LinkItem = {
    name: string;
    href?: string;
    icon?: React.ReactNode;
    size?: 'small' | 'large';
};

const linkItems: LinkItem[] = [
    { name: 'Getting Started', icon: <FiBookOpen />, size: 'large' },
    { name: 'Installation', href: '/docs/getting-started', size: 'small' },
    { name: 'Components', icon: <FiCode />, size: 'large' },
    // Components
    { name: 'AlertDialog', href: '/components/alert-dialog', size: 'small' },
    { name: 'Avatar', href: '/components/avatar', size: 'small' },
    { name: 'Button', href: '/components/button', size: 'small' },
    { name: 'Input', href: '/components/input', size: 'small' },
    { name: 'Table', href: '/components/table', size: 'small' },
    { name: 'Tabs', href: '/components/tabs', size: 'small' },
];

const LinkContext = createContext<LinkItem[]>(linkItems);

export const LinkProvider = ({ children }: { children: ReactNode }) => {
    return (
        <LinkContext.Provider value={linkItems}>
            {children}
        </LinkContext.Provider>
    );
};

export const useLinks = () => {
    return useContext(LinkContext);
};