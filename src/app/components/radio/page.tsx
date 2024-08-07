"use client"
import React, { useState, ChangeEvent } from 'react';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';
import Radio from '@/components/Radio';

const RadioComponents = () => {
    const [selectedOption, setSelectedOption] = useState<string>("option1");

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="w-[80%] mx-auto">
            <Header />
            <div className="mb-10 text-center flex flex-col items-center justify-center">
                <img src="/chubbs/6.svg" className="w-80" />
                <h1 className="text-xl font-bold mt-[-50px]">Radio</h1>
            </div>
            <div className="space-y-5">
                {/* Usage Section */}
                <Card title="Usage">
                    <p>This is a basic usage example of the Radio component.</p>
                    <div className="flex flex-col space-y-2.5">
                        <Radio
                            label="Option 1"
                            name="options"
                            checked={selectedOption === "option1"}
                            onChange={handleRadioChange}
                            value="option1"
                        />
                        <Radio
                            label="Option 2"
                            name="options"
                            checked={selectedOption === "option2"}
                            onChange={handleRadioChange}
                            value="option2"
                        />
                    </div>
                    <p>Selected Option: {selectedOption}</p>
                    <Code language='typescript'>
{`import React, { useState, ChangeEvent } from 'react';
import Radio from '@/components/Radio';

const Example = () => {
    const [selectedOption, setSelectedOption] = useState<string>("option1");

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <Radio
                label="Option 1"
                name="options"
                checked={selectedOption === "option1"}
                onChange={handleRadioChange}
                value="option1"
            />
            <Radio
                label="Option 2"
                name="options"
                checked={selectedOption === "option2"}
                onChange={handleRadioChange}
                value="option2"
            />
            <p>Selected Option: {selectedOption}</p>
        </div>
    );
};

export default Example;`}
                    </Code>
                </Card>
            </div>
        </div>
    );
};

export default RadioComponents;