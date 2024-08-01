import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

type CodeProps = {
    children: string;
    language?: string;
};

const Code: React.FC<CodeProps> = ({ children, language = 'javascript' }) => {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

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