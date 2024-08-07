"use client"
import React from 'react';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from "@/components/Code"
import PreviewAreaV from '@/components/PreviewAreaV';
import Avatar from '@/components/Avatar';
import { FiAirplay, FiAnchor, FiAperture, FiArchive } from 'react-icons/fi';
import Sidebar from '@/components/SideBar';
import Footer from '@/components/Footer';

const texts = {
    overview: "Avatar is a component that displays an image or icon for identifying a user or object.The Avatar component is used to display a user's profile picture or icon.",
    bgColor: "Set Background Color",
    bgColorDesc: "Specifies the background color when no image is set. The default color is #CCC.",
    icon: "Set Icon",
    iconDesc: "Set the icon to be displayed when an image is not set.",
};

const Components = () => {
    const t = texts;

    return (
        <div className='flex'>
            <Header />
            <div className="w-[25%] hidden md:block">
                <Sidebar />
            </div>
            <div className="w-[90%] mx-auto md:w-[75%] md:px-5">
                <div className="mt-[100px] mb-10 flex flex-col">
                    <h1 className="text-[32px] font-bold mb-[12.5px]">Avatar</h1>
                    <p>{t.overview}</p>
                </div>
                <div className="space-y-10">
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Import</h2>
                        <Code language='tsx'>{`import { Avatar } from "css-materials";`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Usage</h2>
                        <div className="p-5 border rounded-xl overflow-x-auto flex whitespace-nowrap">
                            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                        </div>
                        <Code language='html'>{`<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Change Size</h2>
                        <div className="p-5 border rounded-xl overflow-x-auto flex whitespace-nowrap space-x-5">
                        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="large" />
                            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" size="medium" />
                            <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" size="small" />
                            <Avatar name="Ryan Florence" size={64} bgColor="#FF5733" />
                        </div>
                        <Code language='html'>{`<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />`}</Code>
                    </div>
                    <Card title={t.bgColor}>
                        <p>{t.bgColorDesc}</p>
                        <div className="p-2.5 flex space-x-2.5 border rounded-md">
                            <Avatar name="オダギリジョー" bgColor="#FF5733" />
                        </div>
                        <Code language='html'>{`<Avatar name="オダギリジョー" bgColor="#FF5733" />`}</Code>
                    </Card>
                    <Card title={t.icon}>
                        <p>{t.iconDesc}</p>
                        <div className='flex p-2.5 space-x-2.5 border rounded-md'>
                            <Avatar icon={<FiAirplay />} bgColor='#e7a490' size='small' />
                            <Avatar icon={<FiAnchor />} bgColor='#4513a1' size='medium' />
                            <Avatar icon={<FiAperture />} bgColor='#0ac451' size='large' />
                            <Avatar icon={<FiArchive />} bgColor='#f84cad' size={64} />
                        </div>
                        <Code language='html'>
{`<Avatar icon={<FiAirplay />} bgColor="#e7a490" size="small" />
<Avatar icon={<FiAnchor />} bgColor='#4513a1' size='medium' />
<Avatar icon={<FiAperture />} bgColor='#0ac451' size='large' />
<Avatar icon={<FiArchive />} bgColor='#f84cad' size={64} />`}</Code>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Components;