"use client"
import React, { useState } from 'react';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';
import AlertDialog from '@/components/css-materials/AlertDialog';
import Button from '@/components/css-materials/Button';
import Sidebar from '@/components/SideBar';
import Footer from '@/components/Footer';
import PreviewArea from '@/components/PreviewAreaH';
import { FaLightbulb, FaRocket } from 'react-icons/fa';

const texts = {
    overview: "Alert Dialog is a component that displays important information requiring user acknowledgment.",
    onConfirm: "You can set the processing that occurs when the Confirm button is clicked.",
};

const Components = () => {
    const t = texts;

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isCustomDialogOpen, setIsCustomDialogOpen] = useState(false);
    const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    };
    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    const handleCustomDialogOpen = () => {
        setIsCustomDialogOpen(true);
    };
    const handleCustomDialogClose = () => {
        setIsCustomDialogOpen(false);
    };

    const handleConfirmDialogOpen = () => {
        setIsConfirmDialogOpen(true);
    };
    const handleConfirmDialogClose = () => {
        setIsConfirmDialogOpen(false);
    };

    const showAlert = () => {
        alert("The Delete button has been clicked!");
    };


    return (
        <div className="flex">
            <Header />
            <div className="w-[25%] hidden md:block">
                <Sidebar />
            </div>
            <div className="w-[90%] mx-auto md:w-[75%] md:px-5">
                <div className="mt-[100px] mb-10 flex flex-col">
                    <h1 className="text-[32px] font-bold mb-[12.5px]">Alert Dialog</h1>
                    <p>{t.overview}</p>
                </div>
                <div className="space-y-10">
                <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Import</h2>
                        <Code language='tsx'>{`import { AlertDialog } from "css-materials";`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Usage</h2>
                        <div className="p-5 border rounded-xl overflow-x-auto whitespace-nowrap">
                            <Button onClick={handleDialogOpen}>Open Alert Dialog</Button>
                            <AlertDialog
                            isOpen={isDialogOpen}
                            onClose={handleDialogClose}
                            title="Unsaved Changes"
                            message="You have unsaved changes. Are you sure you want to leave without saving?"
                        />
                        </div>
                        <Code language='tsx'>
{`const [isDialogOpen, setIsDialogOpen] = useState(false);

return (
    <>
        <AlertDialog
            isOpen={isDialogOpen}
            onClose={handleDialogClose}
            title="Unsaved Changes"
            message="You have unsaved changes. Are you sure you want to leave without saving?"
        />
    </>
)`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Custom Footer</h2>
                        <div className="p-5 border rounded-xl overflow-x-auto whitespace-nowrap">
                            <Button onClick={handleCustomDialogOpen} icon={<FaLightbulb />}>Open Idea Dialog</Button>
                            <AlertDialog
                                isOpen={isCustomDialogOpen}
                                onClose={handleCustomDialogClose}
                                title="New Idea"
                                message="You have a brilliant new idea to review."
                                confirmText='Review Now'
                                cancelText='Later'
                            />
                        </div>
                        <Code language='tsx'>
{`const [isDialogOpen, setIsDialogOpen] = useState(false);

return (
    <>
        <AlertDialog
            isOpen={isDialogOpen}
            onClose={handleDialogClose}
            title="New Idea"
            message="You have a brilliant new idea to review."
            confirmText='Review Now'
            cancelText='Later'
        />
    </>
)`}</Code>
                    </div>

                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">onConfirm</h2>
                        <p>{t.onConfirm}</p>
                        <div className="p-5 border rounded-xl overflow-x-auto whitespace-nowrap">
                            <Button onClick={handleConfirmDialogOpen}>Open Alert Dialog</Button>
                            <AlertDialog
                                isOpen={isConfirmDialogOpen}
                                onClose={handleConfirmDialogClose}
                                title="Delete Item"
                                message="Are you sure you want to delete this item? This action cannot be undone."
                                confirmText='Delete'
                                cancelText='Cancel'
                                onConfirm={showAlert}
                            />
                        </div>
                        <Code language='tsx'>
{`const [isDialogOpen, setIsDialogOpen] = useState(false);

const showAlert = () => alert("The Delete button has been clicked!");

return (
    <>
        <AlertDialog
            isOpen={isDialogOpen}
            onClose={handleDialogClose}
            title="Delete Item"
            message="Are you sure you want to delete this item? This action cannot be undone."
            confirmText='Delete'
            cancelText='Cancel'
            onConfirm={showAlert}
        />
    </>
)`}</Code>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Components;