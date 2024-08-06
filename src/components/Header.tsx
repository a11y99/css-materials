import Link from "next/link";
import { FiMenu, FiSearch, FiStar, FiX } from "react-icons/fi";
import { useState } from "react";
import { useLinks } from '@/context/LinkContext';
import Button from "./css-materials/Button";
import Input from "./css-materials/Input";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const linkItems = useLinks();

    return (
        <div>
            <div className="flex py-[12.5px] bg-opacity-[75%] backdrop-blur px-5 shadow w-full bg-white fixed left-0 top-0 z-50">
                <div className="flex justify-between w-full items-center whitespace-nowrap space-x-5 lg:space-x-10">
                    <div className="min-w-[175px] max-w-[175px] md:w-auto">
                        <Link href="/"><img src="/media_kit/css-materials.png" alt="Logo" /></Link>
                    </div>
                    <Input placeholder="Type a word to search the document..." icon={<FiSearch />} className="w-full hidden md:block" size="small" />
                    <div className="flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                    <div className="hidden md:flex ml-auto space-x-5 items-center">
                        <Link href="/docs/getting-started">Getting Started</Link>
                        <Link href="/docs/getting-started">Components</Link>
                        <Link href="https://github.com/hn-104/css-materials"><Button variant="secondary" size="small" icon={<FiStar />}>Star on GitHub</Button></Link>
                    </div>
                </div>
            </div>
            <div className={`fixed left-0 top-[49px] w-full h-[calc(100vh-49px)] bg-opacity-[75%] backdrop-blur bg-white z-50 md:hidden transition-opacity duration-150 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col border-t px-5 pt-3.5 pb-5 space-y-3.5">
                    <div className="grid grid-cols-2 gap-2.5">
                        <Link href="https://github.com/hn-104/css-materials" className="w-full flex flex-col"><Button size="small" icon={<FiStar />} text="Star on GitHub" /></Link>
                        <Link href="/docs/getting-started" className="w-full flex flex-col"><Button variant="secondary" size="small" text="Getting Started" /></Link>
                        <Link href="/components/alert-dialog" className="w-full flex flex-col"><Button variant="secondary" size="small" text="Components" /></Link>
                    </div>
                </div>
                <div className="px-5">
                    <nav>
                        <ul className="space-y-2.5">
                            {linkItems.map((item) => (
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
        </div>
    );
}