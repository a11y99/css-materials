"use client"
import Body from '@/components/Body';
import Card from '@/components/Card';
import Header from '@/components/Header';
import Link from 'next/link';
import React, { useState } from 'react';

type Language = 'en' | 'jp';

const content: Record<Language, { cards: { title: string; text: string; link?: string }[] }> = {
    en: {
        cards: [
            { title: "What is CSS Materials?", text: "CSS Materials is a website that collects easy-to-use components. You can use them freely without permission." },
            { title: "Do I need to create an account?", text: "No, you don't need to create an account. You can use all components without providing any personal information." },
            { title: "Can I suggest new components?", text: "Yes, we welcome suggestions! Please contact us with your ideas by creating an issue on our GitHub: ", link: "https://github.com/hn-104/css-materials/issues/new" },
            { title: "Are there any usage restrictions?", text: "There are no restrictions on using the components. You can use them in any project without any limitations." },
            { title: "Is there any support available?", text: "While we do not offer dedicated support, you can find documentation and examples on our website. For further assistance, you can also create an issue on our GitHub." },
            { title: "How often are new components added?", text: "New components are added regularly. We are always working to expand our collection to meet the needs of our users." }
        ]
    },
    jp: {
        cards: [
            { title: "CSS Materialsとは何ですか？", text: "CSS Materialsは、簡単に利用できるコンポーネントを集めたサイトです。許可なしで自由に利用できます。" },
            { title: "アカウントを作成する必要がありますか？", text: "いいえ、アカウントを作成する必要はありません。個人情報を提供せずに、すべてのコンポーネントを利用できます。" },
            { title: "新しいコンポーネントを提案できますか？", text: "はい、提案を歓迎します！アイデアがあればGitHubでissueを作成してください: ", link: "https://github.com/hn-104/css-materials/issues/new" },
            { title: "利用制限はありますか？", text: "コンポーネントの利用に制限はありません。どんなプロジェクトでも自由に使えます。" },
            { title: "サポートはありますか？", text: "専用のサポートはありませんが、サイト上にドキュメントや例があります。さらに支援が必要な場合は、GitHubでissueを作成してください。" },
            { title: "新しいコンポーネントはどのくらいの頻度で追加されますか？", text: "新しいコンポーネントは定期的に追加されます。ユーザーのニーズに応えるために、常にコレクションを拡大しています。" }
        ]
    }
};

const FAQ: React.FC = () => {
    const [language, setLanguage] = useState<Language>('en');

    const { cards } = content[language];

    return (
        <Body>
            <Header />
            <div className="mb-10 flex flex-col items-center">
                <img src="/chubbs/5.svg" className="w-[250px]" alt="Chubbs" />
                <h1 className="text-2xl font-bold mt-[-25px]">FAQ</h1>
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
                        <p>
                            {card.text}
                            {card.link && (
                                <Link href={card.link} className="text-blue-500 underline">
                                    {card.link}
                                </Link>
                            )}
                        </p>
                    </Card>
                ))}
            </div>
        </Body>
    );
};

export default FAQ;