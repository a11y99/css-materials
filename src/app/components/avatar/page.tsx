"use client"
import React from 'react';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from "@/components/Code"
import PreviewAreaV from '@/components/PreviewAreaV';
import Avatar from '@/components/css-materials/Avatar';
import { FiAirplay, FiAnchor, FiAperture, FiArchive } from 'react-icons/fi';
import Sidebar from '@/components/SideBar';
import Footer from '@/components/Footer';

const texts = {
    overview: "Avatar is a component that displays an image or icon for identifying a user or object.The Avatar component is used to display a user's profile picture or icon.",
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
                        <Code language='html'>{`<Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Change Size</h2>
                        <div className="p-5 border rounded-xl overflow-x-auto flex whitespace-nowrap space-x-5">
                            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="large" />
                            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" size="medium" />
                            <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" size="small" />
                            <Avatar name="Ryan Florence" size={64} />
                        </div>
                        <Code language='html'>
{`<Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='large' />
<Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' size='medium' />
<Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' size='small' />
<Avatar name='Ryan Florence' size={64} />`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Change Shape</h2>
                        <div className="p-5 border rounded-xl overflow-x-auto flex whitespace-nowrap space-x-5">
                            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' shape='circle' />
                            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' shape='square' />
                        </div>
                        <Code language='html'>
{`<Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' shape='circle' />
<Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' shape='square' />`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Customize the fallback avatar</h2>
                        <div className="p-5 border rounded-xl overflow-x-auto flex whitespace-nowrap space-x-5">
                            <Avatar name="Mark Erikson" size="small" bgColor='#FF5733' shape='square' />
                            <Avatar icon={<FiAirplay />} bgColor='#5733FF' />
                            <Avatar size="large" bgColor='#FF33A1' />
                        </div>
                        <Code language='html'>
{`<Avatar name="Mark Erikson" size="small" bgColor='#FF5733' shape='square' />
<Avatar bgColor='#5733FF' icon={<FiAirplay />} />
<Avatar size="large" bgColor='#FF33A1' />`}</Code>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Components;