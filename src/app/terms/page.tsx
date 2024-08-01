"use client"
import Body from '@/components/Body';
import Card from '@/components/Card';
import Header from '@/components/Header';
import React, { useState } from 'react';

type Language = 'en' | 'jp';

const content: Record<Language, { title: string; cards: { title: string; text: string; }[] }> = {
    en: {
        title: "Terms of Service",
        cards: [
            { title: "Welcome to CSS Materials!", text: "CSS Materials is a friendly place where you can find and use various components easily. Feel free to use anything here without asking for permission." },
            { title: "Your Responsibility", text: "While using our components, please ensure you're following all relevant laws and regulations. It's important to be responsible and respectful towards others." },
            { title: "Content Ownership", text: "All the content you find here belongs to their respective creators. Please don't copy or distribute the content without proper authorization." }
        ]
    },
    jp: {
        title: "利用規約",
        cards: [
            { title: "CSS Materialsへようこそ！", text: "CSS Materialsは、簡単に利用できるコンポーネントを集めた、誰でも自由に使えるサイトです。許可を取らずに自由に使ってくださいね。" },
            { title: "あなたの責任", text: "コンポーネントを使用する際には、適用されるすべての法律や規則を守ってください。他の人に対しても責任を持って、敬意を払って行動しましょう。" },
            { title: "コンテンツの所有権", text: "ここにあるすべてのコンテンツは、それぞれの作成者に帰属します。許可なくコピーしたり配布したりしないでくださいね。" }
        ]
    }
};

const Terms: React.FC = () => {
    const [language, setLanguage] = useState<Language>('en');

    const { title, cards } = content[language];

    return (
        <Body>
            <Header />
            <div className="mb-10 flex flex-col items-center">
                <img src="/chubbs/9.svg" className="w-[250px]" />
                <h1 className="text-2xl font-bold mt-[-25px]">{title}</h1>
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
                {cards.map((card, index) => (
                    <Card key={index} title={card.title}>
                        <p>{card.text}</p>
                    </Card>
                ))}
            </div>
        </Body>
    );
};

export default Terms;