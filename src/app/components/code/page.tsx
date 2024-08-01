"use client"
import React from 'react';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';

const CodeComponents = () => {
    const simpleCodeSnippet = `console.log("Hello World");`;

    return (
        <div className="w-[80%] mx-auto">
            <Header />
            <div className="mb-10 text-center flex flex-col items-center justify-center">
                <img src="/chubbs/6.svg" className="w-80" />
                <h1 className="text-xl font-bold mt-[-50px]">Code</h1>
            </div>
            <div className="space-y-5">
                {/* Usage Section */}
                <Card title="Usage">
                    <p>This is a basic usage example of the Code component.</p>
                    <Code language="javascript">{simpleCodeSnippet}</Code>
                    <Code language='typescript'>
{`import React from 'react';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';

const CodeComponents = () => {
    const simpleCodeSnippet = \`console.log("Hello World");\`;

    return (
        <div className="w-[80%] mx-auto">
            <Header />
            <div className="mb-10 text-center flex flex-col items-center justify-center">
                <img src="/chubbs/6.svg" className="w-80" />
                <h1 className="text-xl font-bold mt-[-50px]">Code Component</h1>
            </div>
            <div className="space-y-5">
                {/* Usage Section */}
                <Card title="Usage">
                    <p>This is a basic usage example of the Code component.</p>
                    <Code language="javascript">{simpleCodeSnippet}</Code>
                </Card>
            </div>
        </div>
    );
};

export default CodeComponents;`}
                    </Code>
                </Card>
            </div>
        </div>
    );
};

export default CodeComponents;