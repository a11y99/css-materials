"use client"
import React, { useState } from 'react';
import Button from '@/components/css-materials/Button';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Body from '@/components/Body';
import PreviewAreaH from '@/components/PreviewAreaH';
import PreviewAreaV from '@/components/PreviewAreaV';
import { FaArrowAltCircleRight, FaArrowRight, FaPhone, FaSmile } from 'react-icons/fa';
import Code from '@/components/Code';
import Sidebar from '@/components/SideBar';
import Footer from '@/components/Footer';

const texts = {
    en: {
        overview: "Overview",
        overviewDesc: "Button is a clickable element that allows users to perform actions component.",
        import: "Import",
        usage: "Usage",
        changeSize: "Change Size",
        changeSizeDesc: "By default, the medium size is applied.",
        changeShape: "Change Shape",
        changeShapeDesc: "By default, the rounded shape is applied.",
        changeColorscheme: "Change Colorscheme",
        changeColorschemeDesc: "By default, the blue color is applied.",
        changeState: "Loading Animation",
        changeStateDesc: "To apply the loading animation, set loading to true.",
        icon: "Icon",
        iconDesc: "You can set icons on the left and right using react-icons or similar libraries.",
        variants: "Variants",
        variantsDesc: "By default, the primary is applied.",
    },
    jp: {
        overview: "概要",
        overviewDesc: "Buttonは、ユーザーがアクションを実行するためのクリック可能な要素コンポーネントです。",
        import: "インポート",
        usage: "使い方",
        changeSize: "サイズを変更する",
        changeSizeDesc: "デフォルトではmediumが適用されています。",
        changeShape: "形状を変更する",
        changeShapeDesc: "デフォルトではroundedが適用されています。",
        changeColorscheme: "カラースキームを変更する",
        changeColorschemeDesc: "デフォルトではblueが適用されています。",
        changeState: "ローディングアニメーション",
        changeStateDesc: "ローディングアニメーションを適用するには、loadingをtrueにします。",
        icon: "アイコン",
        iconDesc: "左右にreact-iconsなどを使ってアイコンを設定することができます。",
        variants: "バリアント",
        variantsDesc: "デフォルトではprimaryが適用されています。",
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
                    <h1 className="text-[32px] font-bold mb-[12.5px]">Button</h1>
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
                        <Code language='tsx'>{`import { Button } from "css-materials";`}</Code>
                    </Card>
                    <Card title={t.usage}>
                        <PreviewAreaH>
                            <Button text="Button" />
                        </PreviewAreaH>
                        <Code language='tsx'>{`<Button text='Button' />`}</Code>
                    </Card>
                    <Card title={t.variants}>
                        <p>{t.variantsDesc}</p>
                        <PreviewAreaH>
                            <Button text="Primary" variant='primary' />
                            <Button text="Secondary" variant='secondary' />
                            <Button text="Danger" variant='danger' />
                        </PreviewAreaH>
                        <Code language='tsx'>{`<Button text='Primary' variant='primary' />`}</Code>
                        <Code language='tsx'>{`<Button text='Secondary' variant='secondary' />`}</Code>
                        <Code language='tsx'>{`<Button text='Danger' variant='danger' />`}</Code>
                    </Card>
                    <Card title={t.changeSize}>
                        <p>{t.changeSizeDesc}</p>
                        <PreviewAreaH>
                            <Button text="Small" size="small" />
                            <Button text="Medium" size="medium" />
                            <Button text="Large" size="large" />
                        </PreviewAreaH>
                        <Code language='tsx'>{`<Button text='Small' size='small' />`}</Code>
                        <Code language='tsx'>{`<Button text='Medium' size='medium' />`}</Code>
                        <Code language='tsx'>{`<Button text='Large' size='large' />`}</Code>
                    </Card>
                    <Card title={t.changeShape}>
                        <p>{t.changeShapeDesc}</p>
                        <PreviewAreaH>
                            <Button text="Rounded" shape='rounded' />
                            <Button text="Pill" shape='pill' />
                            <Button text="Circle" shape='circle' />
                        </PreviewAreaH>
                        <Code language='tsx'>{`<Button text='Rounded' shape='rounded' />`}</Code>
                        <Code language='tsx'>{`<Button text='Pill' shape='pill' />`}</Code>
                        <Code language='tsx'>{`<Button text='Circle' shape='circle' />`}</Code>
                    </Card>
                    <Card title={t.changeState}>
                        <p>{t.changeStateDesc}</p>
                        <div className="flex border p-2.5 rounded-md space-x-2.5 overflow-x-auto whitespace-nowrap">
                            <Button text="Loading" loading />
                            <Button text="Loading" variant='secondary' loading />
                            <Button text="Loading" variant='danger' loading />
                        </div>
                        <Code language='tsx'>{`<Button text='Loading' loading />`}</Code>
                        <Code language='tsx'>{`<Button text='Loading' variant='secondary' loading />`}</Code>
                        <Code language='tsx'>{`<Button text='Loading' variant='danger' loading />`}</Code>
                    </Card>
                    <Card title={t.icon}>
                        <p>{t.iconDesc}</p>
                        <PreviewAreaH>
                            <Button text="Icon Button" icon={<FaSmile />} />
                        </PreviewAreaH>
                        <Code language='tsx'>{`<Button text="Icon Button" icon={<FaSmile />} />`}</Code>
                    </Card>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Components;