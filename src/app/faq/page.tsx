"use client"
import Body from '@/components/Body';
import Card from '@/components/Card';
import Header from '@/components/Header';
import Link from 'next/link';
import React, { useState } from 'react';

const FAQ: React.FC = () => {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');

    return (
        <Body>
            <Header />
            <div className="mb-10 flex flex-col items-center">
                <img src="/chubbs/5.svg" className="w-[250px]" />
                <h1 className="text-2xl font-bold mt-[-25px]">FAQ</h1>
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
                        <Card title="What is CSS Materials?">
                            CSS Materials is a website that collects easy-to-use components. You can use them freely without permission.
                        </Card>
                        <Card title="Do I need to create an account?">
                            No, you don&apos;t need to create an account. You can use all components without providing any personal information.
                        </Card>
                        <Card title="Can I suggest new components?">
                            Yes, we welcome suggestions! Please contact us with your ideas by creating an issue on our GitHub: <Link href="https://github.com/hn-104/css-materials/issues/new" className="text-blue-500 underline">https://github.com/hn-104/css-materials/issues/new</Link>
                        </Card>
                        <Card title="Are there any usage restrictions?">
                            There are no restrictions on using the components. You can use them in any project without any limitations.
                        </Card>
                        <Card title="Is there any support available?">
                            While we do not offer dedicated support, you can find documentation and examples on our website. For further assistance, you can also create an issue on our GitHub.
                        </Card>
                        <Card title="How often are new components added?">
                            New components are added regularly. We are always working to expand our collection to meet the needs of our users.
                        </Card>
                    </>
                ) : (
                    <>
                        <Card title="CSS Materialsとは何ですか？">
                            CSS Materialsは、簡単に利用できるコンポーネントを集めたサイトです。許可なしで自由に利用できます。
                        </Card>
                        <Card title="アカウントを作成する必要がありますか？">
                            いいえ、アカウントを作成する必要はありません。個人情報を提供せずに、すべてのコンポーネントを利用できます。
                        </Card>
                        <Card title="新しいコンポーネントを提案できますか？">
                            はい、提案を歓迎します！アイデアがあればGitHubでissueを作成してください: <Link href="https://github.com/hn-104/css-materials/issues/new" className="text-blue-500 underline">https://github.com/hn-104/css-materials/issues/new</Link>
                        </Card>
                        <Card title="利用制限はありますか？">
                            コンポーネントの利用に制限はありません。どんなプロジェクトでも自由に使えます。
                        </Card>
                        <Card title="サポートはありますか？">
                            専用のサポートはありませんが、サイト上にドキュメントや例があります。さらに支援が必要な場合は、GitHubでissueを作成してください。
                        </Card>
                        <Card title="新しいコンポーネントはどのくらいの頻度で追加されますか？">
                            新しいコンポーネントは定期的に追加されます。ユーザーのニーズに応えるために、常にコレクションを拡大しています。
                        </Card>
                    </>
                )}
            </div>
        </Body>
    );
};

export default FAQ;