"use client"
import { useState, useEffect } from 'react';
import { FiXCircle, FiAlertCircle, FiCheckCircle, FiInfo } from "react-icons/fi";

export default function Home() {
  const [sliderValue, setSliderValue] = useState<number>(50);

  useEffect(() => {
    const slider = document.getElementById('myRange') as HTMLInputElement;
    slider.value = sliderValue.toString();
  }, [sliderValue]);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  return (
    <div className="w-[80%] mx-auto">
      {/* Header */}
      <div className="my-10 text-center">
        <h1 className="text-xl font-bold">CSS Materials</h1>
        <p className="text-sm opacity-50 mt-2.5">EN / JA</p>
      </div>
      {/* Body */}
      <div className="bg-white shadow rounded-lg p-2.5">
        <h2 className="text-xl font-bold border-b mb-2.5">ボタン</h2>
        <div className="space-x-1.5">
          <button className="red-button">Delete</button>
          <button className="orange-button">新規作成</button>
          <button className="yellow-button">お気に入り</button>
          <button className="green-button">Submit</button>
          <button className="blue-button">送信</button>
          <button className="purple-button">返信</button>
          <button className="gray-button">詳細</button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">スライダー</h2>
        <div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            className="slider"
            id="myRange"
            onChange={handleSliderChange}
          />
          <p>値: <span id="sliderValue">{sliderValue}</span></p>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">スイッチ</h2>
        <div className="flex items-center">
          <div className="switch">
            <label className="switch">
              <input type="checkbox" />
              <span className="slide round"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">アラート</h2>
        <div className="space-y-2.5">
          <div className="success-alert"><FiCheckCircle className="text-green-500 mr-2.5" />Success</div>
          <div className="error-alert"><FiXCircle className="text-red-500 mr-2.5" />Error</div>
          <div className="info-alert"><FiInfo className="text-blue-500 mr-2.5" />Info</div>
          <div className="warning-alert"><FiAlertCircle className="text-amber-500 mr-2.5" />Warning</div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-2.5 mt-5">
        <h2 className="text-xl font-bold border-b mb-2.5">入力欄</h2>
        <div>
          <input placeholder='表示名を入力...' className="input" />
        </div>
      </div>
      {/* Footer */}
      <div className="my-10 text-center">
        <h1 className="text-xl font-bold">Thank you for watching this page!</h1>
      </div>
    </div>
  );
}