"use client"
import React, { useState } from 'react';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';
import Body from '@/components/Body';
import PreviewAreaH from '@/components/PreviewAreaH';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const texts = {
    en: {
        title: "Terms of Service",
        welcome: "Welcome to CSS Materials!",
        welcomeDesc: "CSS Materials is a friendly place where you can find and use various components easily. Feel free to use anything here without asking for permission.",
        responsibility: "Your Responsibility",
        responsibilityDesc: "While using our components, please ensure you're following all relevant laws and regulations. It's important to be responsible and respectful towards others.",
        ownership: "Content Ownership",
        ownershipDesc: "All the content you find here belongs to their respective creators. Please don't copy or distribute the content without proper authorization.",
    },
    jp: {
        title: "利用規約",
        welcome: "CSS Materialsへようこそ！",
        welcomeDesc: "CSS Materialsは、簡単に利用できるコンポーネントを集めた、誰でも自由に使えるサイトです。許可を取らずに自由に使ってくださいね。",
        responsibility: "あなたの責任",
        responsibilityDesc: "コンポーネントを使用する際には、適用されるすべての法律や規則を守ってください。他の人に対しても責任を持って、敬意を払って行動しましょう。",
        ownership: "コンテンツの所有権",
        ownershipDesc: "ここにあるすべてのコンテンツは、それぞれの作成者に帰属します。許可なくコピーしたり配布したりしないでくださいね。",
    }
};

const Terms = () => {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');

    const t = texts[language];

    return (
        <Body>
            <Header />
            <div className="mt-20 mb-10 flex flex-col items-center">
                <img src="/d/scenes/5.svg" className="w-64" />
                <h1 className="text-[32px] font-bold mb-[12.5px]">{t.title}</h1>
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
                <Card title={t.welcome}>
                    <p>{t.welcomeDesc}</p>
                </Card>
                <Card title={t.responsibility}>
                    <p>{t.responsibilityDesc}</p>
                </Card>
                <Card title={t.ownership}>
                    <p>{t.ownershipDesc}</p>
                </Card>
            </div>
        </Body>
    );
};

export default Terms;