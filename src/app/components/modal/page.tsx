"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Code from '@/components/Code';
import Modal from '@/components/Modal';

const ModalComponents = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isCustomModalVisible, setCustomModalVisible] = useState(false);

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleOpenCustomModal = () => {
        setCustomModalVisible(true);
    };

    const handleCloseCustomModal = () => {
        setCustomModalVisible(false);
    };

    return (
        <div className="w-[80%] mx-auto">
            <Header />
            <div className="mb-10 text-center flex flex-col items-center justify-center">
                <img src="/chubbs/6.svg" className="w-80" />
                <h1 className="text-xl font-bold mt-[-50px]">Modal</h1>
            </div>
            <div className="space-y-5">
                {/* Usage Section */}
                <Card title="Usage">
                    <p>This is a basic usage example of the Modal component.</p>
                    <Button colorScheme="blue" onClick={handleOpenModal}>
                        Open Modal
                    </Button>
                    <Modal
                        visible={isModalVisible}
                        onClose={handleCloseModal}
                        title="Modal"
                    >
                        <p>This is the content of the modal.</p>
                    </Modal>
                    <Code language='javascript'>
{`import React, { useState } from 'react';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

const Example = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <div>
            <Button colorScheme="blue" onClick={handleOpenModal}>
                Open Modal
            </Button>
            <Modal
                visible={isModalVisible}
                onClose={handleCloseModal}
                title="Modal"
            >
                <p>This is the content of the modal.</p>
            </Modal>
        </div>
    );
};

export default Example;`}
                    </Code>
                </Card>

                {/* Modal with Footer Section */}
                <Card title="Modal with Custom Footer">
                    <p>This example shows the Modal component with a custom footer.</p>
                    <Button colorScheme="blue" onClick={handleOpenCustomModal}>
                        Open Modal with Footer
                    </Button>
                    <Modal
                        visible={isCustomModalVisible}
                        onClose={handleCloseCustomModal}
                        title="Modal with Custom Footer"
                        footer={
                            <>
                                <Button colorScheme="gray" onClick={handleCloseCustomModal}>Cancel</Button>
                                <Button colorScheme="green" onClick={handleCloseCustomModal} className="ml-2.5">OK</Button>
                            </>
                        }
                    >
                        <p>This is the content of the modal with a custom footer.</p>
                        <img src="/chubbs/0.svg" />
                    </Modal>
                    <Code language="javascript">
{`import React, { useState } from 'react';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

const ExampleWithFooter = () => {
    const [isCustomModalVisible, setCustomModalVisible] = useState(false);

    const handleOpenCustomModal = () => {
        setCustomModalVisible(true);
    };

    const handleCloseCustomModal = () => {
        setCustomModalVisible(false);
    };

    return (
        <div>
            <Button colorScheme="blue" onClick={handleOpenCustomModal}>
                Open Modal with Footer
            </Button>
            <Modal
                visible={isCustomModalVisible}
                onClose={handleCloseCustomModal}
                title="Modal with Custom Footer"
                footer={
                    <>
                        <Button colorScheme="gray" onClick={handleCloseCustomModal}>Cancel</Button>
                        <Button colorScheme="green" onClick={handleCloseCustomModal} className="ml-2.5">OK</Button>
                    </>
                }
            >
                <p>This is the content of the modal with a custom footer.</p>
                <img src="/chubbs/0.svg" />
            </Modal>
        </div>
    );
};

export default ExampleWithFooter;`}
                    </Code>
                </Card>
            </div>
        </div>
    );
};

export default ModalComponents;