"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';
import Checkbox from '@/components/Checkbox';

const CheckboxComponents = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="w-[80%] mx-auto">
            <Header />
            <div className="mb-10 text-center flex flex-col items-center justify-center">
                <img src="/chubbs/6.svg" className="w-80" />
                <h1 className="text-xl font-bold mt-[-50px]">Checkbox</h1>
            </div>
            <div className="space-y-5">
                {/* Usage Section */}
                <Card title="Usage">
                    <p>This is a basic usage example of the Checkbox component.</p>
                    <Checkbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        label="Accept Terms and Conditions"
                    />
                    <p>Checkbox is {isChecked ? "checked" : "unchecked"}</p>
                    <Code language='typescript'>
{`import React, { useState } from 'react';
import Checkbox from '@/components/Checkbox';

const Example = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div>
            <Checkbox
                checked={isChecked}
                onChange={handleCheckboxChange}
                label="Accept Terms and Conditions"
            />
            <p>Checkbox is {isChecked ? "checked" : "unchecked"}</p>
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

export default CheckboxComponents;