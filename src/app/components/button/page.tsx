"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';

const ButtonComponents = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="w-[80%] mx-auto">
            <Header />
            <div className="mb-10 text-center flex flex-col items-center justify-center">
                <img src="/chubbs/6.svg" className="w-80" />
                <h1 className="text-xl font-bold mt-[-50px]">Button</h1>
            </div>
            <div className="space-y-5">
                {/* Usage Section */}
                <Card title="Usage">
                    <p>This is a basic usage example of the Button component.</p>
                    <Button colorScheme="blue">
                        Button
                    </Button>
                    <Code language='html'>
{`<Button colorScheme="blue">
    Button
</Button>`}
                    </Code>
                </Card>

                {/* Loading State Section */}
                <Card title="Loading State">
                    <p>This example shows the Button component in a loading state.</p>
                    <Button colorScheme="blue" onClick={handleClick} loading={loading}>
                        Load Data
                    </Button>
                    <Code language="javascript">
{`const [loading, setLoading] = useState(false);

const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 2000);
};

// In the JSX:
<Button colorScheme="blue" onClick={handleClick} loading={loading}>
    Load Data
</Button>`}
                    </Code>
                </Card>

                {/* Disabled State Section */}
                <Card title="Disabled State">
                    <p>This example shows the Button component in a disabled state.</p>
                    <Button colorScheme="blue" disabled={true}>
                        Disabled Button
                    </Button>
                    <Code language="html">
{`<Button colorScheme="blue" disabled={true}>
    Disabled Button
</Button>`}
                    </Code>
                </Card>

                {/* Color Schemes Section */}
                <Card title="Color Schemes">
                    <p>This example shows the Button component with different color schemes.</p>
                    <div className="flex space-x-2.5 w-full overflow-x-auto">
                        <Button colorScheme="red">Red</Button>
                        <Button colorScheme="orange">Orange</Button>
                        <Button colorScheme="yellow">Yellow</Button>
                        <Button colorScheme="green">Green</Button>
                        <Button colorScheme="blue">Blue</Button>
                        <Button colorScheme="purple">Purple</Button>
                        <Button colorScheme="gray">Gray</Button>
                    </div>
                    <Code language="html">
{`<Button colorScheme="red">Red</Button>
<Button colorScheme="orange">Orange</Button>
<Button colorScheme="yellow">Yellow</Button>
<Button colorScheme="green">Green</Button>
<Button colorScheme="blue">Blue</Button>
<Button colorScheme="purple">Purple</Button>
<Button colorScheme="gray">Gray</Button>`}
                    </Code>
                </Card>

                {/* Click Event Section */}
                <Card title="Click Event">
                    <p>This example shows the Button component handling click events.</p>
                    <Button colorScheme="blue" onClick={() => alert('Button Clicked!')}>
                        Click Me
                    </Button>
                    <Code language="html">
{`<Button colorScheme="blue" onClick={() => alert('Button Clicked!')}>
    Click Me
</Button>`}
                    </Code>
                </Card>
            </div>
        </div>
    );
};

export default ButtonComponents;