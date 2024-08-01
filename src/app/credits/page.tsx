"use client"
import { useState } from 'react';
import Body from "@/components/Body";
import Card from "@/components/Card";
import Header from "@/components/Header";

type Language = 'en' | 'jp';

export default function Credit() {
    const [language, setLanguage] = useState<Language>('en');

    const content: Record<Language, { title: string; acknowledgement: string; drawkitCredit: string; }> = {
        en: {
            title: "Credits",
            acknowledgement: "We would like to thank the creators and contributors of the resources we used in this project. Their amazing work has greatly helped us in developing this project.",
            drawkitCredit: "Chubbs Character Illustrations provided by DrawKit. Check them out at their website: ",
        },
        jp: {
            title: "クレジット",
            acknowledgement: "このプロジェクトで使用したリソースの作成者および貢献者の皆様に感謝申し上げます。彼らの素晴らしい作品がこのプロジェクトの開発に大いに役立ちました。",
            drawkitCredit: "DrawKitが提供するChubbs Character Illustrations。詳細は彼らのウェブサイトをご覧ください: ",
        }
    };

    const { title, acknowledgement, drawkitCredit } = content[language];

    return (
        <Body>
            <Header />
            <div className="mb-10 flex flex-col items-center">
                <img src="/chubbs/11.svg" className="w-[250px]" />
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
                <Card title={title}>
                    <p>{acknowledgement}</p>
                </Card>
                <Card title="Drawkit">
                    <p>{drawkitCredit}<a href="https://www.drawkit.com/illustrations/chubbs-character-illustrations" target="_blank" className="text-blue-500 underline">Chubbs Character Illustrations</a></p>
                </Card>
            </div>
        </Body>
    );
}