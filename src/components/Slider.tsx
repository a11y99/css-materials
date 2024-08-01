import React, { useState, useEffect } from 'react';

type SliderProps = {
    value: number;
    onChange: (value: number) => void;
};

const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
    const [sliderValue, setSliderValue] = useState<number>(value);

    useEffect(() => {
        const slider = document.getElementById('myRange') as HTMLInputElement;
        if (slider) {
        slider.value = sliderValue.toString();
        }
    }, [sliderValue]);

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setSliderValue(newValue);
        onChange(newValue);
    };

    return (
        <div>
        <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            className="slider"
            id="myRange"
            onChange={handleSliderChange}
        />
        </div>
    );
};

export default Slider;