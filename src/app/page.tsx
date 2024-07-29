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

export default function Home() {
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<'default' | 'delete' | 'submit'>('default');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);
  const [radioValue, setRadioValue] = useState<string>('option1');

  const toggleAlert = (type: 'default' | 'delete' | 'submit') => {
    setAlertType(type);
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
      <div className="bg-white shadow rounded-lg p-2.5">
        <h2 className="text-xl font-bold border-b mb-2.5">Button</h2>
        <div className="space-x-1.5">
          <Button colorScheme="red">Delete</Button>
          <Button colorScheme="orange">Create</Button>
          <Button colorScheme="yellow">Star</Button>
          <Button colorScheme="green">Submit</Button>
          <Button colorScheme="blue">Send</Button>
          <Button colorScheme="purple">Reply</Button>
          <Button colorScheme="gray">Detail</Button>
        </div>
      </div>
    ) },
    { name: 'Slider', content: (
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">Slider</h2>
        <Slider value={sliderValue} onChange={setSliderValue} />
      </div>
    ) },
    { name: 'Switch', content: (
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">Switch</h2>
        <Switch />
      </div>
    ) },
    { name: 'Alert', content: (
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">Alert</h2>
        <div className="space-y-2.5">
          <div className="success-alert"><FiCheckCircle className="text-green-500 mr-2.5" />Success</div>
          <div className="error-alert"><FiXCircle className="text-red-500 mr-2.5" />Error</div>
          <div className="info-alert"><FiInfo className="text-blue-500 mr-2.5" />Info</div>
          <div className="warning-alert"><FiAlertCircle className="text-amber-500 mr-2.5" />Warning</div>
        </div>
      </div>
    ) },
    { name: 'Input', content: (
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">Input</h2>
        <Input placeholder='You can freely choose the placeholder.' />
      </div>
    ) },
    { name: 'Alert Dialog', content: (
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">Alert Dialog</h2>
        <div className="space-x-1.5">
          <Button colorScheme="blue" onClick={() => toggleAlert('default')}>Show Default Alert</Button>
          <Button colorScheme="red" onClick={() => toggleAlert('delete')}>Show Delete Alert</Button>
          <Button colorScheme="green" onClick={() => toggleAlert('submit')}>Show Submit Alert</Button>
        </div>
        <AlertDialog
          visible={alertVisible}
          onClose={() => setAlertVisible(false)}
          title="Alert"
          message="This is an alert dialog."
          type={alertType}
        />
      </div>
    ) },
    { name: 'Modal', content: (
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">Modal</h2>
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
      </div>
    ) },
    { name: 'Dropdown', content: (
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">Dropdown</h2>
        <Dropdown
          label="Select an option"
          options={['Option 1', 'Option 2', 'Option 3']}
          onSelect={handleDropdownSelect}
        />
      </div>
    ) },
    { name: 'Checkbox', content: (
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">Checkbox</h2>
        <Checkbox
          checked={checkboxChecked}
          onChange={(e) => setCheckboxChecked(e.target.checked)}
          label="I agree to the terms and conditions"
        />
      </div>
    ) },
    { name: 'Radio', content: (
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">Radio</h2>
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
      </div>
    ) },
  ];

  const filteredComponents = useMemo(() => {
    return components.filter(component =>
      component.name.toLowerCase().includes(query)
    );
  }, [query, components]);

  return (
    <div className="w-[80%] mx-auto">
      <Header />
      {/* Top */}
      <div className="my-10 flex flex-col items-center text-center">
        <img src="/logo.png" alt="Logo" className="w-[64px]" />
        <h1 className="text-xl font-bold">CSS Materials</h1>
      </div>
      {/* Search Components */}
      <div className="mb-5" id="components">
        <Input placeholder='Enter to search components...' onChange={handleSearchChange} />
      </div>
      {/* Components */}
      {filteredComponents.map((component, index) => (
        <div key={index}>
          {component.content}
        </div>
      ))}
      {/* Footer */}
      <div className="my-10 text-center">
        <h1 className="text-xl font-bold">Thank you for watching this page!</h1>
        <p className="text-sm mt-2.5">Copyright &copy; 2024 <Link href="https://x.com/m_hono_104" className="underline">hono</Link> All Rights Reserved.</p>
      </div>
    </div>
  );
}