"use client"
import Avatar from "@/components/Avatar";
import Body from "@/components/Body";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { FaPaperPlane } from "react-icons/fa";

export default function App() {
    return (
        <Body>
            <Header />
            <div className="mt-20">
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="large" />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" size="medium" />
                <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" size="small" />
                <Avatar name="Ryan Florence" size={64} bgColor="#FF5733" />
                <Avatar name="John Doe" size="medium" bgColor="#4CAF50" />
                <Avatar name="Jane Smith" size="large" bgColor="#3F51B5" />
                <div className="flex space-x-2.5 whitespace-nowrap">
                    <Input placeholder="メッセージを入力..." className="w-full" />
                    <Button rightIcon={<FaPaperPlane />}>送信</Button>
                </div>
            </div>
        </Body>
    )
}