"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';
import Body from '@/components/Body';
import PreviewAreaH from '@/components/PreviewAreaH';

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
        changeState: "Change State",
        changeStateDesc: "To change the state, set either disabled or loading to true.",
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
        changeState: "状態を変更する",
        changeStateDesc: "状態を変更するにはdisabledとloadingのそれぞれをtrueにします。",
    }
};

const ButtonComponents = () => {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');

    const t = texts[language];

    return (
        <Body>
            <Header />
            <div className="mt-20 mb-10 flex flex-col">
                <h1 className="text-[32px] font-bold mb-[12.5px]">Button</h1>
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
                    <Code language='tsx'>{`import { Button } from "css-materials";`}</Code>
                </Card>
                <Card title={t.usage}>
                    <PreviewAreaH>
                        <Button>Button</Button>
                    </PreviewAreaH>
                    <Code language='html'>{`<Button>Button</Button>`}</Code>
                </Card>
                <Card title={t.changeSize}>
                    <p>{t.changeSizeDesc}</p>
                    <PreviewAreaH>
                        <Button size="small">Small</Button>
                        <Button size="medium">Medium</Button>
                        <Button size="large">Large</Button>
                    </PreviewAreaH>
                    <Code language='html'>
{`<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`}
                    </Code>
                </Card>
                <Card title={t.changeShape}>
                    <p>{t.changeShapeDesc}</p>
                    <PreviewAreaH>
                        <Button shape="square">Square</Button>
                        <Button shape="rounded">Rounded</Button>
                        <Button shape="circular">Circular</Button>
                    </PreviewAreaH>
                    <Code language='html'>
{`<Button shape="square">Square</Button>
<Button shape="rounded">Rounded</Button>
<Button shape="circular">Circular</Button>`}
                    </Code>
                </Card>
                <Card title={t.changeColorscheme}>
                    <p>{t.changeColorschemeDesc}</p>
                    <PreviewAreaH>
                        <Button colorScheme="red">Red</Button>
                        <Button colorScheme="orange">Orange</Button>
                        <Button colorScheme="yellow">Yellow</Button>
                        <Button colorScheme="green">Green</Button>
                        <Button colorScheme="blue">Blue</Button>
                        <Button colorScheme="purple">Purple</Button>
                        <Button colorScheme="gray">Gray</Button>
                    </PreviewAreaH>
                    <Code language='html'>
{`<Button colorScheme="red">Red</Button>
<Button colorScheme="orange">Orange</Button>
<Button colorScheme="yellow">Yellow</Button>
<Button colorScheme="green">Green</Button>
<Button colorScheme="blue">Blue</Button>
<Button colorScheme="purple">Purple</Button>
<Button colorScheme="gray">Gray</Button>`}
                    </Code>
                </Card>
                <Card title={t.changeState}>
                    <p>{t.changeStateDesc}</p>
                    <div className="flex border p-2.5 rounded-md space-x-2.5 overflow-x-auto whitespace-nowrap">
                        <Button colorScheme='gray' disabled>Disabled</Button>
                        <Button loading>Loading</Button>
                    </div>
                    <Code language='html'>
{`<Button colorScheme='gray' disabled>Disabled</Button>
<Button loading>Loading</Button>`}
                    </Code>
                </Card>
            </div>
        </Body>
    );
};

export default ButtonComponents;