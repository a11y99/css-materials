"use client"
import React, { useState, useMemo } from 'react';
import Button from '@/components/Button';
import Slider from '@/components/Slider';
import Switch from '@/components/Switch';
import Input from '@/components/Input';
import AlertDialog from '@/components/AlertDialog';
import Link from 'next/link';
import Modal from '@/components/Modal';
import Dropdown from '@/components/Dropdown';
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
        { name: 'Alert', content: (
            <Card title="Alert">
                <div className="flex items-center justify-center">
                    <img src="/summary/alert.png" />
                </div>
            </Card>
        ) },
        { name: 'Alert Dialog', content: (
            <Card title="Alert Dialog">
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
            <Card title="Card">
                <div className="flex items-center justify-center">
                    <img src="/summary/card.png" />
                </div>
            </Card>
        ) },
        { name: 'Checkbox', content: (
            <Card title="Checkbox">
                <div className="flex items-center justify-center">
                    <img src="/summary/checkbox.png" />
                </div>
            </Card>
        ) },
        { name: 'Code', content: (
            <Card title="Code">
                <div className="flex items-center justify-center">
                    <img src="/summary/code.png" />
                </div>
            </Card>
        ) },
        { name: 'Input', content: (
            <Card title="Input">
                <div className="flex items-center justify-center">
                    <img src="/summary/input.png" />
                </div>
            </Card>
        ) },
        { name: 'Modal', content: (
            <Card title="Modal">
                <div className="flex items-center justify-center">
                    <img src="/summary/modal.png" />
                </div>
            </Card>
        ) },
        { name: 'Radio', content: (
            <Card title="Radio">
                <div className="flex items-center justify-center">
                    <img src="/summary/radio.png" />
                </div>
            </Card>
        ) },
        { name: 'Slider', content: (
            <Card title="Slider">
                <div className="flex items-center justify-center">
                    <img src="/summary/slider.png" />
                </div>
            </Card>
        ) },
        { name: 'Switch', content: (
            <Card title="Switch">
                <div className="flex items-center justify-center">
                    <img src="/summary/switch.png" />
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
            {/* Top */}
            <div className="my-10 flex flex-col items-center">
                <img src="/cheese.png" className="w-[100px]" />
                <img src="/text-logo.png" className="w-[200px]" />
            </div>
            {/* Search Components */}
            <div className="mb-5">
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