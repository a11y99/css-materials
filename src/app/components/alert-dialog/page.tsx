"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';
import AlertDialog from '@/components/AlertDialog';

const AlertDialogComponents = () => {
    const [isAlertDialogVisible, setAlertDialogVisible] = useState(false);

    const handleOpenAlertDialog = () => {
        setAlertDialogVisible(true);
    };

    const handleCloseAlertDialog = () => {
        setAlertDialogVisible(false);
    };

    return (
        <div className="w-[80%] mx-auto">
            <Header />
            <div className="mb-10 text-center flex flex-col items-center justify-center">
                <img src="/chubbs/6.svg" className="w-80" />
                <h1 className="text-xl font-bold mt-[-50px]">Alert Dialog</h1>
            </div>
            <div className="space-y-5">
                {/* Usage Section */}
                <Card title="Usage">
                    <p>This is a basic usage example of the AlertDialog component.</p>
                    <Button colorScheme="blue" onClick={handleOpenAlertDialog}>
                        Open Alert Dialog
                    </Button>
                    <AlertDialog
                        visible={isAlertDialogVisible}
                        onClose={handleCloseAlertDialog}
                        title="Alert"
                        message="This is an alert message."
                    />
                    <Code language='typescript'>
{`import React, { useState } from 'react';
import Button from '@/components/Button';
import AlertDialog from '@/components/AlertDialog';

const Example = () => {
    const [isAlertDialogVisible, setAlertDialogVisible] = useState(false);

    const handleOpenAlertDialog = () => {
        setAlertDialogVisible(true);
    };

    const handleCloseAlertDialog = () => {
        setAlertDialogVisible(false);
    };

    return (
        <div>
            <Button colorScheme="blue" onClick={handleOpenAlertDialog}>
                Open Alert Dialog
            </Button>
            <AlertDialog
                visible={isAlertDialogVisible}
                onClose={handleCloseAlertDialog}
                title="Alert"
                message="This is an alert message."
            />
        </div>
    );
};

export default Example;`}
                    </Code>
                </Card>
            </div>
        </div>
    );
};

export default AlertDialogComponents;