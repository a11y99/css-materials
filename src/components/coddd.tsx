import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, funky, prism, tomorrow, vs, holiTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
    language: string;
    value: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
    return (
        <SyntaxHighlighter language={language} style={oneDark}>
            {value}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;