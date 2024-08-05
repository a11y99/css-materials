"use client"
import React, { useState } from 'react';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Body from '@/components/Body';
import { FiTrash2, FiAlertCircle, FiCheck } from 'react-icons/fi';
import Code from '@/components/Code';
import AlertDialog from '@/components/css-materials/AlertDialog';
import Button from '@/components/css-materials/Button';
import CodeBlock from '@/components/CodeBlock';
import Sidebar from '@/components/SideBar';
import Footer from '@/components/Footer';
import PreviewArea from '@/components/PreviewAreaH';

const texts = {
    en: {
        overview: "Overview",
        overviewDesc: "Alert Dialog is a modal window component that displays important information or messages requiring user confirmation.",
        import: "Import",
        usage: "Usage",
    },
    jp: {
        overview: "概要",
        overviewDesc: "Alert Dialogは、ユーザーに重要な情報や確認が必要なメッセージを表示するためのモーダルウィンドウコンポーネントです。",
        import: "インポート",
        usage: "使い方",
    }
};

const Components = () => {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');

    const t = texts[language];

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    }

    const handleButtonClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsDialogOpen(true);
        }, 2000);
    };

    const showAlert = () => {
        alert("Unsaved changes will be lost.");
        handleDialogClose();
    };

    return (
        <div className="flex">
            <Header />
            <div className="w-[25%] hidden md:block">
                <Sidebar />
            </div>
            <div className="w-[90%] mx-auto md:w-[75%] md:px-5">
                <div className="mt-24 mb-10 flex flex-col">
                    <h1 className="text-[32px] font-bold mb-[12.5px]">Alert Dialog</h1>
                    <div>
                        <button
                            className={`px-4 py-2 font-bold rounded-l-md ${language === 'en' ? 'bg-[#007bff] text-white' : 'bg-gray-100'}`}
                            onClick={() => setLanguage('en')}
                        >
                            English
                        </button>
                        <button
                        className={`px-4 py-2 font-bold rounded-r-md ${language === 'jp' ? 'bg-[#007bff] text-white' : 'bg-gray-100'}`}
                            onClick={() => setLanguage('jp')}
                        >
                            日本語
                        </button>
                    </div>
                </div>
                <div className="space-y-10">
                    <Card title={t.overview}>
                        <p>{t.overviewDesc}</p>
                    </Card>
                    <Card title={t.import}>
                        <Code language='ts'>{`import { AlertDialog } from "css-materials";`}</Code>
                    </Card>
                    <Card title={t.usage}>
                        <PreviewArea>
                            <Button text="Open Alert Dialog" onClick={handleDialogOpen}  />
                        </PreviewArea>
                    <Code language='tsx'>
{`<AlertDialog
    isOpen={isDialogOpen}
    onClose={handleDialogClose}
    title="Unsaved Changes"
    message="You have unsaved changes. Are you sure you want to leave without saving?"
/>`}</Code>
                    <AlertDialog
                        isOpen={isDialogOpen}
                        onClose={handleDialogClose}
                        title="Unsaved Changes"
                        message="You have unsaved changes. Are you sure you want to leave without saving?"
                    />
                    </Card>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Components;