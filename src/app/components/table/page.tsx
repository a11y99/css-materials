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
import Table from '@/components/Table';

const texts = {
    en: {
        overview: "Overview",
        overviewDesc: "Table is a component for displaying data in rows and columns.",
        import: "Import",
        usage: "Usage",
        usageDesc: "Define the structure and display labels of each column in the table using the columns array, and define the data rows to be displayed in the table using the data array.",
    },
    jp: {
        overview: "概要",
        overviewDesc: "Tableは、データを行と列の形式で表示するための要素コンポーネントです。",
        import: "インポート",
        usage: "使い方",
        usageDesc: "columns配列でテーブルの各列の構造と表示ラベルを、data配列でテーブルに表示するデータ行を定義します。",
    }
};

const Components = () => {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');

    const t = texts[language];

    const columns = [
        { key: 'name', label: 'Name' },
        { key: 'age', label: 'Age' },
        { key: 'address', label: 'Address' },
    ];

    const data = [
        { name: 'John Doe', age: 28, address: '1234 Elm St' },
        { name: 'Jane Smith', age: 34, address: '5678 Oak St' },
    ];

    return (
        <Body>
            <Header />
            <div className="mt-20 mb-10 flex flex-col">
                <h1 className="text-[32px] font-bold mb-[12.5px]">Table</h1>
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
                    <Code language='tsx'>{`import { Table } from "css-materials";`}</Code>
                </Card>
                <Card title={t.usage}>
                    <p>{t.usageDesc}</p>
                    <PreviewAreaV>
                        <Table columns={columns} data={data} />
                    </PreviewAreaV>
                    <Code language="ts">
{`const columns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'address', label: 'Address' },
];

const data = [
    { name: 'John Doe', age: 28, address: '1234 Elm St' },
    { name: 'Jane Smith', age: 34, address: '5678 Oak St' },
];`}</Code>
                    <Code language='html'>{`<Table columns={columns} data={data} />`}</Code>
                </Card>
            </div>
        </Body>
    );
};

export default Components;