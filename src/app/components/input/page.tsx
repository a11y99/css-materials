"use client"
import React, { useState, ChangeEvent } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';
import Input from '@/components/Input';

const InputComponents = () => {
    const [inputValue, setInputValue] = useState("");
    const [colorValue, setColorValue] = useState("#000000");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setColorValue(event.target.value);
    };

    return (
        <div className="w-[80%] mx-auto">
            <Header />
            <div className="mb-10 text-center flex flex-col items-center justify-center">
                <img src="/chubbs/6.svg" className="w-80" />
                <h1 className="text-xl font-bold mt-[-50px]">Input</h1>
            </div>
            <div className="space-y-5">
                {/* Usage Section */}
                <Card title="Usage">
                    <p>This is a basic usage example of the Input component.</p>
                    <Input placeholder="Type something..." onChange={handleInputChange} />
                    <p>You typed: {inputValue}</p>
                    <Code language='typescript'>
{`import React, { useState, ChangeEvent } from 'react';
import Input from '@/components/Input';

const Example = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <Input placeholder="Type something..." onChange={handleInputChange} />
            <p>You typed: {inputValue}</p>
        </div>
    );
};

export default Example;`}
                    </Code>
                </Card>

                {/* Type Attribute Section */}
                <Card title="Input Type Attribute">
                    <p>The <code>type</code> attribute specifies the type of <code>input</code> element to display. It can be set to different values such as <code>text</code>, <code>password</code>, <code>email</code>, <code>color</code>, etc. Here is an example of using different <code>type</code> attributes with the Input component.</p>
                    <Input type="password" placeholder="Enter your password" onChange={handleInputChange} />
                    <Input type="email" placeholder="Enter your email" onChange={handleInputChange} />
                    <Input type="color" onChange={handleColorChange} />
                    <p>Selected color: {colorValue}</p>
                    <Code language='typescript'>
{`import React, { useState, ChangeEvent } from 'react';
import Input from '@/components/Input';

const ExampleWithTypes = () => {
    const [inputValue, setInputValue] = useState("");
    const [colorValue, setColorValue] = useState("#000000");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setColorValue(event.target.value);
    };

    return (
        <div>
            <Input type="password" placeholder="Enter your password" onChange={handleInputChange} />
            <Input type="email" placeholder="Enter your email" onChange={handleInputChange} />
            <Input type="color" onChange={handleColorChange} />
            <p>Selected color: {colorValue}</p>
        </div>
    );
};

export default ExampleWithTypes;`}
                    </Code>
                </Card>
            </div>
        </div>
    );
};

export default InputComponents;