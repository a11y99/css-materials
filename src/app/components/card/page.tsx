"use client"
import React, { useState } from 'react';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';

const CardComponents = () => {
    return (
        <div className="w-[80%] mx-auto">
            <Header />
            <div className="mb-10 text-center flex flex-col items-center justify-center">
                <img src="/chubbs/6.svg" className="w-80" />
                <h1 className="text-xl font-bold mt-[-50px]">Card</h1>
            </div>
            <div className="space-y-5">
                {/* Usage Section */}
                <Card title="Usage">
                    <p>This is a basic usage example of the Card component.</p>
                    <Card title="Card Title">
                        <p>This is the card content. It can contain any elements you want.</p>
                    </Card>
                    <Code language='typescript'>
{`import React from 'react';
import Card from '@/components/Card';

const Example = () => {
    return (
        <div>
            <Card title="Card Title">
                <p>This is the card content. It can contain any elements you want.</p>
            </Card>
        </div>
    );
};

export default Example;`}
                    </Code>
                </Card>

                {/* Expandable Card Section */}
                <Card title="Expandable Card">
                    <p>This example shows a card that can expand and collapse to show more or less content.</p>
                    <Card title="Expandable Card Title" maxHeight="200">
                        <p>This is the expandable card content. Click &quot;Read More&quot; to see the full content.</p>
                        <p>Additional content is shown here when the card is expanded.</p>
                        <div className="flex justify-center"><img src="/cheese.png" className="w-64" /></div>
                    </Card>
                    <Code language='typescript'>
{`import React from 'react';
import Card from '@/components/Card';

const ExampleExpandable = () => {
    return (
        <div>
            <Card title="Expandable Card Title" maxHeight="100">
                <p>This is the expandable card content. Click &quot;Read More&quot; to see the full content.</p>
                <p>Additional content is shown here when the card is expanded.</p>
            </Card>
        </div>
    );
};

export default ExampleExpandable;`}
                    </Code>
                </Card>

                {/* Linked Card Section */}
                <Card title="Linked Card">
                    <p>This example shows a card that acts as a link to another page.</p>
                    <Card title="Linked Card Title" href="/">
                        <p>This card links to another page when clicked.</p>
                    </Card>
                    <Code language='typescript'>
{`import React from 'react';
import Link from 'next/link';
import Card from '@/components/Card';

const ExampleLinked = () => {
    return (
        <div>
            <Card title="Linked Card Title" href="/">
                <p>This card links to another page when clicked.</p>
            </Card>
        </div>
    );
};

export default ExampleLinked;`}
                    </Code>
                </Card>
            </div>
        </div>
    );
};

export default CardComponents;