import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="flex py-[12.5px] px-5 shadow w-full bg-white fixed left-0 top-0 z-50">
                <div className="flex justify-between w-full items-center">
                    <Link href="/" className="w-[175px]"><img src="/css-materials.png" alt="Logo" /></Link>
                    <div className="flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                    <div className="hidden md:flex ml-auto space-x-5">
                        <Link href="/docs/getting-started">Docs</Link>
                        <Link href="https://example-css-materials.vercel.app">Example</Link>
                        <Link href="/components">Components</Link>
                        <Link href="https://github.com/hn-104/css-materials" className="flex items-center"><FaGithub className="text-2xl text-gray-500" /></Link>
                    </div>
                </div>
            </div>
            <div className={`fixed left-0 top-[40px] w-full h-[calc(100vh-40px)] bg-white z-50 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col border-t px-5 mt-2.5 pt-3.5 pb-5 space-y-[15px]">
                    <div className="flex">
                        <Link href="https://github.com/hn-104/css-materials"><FaGithub className="text-[32px] text-gray-500" /></Link>
                    </div>
                    <Link href="/docs/getting-started">Docs</Link>
                    <Link href="https://example-css-materials.vercel.app">Example</Link>
                    <Link href="/components">Components</Link>
                </div>
            </div>
        </div>
    );
}