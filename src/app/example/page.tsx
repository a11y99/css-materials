"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Dropdown from '@/components/Dropdown';
import Checkbox from '@/components/Checkbox';
import Modal from '@/components/Modal';
import Header from '@/components/Header';

export default function Example() {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const roles = ['User', 'Admin', 'Super Admin'];

    const handleRegister = () => {
        // 登録処理をここに実装します
        setModalVisible(true);
    };

    return (
        <div className="w-[80%] mx-auto">
            <Header />
            <div className="my-10 flex flex-col items-center text-center">
                <img src="/logo.png" alt="Logo" className="w-[64px]" />
                <h1 className="text-xl font-bold">Sign Up</h1>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
                <div className="mb-5">
                    <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-5">
                    <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-5">
                    <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-5">
                    <Dropdown
                        label="Select Role"
                        options={roles}
                        onSelect={setRole}
                    />
                </div>
                <div className="mb-5">
                    <Checkbox
                        checked={agreeTerms}
                        onChange={() => setAgreeTerms(!agreeTerms)}
                    />
                </div>
                <div className="text-center">
                    <Button colorScheme="blue" onClick={handleRegister}>Register</Button>
                </div>
            </div>
            <Modal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                title="Registration Successful"
                footer={
                    <div className="mt-2.5">
                        <Button colorScheme="gray" onClick={() => setModalVisible(false)}>Close</Button>
                    </div>
                }
            >
                <p>You have registered successfully!</p>
            </Modal>
        </div>
    );
}