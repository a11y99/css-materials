"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';
import Slider from '@/components/Slider';
import Switch from '@/components/Switch';
import Input from '@/components/Input';
import AlertDialog from '@/components/AlertDialog';
import Link from 'next/link';
import Modal from '@/components/Modal';

export default function Home() {
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<'default' | 'delete' | 'submit'>('default');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const toggleAlert = (type: 'default' | 'delete' | 'submit') => {
    setAlertType(type);
    setAlertVisible(!alertVisible);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className="my-10 text-center">
        <h1 className="text-xl font-bold">CSS Materials</h1>
        <p className="text-sm opacity-50 mt-2.5">EN / JA</p>
      </div>
      <div className="bg-white shadow rounded-lg p-2.5">
        <h2 className="text-xl font-bold border-b mb-2.5">ボタン</h2>
        <div className="space-x-1.5">
          <Button colorScheme="red">Delete</Button>
          <Button colorScheme="orange">新規作成</Button>
          <Button colorScheme="yellow">お気に入り</Button>
          <Button colorScheme="green">Submit</Button>
          <Button colorScheme="blue">送信</Button>
          <Button colorScheme="purple">返信</Button>
          <Button colorScheme="gray">詳細</Button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">スライダー</h2>
        <Slider value={sliderValue} onChange={setSliderValue} />
      </div>
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">スイッチ</h2>
        <Switch />
      </div>
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">入力欄</h2>
        <Input placeholder='表示名を入力...' />
      </div>
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">アラートダイアログ</h2>
        <div className="space-x-1.5">
          <Button colorScheme="blue" onClick={() => toggleAlert('default')}>Show Default Alert</Button>
          <Button colorScheme="red" onClick={() => toggleAlert('delete')}>Show Delete Alert</Button>
          <Button colorScheme="green" onClick={() => toggleAlert('submit')}>Show Submit Alert</Button>
        </div>
        <AlertDialog
          visible={alertVisible}
          onClose={() => setAlertVisible(false)}
          title="Alert"
          message="This is an alert dialog."
          type={alertType}
        />
      </div>
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">モーダル</h2>
        <Button colorScheme="blue" onClick={toggleModal}>Show Modal</Button>
        <Modal
          visible={modalVisible}
          onClose={toggleModal}
          title="Custom Modal"
          footer={
            <div className="mt-2.5">
              <Button colorScheme="gray" onClick={toggleModal}>Cancel</Button>
              <Button colorScheme="green" onClick={toggleModal} className="ml-1.5">Confirm</Button>
            </div>
          }
        >
          <p>This is the modal content with a custom footer.</p>
        </Modal>
      </div>
      <div className="my-10 text-center">
        <h1 className="text-xl font-bold">Thank you for watching this page!</h1>
        <p className="text-sm mt-2.5">Copyright &copy; 2024 <Link href="https://x.com/m_hono_104" className="underline">hono</Link> All Rights Reserved.</p>
      </div>
    </div>
  );
}