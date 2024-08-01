"use client"
import { useState } from 'react';
import Body from "@/components/Body";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Code from "@/components/Code";

type Language = 'en' | 'jp';

export default function Documents() {
    const [language, setLanguage] = useState<Language>('en');

    const content: Record<Language, { title: string; introduction: string; installation: string; usage: string; styling: string; }> = {
        en: {
            title: "Getting Started",
            introduction: "Welcome to the css-materials package documentation. This package provides a collection of reusable React components with associated CSS styles. Follow the steps below to get started.",
            installation: "To install the css-materials package, run the following command:",
            usage: "To use the components and styles in your project, import them as shown below:",
            styling: "The package comes with a pre-built CSS file. To include the styles, simply import the CSS file in your project as shown in the Usage section:"
        },
        jp: {
            title: "はじめに",
            introduction: "css-materialsパッケージのドキュメントへようこそ。このパッケージは、再利用可能なReactコンポーネントと関連するCSSスタイルのコレクションを提供します。以下の手順に従って始めてください。",
            installation: "css-materialsパッケージをインストールするには、次のコマンドを実行してください:",
            usage: "プロジェクトでコンポーネントとスタイルを使用するには、以下のようにインポートします:",
            styling: "このパッケージには、あらかじめ作成されたCSSファイルが付属しています。スタイルを含めるには、Usageセクションで示したようにCSSファイルをインポートしてください:"
        }
    };

    const titles = {
        en: {
            introduction: "Introduction",
            installation: "Installation",
            usage: "Usage",
            styling: "Styling"
        },
        jp: {
            introduction: "紹介",
            installation: "インストール",
            usage: "使用方法",
            styling: "スタイリング"
        }
    };

    const { title, introduction, installation, usage, styling } = content[language];
    const { introduction: introTitle, installation: installTitle, usage: usageTitle, styling: stylingTitle } = titles[language];

    return (
        <Body>
            <Header />
            <div className="my-10 flex flex-col items-center">
                <img src="/cheese.png" className="w-[100px]" />
                <h1 className="text-2xl font-bold">{title}</h1>
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
                <Card title={introTitle}>
                    <p>{introduction}</p>
                </Card>
                <Card title={installTitle}>
                    <p>{installation}</p>
                    <Code language="bash">
{`npm install css-materials`}
                    </Code>
                </Card>
                <Card title={usageTitle}>
                    <p>{usage}</p>
                    <Code language="typescript">
{`import { Checkbox, Slider } from 'css-materials';
import 'css-materials/dist/styles.css';

const App = () => {
    const handleSliderChange = (value: number) => {
        console.log(value);
    };

    return (
        <div>
            <Checkbox label="Accept Terms" />
            <Slider value={50} onChange={handleSliderChange} />
        </div>
    );
};

export default App;`}
                    </Code>
                </Card>
                <Card title={stylingTitle}>
                    <p>{styling}</p>
                    <Code language="typescript">
{`import 'css-materials/dist/styles.css';`}
                    </Code>
                </Card>
            </div>
        </Body>
    );
}