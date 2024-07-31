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
        { name: 'Button', content: (
            <Card title="Button" link="/components/button">
                <Button colorScheme='blue'>Button</Button>
            </Card>
        ) },
        { name: 'Slider', content: (
        <Card title="Slider">
            <Slider value={sliderValue} onChange={setSliderValue} />
        </Card>
        ) },
        { name: 'Switch', content: (
        <Card title="Switch">
            <Switch />
        </Card>
        ) },
        { name: 'Alert', content: (
        <Card title="Alert">
            <div className="success-alert"><FiCheckCircle className="text-green-500 mr-2.5" />Success</div>
            <div className="error-alert"><FiXCircle className="text-red-500 mr-2.5" />Error</div>
            <div className="info-alert"><FiInfo className="text-blue-500 mr-2.5" />Info</div>
            <div className="warning-alert"><FiAlertCircle className="text-amber-500 mr-2.5" />Warning</div>
        </Card>
        ) },
        { name: 'Input', content: (
        <Card title="Input">
            <Input placeholder='You can freely choose the placeholder.' />
        </Card>
        ) },
        { name: 'Alert Dialog', content: (
        <Card title="Alert Dialog">
            <Button colorScheme="blue" onClick={toggleAlert}>Show Default Alert</Button>
            <AlertDialog
            visible={alertVisible}
            onClose={() => setAlertVisible(false)}
            title="Alert"
            message="This is an alert dialog."
            />
        </Card>
        ) },
        { name: 'Modal', content: (
        <Card title="Modal">
            <Button colorScheme="blue" onClick={toggleModal}>Show Modal</Button>
            <Modal
            visible={modalVisible}
            onClose={toggleModal}
            title="Custom Modal"
            footer={
                <div className="mt-2.5">
                <Button colorScheme="gray" onClick={toggleModal}>Cancel</Button>
                <Button colorScheme="blue" onClick={toggleModal} className="ml-1.5">Confirm</Button>
                </div>
            }
            >
            <p>This is the modal content with a custom footer.</p>
            </Modal>
        </Card>
        ) },
        { name: 'Dropdown', content: (
        <Card title="Dropdown">
            <Dropdown
            label="Select an option"
            options={['Option 1', 'Option 2', 'Option 3']}
            onSelect={handleDropdownSelect}
            />
        </Card>
        ) },
        { name: 'Checkbox', content: (
        <Card title="Checkbox">
            <Checkbox
            checked={checkboxChecked}
            onChange={(e) => setCheckboxChecked(e.target.checked)}
            label="I agree to the terms and conditions"
            />
        </Card>
        ) },
        { name: 'Radio', content: (
        <Card title="Radio">
            <div className="space-y-2.5 flex flex-col">
            <Radio
                checked={radioValue === 'option1'}
                onChange={(e) => setRadioValue('option1')}
                label="Option 1"
                name="radioGroup"
            />
            <Radio
                checked={radioValue === 'option2'}
                onChange={(e) => setRadioValue('option2')}
                label="Option 2"
                name="radioGroup"
            />
            <Radio
                checked={radioValue === 'option3'}
                onChange={(e) => setRadioValue('option3')}
                label="Option 3"
                name="radioGroup"
            />
            </div>
        </Card>
        ) },
        { name: 'Card', content: (
        <Card title="Card">
            <Card title="Card Header">
            Card Body
            </Card>
        </Card>
        ) },
        { name: 'Code', content: (
        <Card title="Code">
            <Code language="html">{`<Button colorScheme="blue">Blue</Button>`}</Code>
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