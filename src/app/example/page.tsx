"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';
import Slider from '@/components/Slider';
import Switch from '@/components/Switch';
import Input from '@/components/Input';
import AlertDialog from '@/components/AlertDialog';
import Modal from '@/components/Modal';
import { FiCheckCircle, FiXCircle, FiAlertCircle, FiInfo, FiArrowRight, FiTwitter } from "react-icons/fi";
import { FaGithub, FaGithubAlt, FaGithubSquare, FaLink, FaLinkedin, FaShare, FaTwitter } from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';

export default function Home() {
    const [sliderValue, setSliderValue] = useState<number>(50);
    const [alertVisible, setAlertVisible] = useState<boolean>(false);
    const [alertType, setAlertType] = useState<'default' | 'delete' | 'submit'>('default');
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const toggleAlert = (type: 'default' | 'delete' | 'submit') => {
        setAlertType(type);
        setAlertVisible(!alertVisible);
    };

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <div className="w-[80%] mx-auto my-10">
            <div className="success-alert mb-5"><FiCheckCircle className="text-green-500 mr-2.5" />フォローしました。</div>
            <div className="flex">
                <img src="https://api.dicebear.com/9.x/dylan/svg?seed=Midnight" alt="avatar" className="w-32 rounded-full" />
                <div className="flex flex-col ml-[16px] w-full">
                    <div className="flex items-center">
                        <div>
                            <h1 className="font-semibold text-[32px]">Midnight</h1>
                            <p className="text-md mt-[5px]">Hello World</p>
                        </div>
                        <div className="ml-auto">
                            <Button colorScheme='blue'>Follow</Button>
                        </div>
                    </div>
                    <div className="mt-auto flex space-x-1.5">
                        <FaShare className="text-xl" />
                        <FaGithub className="text-xl" />
                        <FaLinkedin className="text-xl" />
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div className="p-2.5 bg-white border shadow rounded-md flex">
                    <div>
                        <p className="text-sm opacity-50">2024 July 28</p>
                        <h1 className="text-lg font-medium">How to create an App on Next.js</h1>
                    </div>
                    <div className="ml-auto">
                        <Button colorScheme='gray'>Details</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}