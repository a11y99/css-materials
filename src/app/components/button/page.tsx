"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';
import Body from '@/components/Body';
import PreviewAreaH from '@/components/PreviewAreaH';

const ButtonComponents = () => {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');

    return (
        <Body>
            <Header />
            <div className="mb-10 text-center flex flex-col items-center">
                <img src="/chubbs/6.svg" className="w-80" />
                <h1 className="text-xl font-bold mt-[-50px]">Button</h1>
                <div className="mt-5">
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
                {language === 'en' ? (
                    <>
                        <Card title="Overview">
                            Button is a clickable element that allows users to perform actions component.
                        </Card>
                        <Card title="Import">
                            <Code language='tsx'>{`import { Button } from "css-materials";`}</Code>
                        </Card>
                        <Card title="Usage">
                            <PreviewAreaH>
                                <Button>Button</Button>
                            </PreviewAreaH>
                            <Code language='html'>{`<Button>Button</Button>`}</Code>
                        </Card>
                        <Card title="Change Size">
                            <p>By default, the <code>medium</code> size is applied.</p>
                            <PreviewAreaH>
                                <Button size="small">Small</Button>
                                <Button size="medium">Medium</Button>
                                <Button size="large">Large</Button>
                            </PreviewAreaH>
                            <Code language='html'>
{`<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`}
                            </Code>
                        </Card>
                        <Card title="形状を変更する">
                            <p>デフォルトでは<code>rounded</code>が適用されています。</p>
                            <PreviewAreaH>
                                <Button shape="square">四角ボタン</Button>
                                <Button shape="rounded">角丸ボタン</Button>
                                <Button shape="circular">円形ボタン</Button>
                            </PreviewAreaH>
                            <Code language='html'>
{`<Button shape="square">四角ボタン</Button>
<Button shape="rounded">角丸ボタン</Button>
<Button shape="circular">円形ボタン</Button>`}
                            </Code>
                        </Card>
                        <Card title="カラースキームを変更する">
                            <p>デフォルトでは<code>blue</code>が適用されています。</p>
                            <PreviewAreaH>
                                <Button colorScheme="red">まめだまし</Button>
                                <Button colorScheme="orange">まめだまし</Button>
                                <Button colorScheme="yellow">まめだまし</Button>
                                <Button colorScheme="green">まめだまし</Button>
                                <Button colorScheme="blue">まめだまし</Button>
                                <Button colorScheme="purple">まめだまし</Button>
                                <Button colorScheme="gray">まめだまし</Button>
                            </PreviewAreaH>
                            <Code language='html'>
{`<Button colorScheme="red">まめだまし</Button>
<Button colorScheme="orange">まめだまし</Button>
<Button colorScheme="yellow">まめだまし</Button>
<Button colorScheme="green">まめだまし</Button>
<Button colorScheme="blue">まめだまし</Button>
<Button colorScheme="purple">まめだまし</Button>
<Button colorScheme="gray">まめだまし</Button>`}
                            </Code>
                        </Card>
                        <Card title="状態を変更する">
                            <p>状態を変更するには<code>disabled</code>と<code>loading</code>のそれぞれを<code>true</code>にします。</p>
                            <div className="flex border p-2.5 rounded-md space-x-2.5 overflow-x-auto whitespace-nowrap">
                                <Button disabled>無効</Button>
                                <Button loading>読み込み</Button>
                            </div>
                            <Code language='html'>
{`<Button disabled>無効</Button>
<Button loading>読み込み</Button>`}
                            </Code>
                        </Card>
                    </>
                ) : (
                    <>
                        <Card title="概要">
                            Buttonは、ユーザーがアクションを実行するためのクリック可能な要素コンポーネントです。
                        </Card>
                        <Card title="インポート">
                            <Code language='tsx'>{`import { Button } from "css-materials";`}</Code>
                        </Card>
                        <Card title="使い方">
                            <PreviewAreaH>
                                <Button>ねこむすび</Button>
                            </PreviewAreaH>
                            <Code language='html'>{`<Button>ねこむすび</Button>`}</Code>
                        </Card>
                        <Card title="サイズを変更する">
                            <p>デフォルトでは<code>medium</code>が適用されています。</p>
                            <PreviewAreaH>
                                <Button size="small">いぬだわら</Button>
                                <Button size="medium">いぬだわら</Button>
                                <Button size="large">いぬだわら</Button>
                            </PreviewAreaH>
                            <Code language='html'>
{`<Button size="small">いぬだわら</Button>
<Button size="medium">いぬだわら</Button>
<Button size="large">いぬだわら</Button>`}
                            </Code>
                        </Card>
                        <Card title="形状を変更する">
                            <p>デフォルトでは<code>rounded</code>が適用されています。</p>
                            <PreviewAreaH>
                                <Button shape="square">四角ボタン</Button>
                                <Button shape="rounded">角丸ボタン</Button>
                                <Button shape="circular">円形ボタン</Button>
                            </PreviewAreaH>
                            <Code language='html'>
{`<Button shape="square">四角ボタン</Button>
<Button shape="rounded">角丸ボタン</Button>
<Button shape="circular">円形ボタン</Button>`}
                            </Code>
                        </Card>
                        <Card title="カラースキームを変更する">
                            <p>デフォルトでは<code>blue</code>が適用されています。</p>
                            <PreviewAreaH>
                                <Button colorScheme="red">まめだまし</Button>
                                <Button colorScheme="orange">まめだまし</Button>
                                <Button colorScheme="yellow">まめだまし</Button>
                                <Button colorScheme="green">まめだまし</Button>
                                <Button colorScheme="blue">まめだまし</Button>
                                <Button colorScheme="purple">まめだまし</Button>
                                <Button colorScheme="gray">まめだまし</Button>
                            </PreviewAreaH>
                            <Code language='html'>
{`<Button colorScheme="red">まめだまし</Button>
<Button colorScheme="orange">まめだまし</Button>
<Button colorScheme="yellow">まめだまし</Button>
<Button colorScheme="green">まめだまし</Button>
<Button colorScheme="blue">まめだまし</Button>
<Button colorScheme="purple">まめだまし</Button>
<Button colorScheme="gray">まめだまし</Button>`}
                            </Code>
                        </Card>
                        <Card title="状態を変更する">
                            <p>状態を変更するには<code>disabled</code>と<code>loading</code>のそれぞれを<code>true</code>にします。</p>
                            <div className="flex border p-2.5 rounded-md space-x-2.5 overflow-x-auto whitespace-nowrap">
                                <Button disabled>無効</Button>
                                <Button loading>読み込み</Button>
                            </div>
                            <Code language='html'>
{`<Button disabled>無効</Button>
<Button loading>読み込み</Button>`}
                            </Code>
                        </Card>
                    </>
                )}
            </div>
        </Body>
    );
};

export default ButtonComponents;