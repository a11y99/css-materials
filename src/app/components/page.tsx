"use client"
import React, { useState, useMemo } from 'react';
import Button from '@/components/Button';
import Slider from '@/components/Slider';
import Input from '@/components/Input';
import AlertDialog from '@/components/AlertDialog';
import Link from 'next/link';
import Modal from '@/components/Modal';
import Checkbox from '@/components/Checkbox';
import Radio from '@/components/Radio';
import { FiCheckCircle, FiXCircle, FiAlertCircle, FiInfo } from "react-icons/fi";
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';
import Body from '@/components/Body';

export default function Home() {
    const [sliderValue, setSliderValue] = useState<number>(50);
    const [alertVisible, setAlertVisible] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');
    const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);
    const [radioValue, setRadioValue] = useState<string>('option1');

    const toggleAlert = () => {
        setAlertVisible(!alertVisible);
    };

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value.toLowerCase());
    };

    const handleDropdownSelect = (option: string) => {
        console.log("Selected option:", option);
    };

    const components = [
        { name: 'Alert Dialog', content: (
            <Card title="Alert Dialog" href="/components/alert-dialog">
                <div className="flex items-center justify-center">
                    <img src="/summary/alert-dialog.png" />
                </div>
            </Card>
        ) },
        { name: 'Button', content: (
            <Card title="Button" href="/components/button">
                <div className="flex items-center justify-center">
                    <img src="/summary/button.png" />
                </div>
            </Card>
        ) },
        { name: 'Card', content: (
            <Card title="Card" href="/components/card">
                <div className="flex items-center justify-center">
                    <img src="/summary/card.png" />
                </div>
            </Card>
        ) },
        { name: 'Checkbox', content: (
            <Card title="Checkbox" href="/components/checkbox">
                <div className="flex items-center justify-center">
                    <img src="/summary/checkbox.png" />
                </div>
            </Card>
        ) },
        { name: 'Code', content: (
            <Card title="Code" href="/components/code">
                <div className="flex items-center justify-center">
                    <img src="/summary/code.png" />
                </div>
            </Card>
        ) },
        { name: 'Input', content: (
            <Card title="Input" href="/components/input">
                <div className="flex items-center justify-center">
                    <img src="/summary/input.png" />
                </div>
            </Card>
        ) },
        { name: 'Modal', content: (
            <Card title="Modal" href="/components/modal">
                <div className="flex items-center justify-center">
                    <img src="/summary/modal.png" />
                </div>
            </Card>
        ) },
        { name: 'Radio', content: (
            <Card title="Radio" href="/components/radio">
                <div className="flex items-center justify-center">
                    <img src="/summary/radio.png" />
                </div>
            </Card>
        ) },
        { name: 'Slider', content: (
            <Card title="Slider" href="/components/slider">
                <div className="flex items-center justify-center">
                    <img src="/summary/slider.png" />
                </div>
            </Card>
        ) },
    ];

    const filteredComponents = useMemo(() => {
        return components.filter(component =>
        component.name.toLowerCase().includes(query)
        );
    }, [query, components]);

    return (
        <Body>
            <Header />
            <div className="mt-20 mb-10">
                <p className="text-[32px] font-bold mb-[12.5px]">Components</p>
                <Input placeholder='Enter to search components...' onChange={handleSearchChange} />
            </div>
            {/* No Results */}
            {filteredComponents.length === 0 && (
                <div className="flex flex-col items-center mb-5">
                    <img src="/chubbs/5.svg" className="w-[250px] mt-[-25px] select-none" />
                    <p className="text-lg mt-[-25px] select-none">No results found.</p>
                </div>
            )}
            {/* Components */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredComponents.map((component, index) => (
                    <div key={index}>
                        {component.content}
                    </div>
                ))}
            </div>
        </Body>
    );
}