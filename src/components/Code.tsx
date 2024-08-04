import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

type CodeProps = {
    children: string;
    language?: string;
    highlights?: { text: string; color: string }[];
};

const Code: React.FC<CodeProps> = ({ children, language = 'javascript', highlights = [] }) => {
    useEffect(() => {
        hljs.highlightAll();
        applyCustomHighlights();
    }, []);

    const applyCustomHighlights = () => {
        if (highlights.length > 0) {
            const codeBlocks = document.querySelectorAll('.code pre code');
            codeBlocks.forEach(block => {
                let html = block.innerHTML;
                highlights.forEach(({ text, color }) => {
                    const regex = new RegExp(`(${escapeRegExp(text)})`, 'g');
                    html = html.replace(regex, `<span style="color: ${color};">$1</span>`);
                });
                block.innerHTML = html;
            });
        }
    };

    const escapeRegExp = (string: string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    return (
        <div className="code">
            <pre className="hljs">
                <code className={`language-${language}`}>
                    {children}
                </code>
            </pre>
        </div>
    );
};

export default Code;