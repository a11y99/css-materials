"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';

const ExampleComponent = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div>
            <Button colorScheme="blue" onClick={handleClick} loading={loading}>
                データを読み込む
            </Button>
        </div>
    );
};

export default ExampleComponent;