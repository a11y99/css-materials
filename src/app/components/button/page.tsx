"use client"
import React from 'react';
import Button from '@/components/css-materials/Button';
import Header from '@/components/Header';
import { FaDragon, FaRocket } from 'react-icons/fa';
import Code from '@/components/Code';
import Sidebar from '@/components/SideBar';
import Footer from '@/components/Footer';

const texts = {
    overview: "Button is an interactive element that users can click to trigger an action.",
    loading: "To apply a loading animation, set the loading attribute to true.",
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
                    <h1 className="text-[32px] font-bold mb-[12.5px]">Button</h1>
                    <p>{t.overview}</p>
                </div>
                <div className="space-y-10">
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Import</h2>
                        <Code language='tsx'>{`import { Button } from "css-materials";`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Usage</h2>
                        <div className="p-5 border rounded-xl overflow-x-auto whitespace-nowrap">
                            <Button>Button</Button>
                        </div>
                        <Code language='html'>{`<Button>Button</Button>`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Variants</h2>
                        <div className="p-5 border rounded-xl space-x-5 overflow-x-auto whitespace-nowrap">
                            <Button>Primary</Button>
                            <Button variant='secondary'>Secondary</Button>
                            <Button variant='danger'>Danger</Button>
                        </div>
                        <Code language='html'>
{`<Button variant='primary'>Primary</Button>
<Button variant='secondary'>Secondary</Button>
<Button variant='danger'>Danger</Button>`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Change Size</h2>
                        <div className="p-5 border rounded-xl space-x-5 overflow-x-auto whitespace-nowrap">
                            <Button size='small'>Small</Button>
                            <Button>Medium</Button>
                            <Button size='large'>Large</Button>
                        </div>
                        <Code language='html'>
{`<Button size='small'>Small</Button>
<Button size='medium'>Medium</Button>
<Button size='large'>Large</Button>`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Change Shape</h2>
                        <div className="p-5 border rounded-xl space-x-5 overflow-x-auto whitespace-nowrap">
                            <Button>Rounded</Button>
                            <Button shape='pill'>Pill</Button>
                            <Button shape='circle'>Circle</Button>
                        </div>
                        <Code language='html'>
{`<Button shape='rounded'>Rounded</Button>
<Button shape='pill'>Pill</Button>
<Button shape='circle'>Circle</Button>`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Add Icon</h2>
                        <div className="p-5 border rounded-xl space-x-5 overflow-x-auto whitespace-nowrap">
                            <Button variant='secondary' size='small' icon={<FaRocket />}>発射</Button>
                            <Button variant='danger' icon={<FaDragon />}>咆哮</Button>
                        </div>
                        <Code language='html'>
{`<Button variant='secondary' size='small' icon={<FaRocket />}>発射</Button>
<Button variant='danger' icon={<FaDragon />}>咆哮</Button>`}</Code>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-medium">Loading Animation</h2>
                        <p>{t.loading}</p>
                        <div className="p-5 border rounded-xl space-x-5 overflow-x-auto whitespace-nowrap">
                            <Button loading>Submit</Button>
                            <Button variant='secondary' loading>Send</Button>
                            <Button variant='danger' loading>Confirm</Button>
                        </div>
                        <Code language='html'>
{`<Button loading>Submit</Button>
<Button variant='secondary' loading>Send</Button>
<Button variant='danger' loading>Confirm</Button>`}</Code>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Components;