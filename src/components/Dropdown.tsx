import React, { useState } from 'react';
import { FiChevronDown } from "react-icons/fi";

type DropdownProps = {
    label: string;
    options: string[];
    onSelect: (option: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {selectedOption || label}
                    <FiChevronDown className="ml-2.5" />
                </button>
            </div>
            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                >
                    <div className="py-1" role="none">
                        {options.map(option => (
                            <button
                                key={option}
                                onClick={() => handleSelect(option)}
                                className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                role="menuitem"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;