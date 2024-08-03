"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';
import Body from '@/components/Body';
import PreviewAreaH from '@/components/PreviewAreaH';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const texts = {
    en: {
        button: "Create an issue on GitHub",
        overview: "What is CSS Materials?",
        overviewDesc: "CSS Materials is a website that collects easy-to-use components. You can use them freely without permission.",
        account: "Do I need to create an account?",
        accountDesc: "No, you don't need to create an account. You can use all components without providing any personal information.",
        suggestions: "Can I suggest new components?",
        suggestionsDesc: "Yes, we welcome suggestions! Please contact us with your ideas by creating an issue on our GitHub:",
        restrictions: "Are there any usage restrictions?",
        restrictionsDesc: "There are no restrictions on using the components. You can use them in any project without any limitations.",
        support: "Is there any support available?",
        supportDesc: "While we do not offer dedicated support, you can find documentation and examples on our website. For further assistance, you can also create an issue on our GitHub:",
        updates: "How often are new components added?",
        updatesDesc: "New components are added regularly. We are always working to expand our collection to meet the needs of our users."
    },
    jp: {
        button: "GitHubでissueを作成する",
        overview: "CSS Materialsとは何ですか？",
        overviewDesc: "CSS Materialsは、簡単に利用できるコンポーネントを集めたサイトです。許可なしで自由に利用できます。",
        account: "アカウントを作成する必要がありますか？",
        accountDesc: "いいえ、アカウントを作成する必要はありません。個人情報を提供せずに、すべてのコンポーネントを利用できます。",
        suggestions: "新しいコンポーネントを提案できますか？",
        suggestionsDesc: "はい、提案を歓迎します！アイデアがあればGitHubでissueを作成してください:",
        restrictions: "利用制限はありますか？",
        restrictionsDesc: "コンポーネントの利用に制限はありません。どんなプロジェクトでも自由に使えます。",
        support: "サポートはありますか？",
        supportDesc: "専用のサポートはありませんが、サイト上にドキュメントや例があります。さらに支援が必要な場合は、GitHubでissueを作成してください:",
        updates: "新しいコンポーネントはどのくらいの頻度で追加されますか？",
        updatesDesc: "新しいコンポーネントは定期的に追加されます。ユーザーのニーズに応えるために、常にコレクションを拡大しています。"
    }
};

const FAQ = () => {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');

    const t = texts[language];

    return (
        <Body>
            <Header />
            <div className="mt-20 mb-10 flex flex-col items-center">
                <img src="/d/scenes/6.svg" className="w-64" />
                <h1 className="text-[32px] font-bold mb-[12.5px]">FAQ</h1>
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
                <Card title={t.account}>
                    <p>{t.accountDesc}</p>
                </Card>
                <Card title={t.suggestions}>
                    <p>{t.suggestionsDesc}</p>
                    <Link href="https://github.com/hn-104/css-materials/issues/new"><Button colorScheme='gray'><FaGithub className="text-lg mr-2.5" />{t.button}</Button></Link>
                </Card>
                <Card title={t.restrictions}>
                    <p>{t.restrictionsDesc}</p>
                </Card>
                <Card title={t.support}>
                    <p>{t.supportDesc}</p>
                    <Link href="https://github.com/hn-104/css-materials/issues/new"><Button colorScheme='gray'><FaGithub className="text-lg mr-2.5" />{t.button}</Button></Link>
                </Card>
                <Card title={t.updates}>
                    <p>{t.updatesDesc}</p>
                </Card>
            </div>
        </Body>
    );
};

export default FAQ;