"use client"
import React from 'react';
import Button from '@/components/css-materials/Button';
import Header from '@/components/Header';
import Code from '@/components/Code';
import Sidebar from '@/components/SideBar';
import Footer from '@/components/Footer';
import Input from '@/components/css-materials/Input';
import { FiEdit, FiMail, FiSearch, FiUser } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';

const texts = {
    overview: "The Input component provides an interface for users to input information and enables the application to process the submitted data.",
    pattern: "You can specify a pattern using regular expressions.",
};

const Components = () => {
    const t = texts;

    return (
        <div className="flex">
            <Header />
            <div className="w-[25%] hidden md:block">
                <Sidebar />
            </div>
            <div className="w-[90%] mx-auto md:w-[75%] md:px-5">
                <div className="mt-[100px] mb-10 flex flex-col">
                    <h1 className="text-[32px] font-bold mb-[12.5px]">Input</h1>
                    <p>{t.overview}</p>
                </div>
                <div className="space-y-10">
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Import</h2>
                        <Code language='tsx'>{`import { Input } from "css-materials";`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Usage</h2>
                        <div className="p-5 border rounded-xl overflow-x-auto whitespace-nowrap">
                            <Input placeholder='Basic Usage' />
                        </div>
                        <Code language='html'>{`<Input placeholder='Basic Usage' />`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Change Size</h2>
                        <div className="p-5 border rounded-xl overflow-x-auto whitespace-nowrap space-y-5">
                            <Input placeholder='Small' size='small' />
                            <Input placeholder='Medium' size='medium' />
                            <Input placeholder='Large' size='large' />
                        </div>
                        <Code language='html'>
{`<Input placeholder='Small' size='small' />
<Input placeholder='Medium' size='medium' />
<Input placeholder='Large' size='large' />`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">With Label</h2>
                        <div className="p-5 border rounded-xl overflow-x-auto whitespace-nowrap space-y-5">
                            <Input type='password' placeholder='Enter password' label='Password' />
                        </div>
                        <Code language='html'>{`<Input type='password' placeholder='Enter password' label='Password' />`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Compatibility with Button Styling</h2>
                        <div className="p-5 border rounded-xl overflow-x-auto whitespace-nowrap space-y-5">
                            <div className="flex space-x-2.5">
                                <Input placeholder='Type your email address' size='small' className='w-full' />
                                <Button size='small'>Submit</Button>
                            </div>
                            <div className="flex space-x-2.5">
                                <Input placeholder='Type your email address' className='w-full' />
                                <Button>Submit</Button>
                            </div>
                            <div className="flex space-x-2.5">
                                <Input placeholder='Type your email address' size='large' className='w-full' />
                                <Button size='large'>Submit</Button>
                            </div>
                        </div>
                        <Code language='html'>
{`<div className="flex space-x-2.5">
    <Input placeholder='Type your email address' size='small' className='w-full' />
    <Button size='small'>Submit</Button>
</div>
<div className="flex space-x-2.5">
    <Input placeholder='Type your email address' className='w-full' />
    <Button>Submit</Button>
</div>
<div className="flex space-x-2.5">
    <Input placeholder='Type your email address' size='large' className='w-full' />
    <Button size='large'>Submit</Button>
</div>`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Add Icon</h2>
                        <div className="p-5 border rounded-xl overflow-x-auto whitespace-nowrap space-y-5">
                            <Input placeholder='Search' size='small' icon={<FiSearch />} />
                            <Input placeholder='Enter Text' size='medium' icon={<FiEdit />} />
                            <Input placeholder='Enter username' size='large' icon={<FiUser />} />
                        </div>
                        <Code language='html'>
{`<Input placeholder='Search' size='small' icon={<FiSearch />} />
<Input placeholder='Enter Text' size='medium' icon={<FiEdit />} />
<Input placeholder='Enter username' size='large' icon={<FiUser />} />`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Specify pattern</h2>
                        <p>{t.pattern}</p>
                        <div className="p-5 border rounded-xl overflow-x-auto whitespace-nowrap space-y-5">
                            <Input placeholder="Type your email address" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" errorMessage="Invalid email address" icon={<FiMail />} />
                        </div>
                        <Code language='html'>{`<Input placeholder="Type your email address" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" errorMessage="Invalid email address" icon={<FiMail />} />`}</Code>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Components;