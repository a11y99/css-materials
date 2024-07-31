import Link from "next/link";
import { FiExternalLink, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="flex py-2.5 px-5 w-full bg-white fixed left-0 top-0 z-50">
                <div className="flex justify-between w-full">
                    <Link href="/" className="w-[150px]"><img src="/text-logo.png" alt="Logo" /></Link>
                    <div className="flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                    <div className="hidden md:flex space-x-5 ml-5">
                        <Link href="/example">Example</Link>
                        <Link href="/components">Components</Link>
                    </div>
                    <div className="hidden md:block ml-auto">
                        <Link href="https://github.com/hn-104/css-materials" className="flex items-center">GitHub<FiExternalLink className="ml-1.5" /></Link>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="fixed left-0 top-[44px] w-full bg-white z-40 shadow-lg md:hidden">
                    <div className="flex flex-col items-start px-5 py-2.5 space-y-2.5">
                        <Link href="/example">Example</Link>
                        <Link href="/components">Components</Link>
                        <Link href="https://github.com/hn-104/css-materials" className="flex items-center">GitHub<FiExternalLink className="ml-1.5" /></Link>
                    </div>
                </div>
            )}
        </div>
    );
}