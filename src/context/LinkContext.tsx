import React, { createContext, useContext, ReactNode } from 'react';
import { FiBookOpen, FiCode, FiSettings, FiHelpCircle } from 'react-icons/fi';

type LinkItem = {
    name: string;
    href?: string;
    icon?: React.ReactNode;
    size?: 'small' | 'large';
};

const linkItems: LinkItem[] = [
    { name: 'Getting Started', href: '/docs/getting-started', icon: <FiBookOpen />, size: 'large' },
    { name: 'Components', icon: <FiCode />, size: 'large' },
    // Components
    { name: 'AlertDialog', href: '/components/alert-dialog', size: 'small' },
    { name: 'Button', href: '/components/button', size: 'small' },
    { name: 'Input', href: '/components/input', size: 'small' },
    { name: 'Table', href: '/components/table', size: 'small' },
    { name: 'Tabs', href: '/components/tabs', size: 'small' },
    //
    { name: 'FAQ', href: '/faq', icon: <FiHelpCircle />, size: 'large' },
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