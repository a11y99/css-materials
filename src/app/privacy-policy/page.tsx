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
        title: "Privacy Policy",
        overview: "Your Privacy Matters",
        overviewDesc: "At CSS Materials, we value your privacy. That's why we don't collect any personal information from you. Enjoy our site with peace of mind!",
        cookies: "No Cookies Here",
        cookiesDesc: "We respect your online experience and do not use cookies to track your activity or store any data.",
        thirdParty: "No Third-Party Services",
        thirdPartyDesc: "We don't use any third-party services that could collect your data. Your privacy is completely protected here.",
    },
    jp: {
        title: "プライバシーポリシー",
        overview: "あなたのプライバシーを大切にします",
        overviewDesc: "CSS Materialsでは、あなたのプライバシーを大切にしています。そのため、私たちは一切の個人情報を収集しません。安心してサイトをご利用ください。",
        cookies: "クッキーは使用しません",
        cookiesDesc: "私たちはあなたのオンライン体験を尊重し、活動を追跡したりデータを保存するためにクッキーを使用しません。",
        thirdParty: "サードパーティサービスは使用しません",
        thirdPartyDesc: "私たちは、データを収集するサードパーティサービスを一切使用しません。ここではプライバシーが完全に保護されています。",
    }
};

const PrivacyPolicy = () => {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');

    const t = texts[language];

    return (
        <Body>
            <Header />
            <div className="mt-20 mb-10 flex flex-col items-center">
                <img src="/d/scenes/7.svg" className="w-64" />
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
                <Card title={t.overview}>
                    <p>{t.overviewDesc}</p>
                </Card>
                <Card title={t.cookies}>
                    <p>{t.cookiesDesc}</p>
                </Card>
                <Card title={t.thirdParty}>
                    <p>{t.thirdPartyDesc}</p>
                </Card>
            </div>
        </Body>
    );
};

export default PrivacyPolicy;