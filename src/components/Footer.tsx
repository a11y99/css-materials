import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-0 border-t px-10 md:px-0 py-10 mt-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:ml-10">
                    <img src="/media_kit/css-materials.png" className="mb-2.5 w-[175px]" />
                    <p className="opacity-50 text-sm">&copy; 2024 hono. All rights reserved.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-5">Support</h2>
                    <ul className='space-y-2.5'>
                        <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                        <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-5">Follow Us</h2>
                    <ul className="space-y-2.5">
                        <li><Link href="https://github.com/hn-104" className="hover:underline">GitHub</Link></li>
                        <li><Link href="https://x.com/m_hono_104" className="hover:underline">Twitter</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;