"use client"
import Body from '@/components/Body';
import Card from '@/components/Card';
import Header from '@/components/Header';
import React, { useState } from 'react';

const PrivacyPolicy: React.FC = () => {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');

    return (
        <Body>
            <Header />
            <div className="my-10 flex flex-col items-center">
                <img src="/cheese.png" className="w-[100px]" />
                <h1 className="text-2xl font-bold">Privacy Policy</h1>
                <div className="mt-5">
                    <button
                        className={`px-4 py-2 mr-2.5 rounded-md ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => setLanguage('en')}
                    >
                        English
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${language === 'jp' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => setLanguage('jp')}
                    >
                        日本語
                    </button>
                </div>
            </div>
            <div className="space-y-5">
                {language === 'en' ? (
                    <>
                        <Card title="Your Privacy Matters">
                            At CSS Materials, we value your privacy. That's why we don't collect any personal information from you. Enjoy our site with peace of mind!
                        </Card>
                        <Card title="No Cookies Here">
                            We respect your online experience and do not use cookies to track your activity or store any data.
                        </Card>
                        <Card title="No Third-Party Services">
                            We don't use any third-party services that could collect your data. Your privacy is completely protected here.
                        </Card>
                    </>
                ) : (
                    <>
                        <Card title="あなたのプライバシーを大切にします">
                            CSS Materialsでは、あなたのプライバシーを大切にしています。そのため、私たちは一切の個人情報を収集しません。安心してサイトをご利用ください。
                        </Card>
                        <Card title="クッキーは使用しません">
                            私たちはあなたのオンライン体験を尊重し、活動を追跡したりデータを保存するためにクッキーを使用しません。
                        </Card>
                        <Card title="サードパーティサービスは使用しません">
                            私たちは、データを収集するサードパーティサービスを一切使用しません。ここではプライバシーが完全に保護されています。
                        </Card>
                    </>
                )}
            </div>
        </Body>
    );
};

export default PrivacyPolicy;