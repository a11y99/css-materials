"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';
import Body from '@/components/Body';
import PreviewAreaH from '@/components/PreviewAreaH';
import Input from '@/components/Input';
import { FaExternalLinkAlt, FaKey, FaMailBulk } from 'react-icons/fa';
import PreviewAreaV from '@/components/PreviewAreaV';
import Link from 'next/link';

const texts = {
    en: {
        overview: "Overview",
        overviewDesc: "An input is a field component that allows users to enter data or text.",
        import: "Import",
        usage: "Usage",
        pattern: "Pattern",
        patternDesc: "You can make detailed configurations using regular expressions.",
        readOnly: "Read Only",
        disabled: "Disabled",
        clearable: "Clearable",
        icon: "Icon",
        iconDesc: "You can set icons such as those from react-icons.",
    },
    jp: {
        overview: "概要",
        overviewDesc: "Inputは、ユーザーがデータやテキストを入力するためのフィールドコンポーネントです。",
        import: "インポート",
        usage: "使い方",
        pattern: "パターン",
        patternDesc: "正規表現を使って、細かく設定することができます。",
        readOnly: "読み取り専用",
        disabled: "無効化",
        clearable: "消去可能",
        icon: "アイコン",
        iconDesc: "react-iconsなどのアイコンを設定することができます。",
    }
};

const Components = () => {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');

    const t = texts[language];

    return (
        <Body>
            <Header />
            <div className="mt-20 mb-10 flex flex-col">
                <h1 className="text-[32px] font-bold mb-[12.5px]">Input</h1>
                <div>
                    <button
                        className={`px-4 py-2 font-bold rounded-l-md ${language === 'en' ? 'bg-[#2da0ff] text-white' : 'bg-gray-100'}`}
                        onClick={() => setLanguage('en')}
                    >
                        English
                    </button>
                    <button
                    className={`px-4 py-2 font-bold rounded-r-md ${language === 'jp' ? 'bg-[#2da0ff] text-white' : 'bg-gray-100'}`}
                        onClick={() => setLanguage('jp')}
                    >
                        日本語
                    </button>
                </div>
            </div>
            <div className="space-y-5">
                <Card title={t.overview}>
                    {t.overviewDesc}
                </Card>
                <Card title={t.import}>
                    <Code language='tsx'>{`import { Input } from "css-materials";`}</Code>
                </Card>
                <Card title={t.usage}>
                    <PreviewAreaV>
                        <Input placeholder='Input here...' />
                    </PreviewAreaV>
                    <Code language='html'>{`<Input placeholder="Input here..." />`}</Code>
                </Card>
                <Card title={t.pattern}>
                    <p>{t.patternDesc}</p>
                    <PreviewAreaV>
                        <Input placeholder="Enter a valid email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" errorMessage="Invalid email address" />
                    </PreviewAreaV>
                    <Code language="html">{`<Input placeholder="Enter a valid email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" errorMessage="Invalid email address" />`}</Code>
                </Card>
                <Card title={t.readOnly}>
                    <PreviewAreaV>
                        <Input placeholder='Read Only' readOnly />
                    </PreviewAreaV>
                    <Code language="html">{`<Input placeholder='Read Only' readOnly />`}</Code>
                </Card>
                <Card title={t.disabled}>
                    <PreviewAreaV>
                        <Input placeholder='Disabled' disabled />
                    </PreviewAreaV>
                    <Code language='html'>{`<Input placeholder='Disabled' disabled />`}</Code>
                </Card>
                <Card title={t.clearable}>
                    <PreviewAreaV>
                        <Input placeholder='Input here...' clearable />
                    </PreviewAreaV>
                    <Code language='html'>{`<Input placeholder='Input here...' clearable />`}</Code>
                </Card>
                <Card title={t.clearable}>
                    <PreviewAreaV>
                        <Input placeholder='Input here...' clearable />
                    </PreviewAreaV>
                    <Code language='html'>{`<Input placeholder='Input here...' clearable />`}</Code>
                </Card>
                <Card title={t.icon}>
                    <p>{t.iconDesc}</p>
                    <PreviewAreaV>
                        <Input placeholder="Email" type="email" icon={<FaMailBulk />} />
                        <Input placeholder="Password" type="password" icon={<FaKey />} />
                    </PreviewAreaV>
                    <Code language='tsx'>
{`import { FaMailBulk, FaKey } from "react-icons/fa";

export default function App() {
    return (
        <>
            <Input placeholder="Email" type="email" icon={<FaMailBulk />} />
            <Input placeholder="Password" type="password" icon={<FaKey />} />
        </>
    )
}`}</Code>
                </Card>
            </div>
        </Body>
    );
};

export default Components;