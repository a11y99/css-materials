import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function Header() {
    return (
        <div className="flex py-2.5 px-5 w-full bg-white fixed left-0 top-0 z-50">
            <div className="flex space-x-5">
                <Link href="/" className="w-[150px]"><img src="/text-logo.png" /></Link>
                <Link href="/example" className="font-medium">Example</Link>
                <Link href="/components" className="font-medium">Components</Link>
            </div>
            <div className="ml-auto">
                <Link href="https://github.com/hn-104/css-materials" className="italic flex items-center">GitHub<FiExternalLink className="ml-1.5" /></Link>
            </div>
        </div>
    )
}