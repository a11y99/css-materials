"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';
import Slider from '@/components/Slider';

const SliderComponents = () => {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (value: number) => {
        setSliderValue(value);
    };

    return (
        <div className="w-[80%] mx-auto">
            <Header />
            <div className="mb-10 text-center flex flex-col items-center justify-center">
                <img src="/chubbs/6.svg" className="w-80" />
                <h1 className="text-xl font-bold mt-[-50px]">Slider</h1>
            </div>
            <div className="space-y-5">
                {/* Usage Section */}
                <Card title="Usage">
                    <p>This is a basic usage example of the Slider component.</p>
                    <Slider value={sliderValue} onChange={handleSliderChange} />
                    <p>Slider Value: {sliderValue}</p>
                    <Code language='typescript'>
{`import React, { useState } from 'react';
import Slider from '@/components/Slider';

const Example = () => {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (value: number) => {
        setSliderValue(value);
    };

    return (
        <div>
            <Slider value={sliderValue} onChange={handleSliderChange} />
            <p>Slider Value: {sliderValue}</p>
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

export default SliderComponents;