"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';
import Body from '@/components/Body';
import PreviewAreaH from '@/components/PreviewAreaH';

const texts = {
    en: {
        title: "Getting Started",
        installation: "Installation",
        installationDesc: "With CSS Materials, all installations are completed just by installing css-materials.",
        styling: "Styling",
        stylingDesc: "To apply the styles from css-materials, import the CSS file.",
        finished: "Mission accomplished!",
        finishedDesc: "Use the components by calling them within your application.",
    },
    jp: {
        title: "はじめる",
        installation: "インストール",
        installationDesc: "CSS Materialsは、css-materialsをインストールするだけで、すべてのインストールが完了します。",
        styling: "スタイリング",
        stylingDesc: "css-materialsのスタイルを適用するには、CSSファイルをインポートします。",
        finished: "任務完了！",
        finishedDesc: "アプリケーション内でコンポーネントを呼び出して使います。",
    }
};

const Documents = () => {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');

    const t = texts[language];

    return (
        <Body>
            <Header />
            <div className="mt-20 mb-10 flex flex-col">
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
                <Card title={t.installation}>
                    <p>{t.installationDesc}</p>
                    <Code>npm install css-materials</Code>
                </Card>
                <Card title={t.styling}>
                    <p>{t.stylingDesc}</p>
                    <Code language="tsx">{`import 'css-materials/dist/styles.css';`}</Code>
                </Card>
                <Card title={t.finished}>
                    <p>{t.finishedDesc}</p>
                    <Code language="tsx">
{`import { Button } from "css-materials";

const App = () => {
    return (
        <Button>This is Button!</Button>
    )
}

export default App;
`}</Code>
                </Card>
            </div>
        </Body>
    );
};

export default Documents;