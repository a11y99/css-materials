"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';
import Body from '@/components/Body';
import PreviewAreaH from '@/components/PreviewAreaH';
import PreviewAreaV from '@/components/PreviewAreaV';
import { FaArrowAltCircleRight, FaArrowRight, FaPhone } from 'react-icons/fa';
import Avatar from '@/components/Avatar';

const texts = {
    en: {
        overview: "Overview",
        overviewDesc: "Avatar is a component that displays an image or icon for identifying a user or object.",
        import: "Import",
        usage: "Usage",
        changeSize: "Change Size",
        changeSizeDesc: "Specifies the size of the avatar. You can set the size using 'small', 'medium', 'large', or a numerical value. By default, the medium size is applied.",
        bgColor: "Set Background Color",
        bgColorDesc: "Specifies the background color when no image is set. The default color is #CCC.",
    },
    jp: {
        overview: "概要",
        overviewDesc: "Avatarは、ユーザーやオブジェクトの識別のために表示される画像やアイコンコンポーネントです。",
        import: "インポート",
        usage: "使い方",
        changeSize: "サイズを変更する",
        changeSizeDesc: "アバターのサイズを指定します。'small'、'medium'、'large'の文字列か、数値でサイズを設定できます。デフォルトではmediumが適用されています。",
        bgColor: "背景色を設定する",
        bgColorDesc: "画像が設定されていない場合の背景色を指定します。デフォルトは#CCCです。",
    }
};

const Components = () => {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');

    const t = texts[language];

    return (
        <Body>
            <Header />
            <div className="mt-20 mb-10 flex flex-col">
                <h1 className="text-[32px] font-bold mb-[12.5px]">Avatar</h1>
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
                    <Code language='tsx'>{`import { Avatar } from "css-materials";`}</Code>
                </Card>
                <Card title={t.usage}>
                    <PreviewAreaV>
                        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                    </PreviewAreaV>
                    <Code language='html'>{`<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />`}</Code>
                </Card>
                <Card title={t.changeSize}>
                    <p>{t.changeSizeDesc}</p>
                    <div className="p-2.5 flex space-x-2.5 border rounded-md">
                        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="large" />
                        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" size="medium" />
                        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" size="small" />
                        <Avatar name="Ryan Florence" size={64} bgColor="#FF5733" />
                    </div>
                    <Code language='html'>
{`<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="large" />
<Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" size="medium" />
<Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" size="small" />
<Avatar name="Ryan Florence" size={64} bgColor="#FF5733" />`}
                    </Code>
                </Card>
                <Card title={t.bgColor}>
                    <p>{t.bgColorDesc}</p>
                    <div className="p-2.5 flex space-x-2.5 border rounded-md">
                        <Avatar name="オダギリジョー" bgColor="#FF5733" />
                    </div>
                    <Code language='html'>{`<Avatar name="オダギリジョー" bgColor="#FF5733" />`}</Code>
                </Card>
            </div>
        </Body>
    );
};

export default Components;