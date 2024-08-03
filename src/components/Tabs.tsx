import React, { useState, ReactNode } from 'react';

interface TabProps {
    label: string;
    children: ReactNode;
    disabled?: boolean;
}

interface TabsProps {
    children: React.ReactElement<TabProps>[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (index: number, disabled?: boolean) => {
        if (!disabled) {
        setActiveIndex(index);
        }
    };

    return (
        <div className="tabs">
        <div className="tab-list">
            {React.Children.map(children, (child, index) => (
            <button
                className={`tab ${index === activeIndex ? 'active' : ''} ${child.props.disabled ? 'disabled' : ''}`}
                onClick={() => handleTabClick(index, child.props.disabled)}
            >
                {child.props.label}
            </button>
            ))}
        </div>
        <div className="tab-content">
            {children[activeIndex].props.children}
        </div>
        </div>
    );
    };

    const Tab: React.FC<TabProps> = ({ children }) => {
    return (
        <div className="tab-panel">
        {children}
        </div>
    );
};

export { Tabs, Tab };