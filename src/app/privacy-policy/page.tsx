"use client"
import Body from '@/components/Body';
import Card from '@/components/Card';
import Header from '@/components/Header';
import React, { useState } from 'react';

type Language = 'en' | 'jp';

const content: Record<Language, { title: string; cards: { title: string; text: string; }[] }> = {
    en: {
        title: "Privacy Policy",
        cards: [
            { title: "Your Privacy Matters", text: "At CSS Materials, we value your privacy. That's why we don't collect any personal information from you. Enjoy our site with peace of mind!" },
            { title: "No Cookies Here", text: "We respect your online experience and do not use cookies to track your activity or store any data." },
            { title: "No Third-Party Services", text: "We don't use any third-party services that could collect your data. Your privacy is completely protected here." }
        ]
    },
    jp: {
        title: "プライバシーポリシー",
        cards: [
            { title: "あなたのプライバシーを大切にします", text: "CSS Materialsでは、あなたのプライバシーを大切にしています。そのため、私たちは一切の個人情報を収集しません。安心してサイトをご利用ください。" },
            { title: "クッキーは使用しません", text: "私たちはあなたのオンライン体験を尊重し、活動を追跡したりデータを保存するためにクッキーを使用しません。" },
            { title: "サードパーティサービスは使用しません", text: "私たちは、データを収集するサードパーティサービスを一切使用しません。ここではプライバシーが完全に保護されています。" }
        ]
    }
};

const PrivacyPolicy: React.FC = () => {
    const [language, setLanguage] = useState<Language>('en');

    const { title, cards } = content[language];

    return (
        <Body>
            <Header />
            <div className="mb-10 flex flex-col items-center">
                <img src="/chubbs/4.svg" className="w-[250px]" />
                <h1 className="text-2xl font-bold mt-[-25px]">{title}</h1>
                <div className="mt-5">
                    <button className={`px-4 py-2 font-bold rounded-l-md ${language === 'en' ? 'bg-[#2da0ff] text-white' : 'bg-gray-100'}`}
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
                {cards.map((card, index) => (
                    <Card key={index} title={card.title}>
                        <p>{card.text}</p>
                    </Card>
                ))}
            </div>
        </Body>
    );
};

export default PrivacyPolicy;