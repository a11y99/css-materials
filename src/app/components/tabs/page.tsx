"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Body from '@/components/Body';
import PreviewAreaH from '@/components/PreviewAreaH';
import Input from '@/components/css-materials/Input';
import { FaExternalLinkAlt, FaKey, FaMailBulk } from 'react-icons/fa';
import PreviewAreaV from '@/components/PreviewAreaV';
import Link from 'next/link';
import Table from '@/components/Table';
import { Tab, Tabs } from '@/components/Tabs';
import Code from '@/components/Code';
import Sidebar from '@/components/SideBar';
import Footer from '@/components/Footer';

const texts = {
    en: {
        overview: "Overview",
        overviewDesc: "Tabs is a component that allows for switching between multiple sections of content.",
        import: "Import",
        usage: "Usage",
        disabled: "Disabled",
        disabledDesc: "To disable a tab, set disabled to true.",
    },
    jp: {
        overview: "概要",
        overviewDesc: "Tabsは、コンテンツを複数のセクションに分けて切り替え可能にするための要素コンポーネントです。",
        import: "インポート",
        usage: "使い方",
        disabled: "無効化",
        disabledDesc: "Tabを無効化するにはdisabledをtrueにします。",
    }
};

const Components = () => {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');

    const t = texts[language];

    return (
        <div className="flex">
            <Header />
            <div className="w-[25%] hidden md:block">
                <Sidebar />
            </div>
            <div className="w-[90%] mx-auto md:w-[75%] md:px-5">
                <div className="mt-24 mb-10 flex flex-col">
                    <h1 className="text-[32px] font-bold mb-[12.5px]">Tabs</h1>
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
                        {t.overviewDesc}
                    </Card>
                    <Card title={t.import}>
                        <Code language='tsx'>{`import { Tabs, Tab } from "css-materials";`}</Code>
                    </Card>
                    <Card title={t.usage}>
                        <PreviewAreaV>
                            <Tabs>
                                <Tab label="Tab 1">
                                    <div>
                                        Content for Tab 1
                                    </div>
                                </Tab>
                                <Tab label="Tab 2">
                                    <div>Content for Tab 2</div>
                                </Tab>
                            </Tabs>
                        </PreviewAreaV>
                        <Code language="html">
{`<Tabs>
    <Tab label="Tab 1">
        <div>
            Content for Tab 1
        </div>
    </Tab>
    <Tab label="Tab 2">
        <div>Content for Tab 2</div>
    </Tab>
</Tabs>`}</Code>
                    </Card>
                    <Card title={t.disabled}>
                        <p>{t.disabledDesc}</p>
                        <PreviewAreaV>
                            <Tabs>
                                <Tab label="Tab 1">
                                    <div>
                                        Content for Tab 1
                                    </div>
                                </Tab>
                                <Tab label="Tab 2" disabled>
                                    <div>Content for Tab 2 (disabled)</div>
                                </Tab>
                            </Tabs>
                        </PreviewAreaV>
                        <Code language="html">
    {`<Tabs>
        <Tab label="Tab 1">
            <div>
                Content for Tab 1
            </div>
        </Tab>
        <Tab label="Tab 2" disabled>
            <div>Content for Tab 2 (disabled)</div>
        </Tab>
    </Tabs>`}</Code>
                    </Card>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Components;