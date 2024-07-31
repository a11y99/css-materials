"use client"
import Body from '@/components/Body';
import Card from '@/components/Card';
import Header from '@/components/Header';
import React, { useState } from 'react';

const Terms: React.FC = () => {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');

    return (
        <Body>
            <Header />
            <div className="my-10 flex flex-col items-center">
                <img src="/cheese.png" className="w-[100px]" />
                <h1 className="text-2xl font-bold">Terms of Service</h1>
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
                        <Card title="Welcome to CSS Materials!">
                            CSS Materials is a friendly place where you can find and use various components easily. Feel free to use anything here without asking for permission.
                        </Card>
                        <Card title="Your Responsibility">
                            While using our components, please ensure you're following all relevant laws and regulations. It's important to be responsible and respectful towards others.
                        </Card>
                        <Card title="Content Ownership">
                            All the content you find here belongs to their respective creators. Please don't copy or distribute the content without proper authorization.
                        </Card>
                    </>
                ) : (
                    <>
                        <Card title="CSS Materialsへようこそ！">
                            CSS Materialsは、簡単に利用できるコンポーネントを集めた、誰でも自由に使えるサイトです。許可を取らずに自由に使ってくださいね。
                        </Card>
                        <Card title="あなたの責任">
                            コンポーネントを使用する際には、適用されるすべての法律や規則を守ってください。他の人に対しても責任を持って、敬意を払って行動しましょう。
                        </Card>
                        <Card title="コンテンツの所有権">
                            ここにあるすべてのコンテンツは、それぞれの作成者に帰属します。許可なくコピーしたり配布したりしないでくださいね。
                        </Card>
                    </>
                )}
            </div>
        </Body>
    );
};

export default Terms;