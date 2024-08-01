"use client"
import React, { useState } from 'react';
import Header from '@/components/Header';
import Button from '@/components/Button';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Card from '@/components/Card';
import Code from '@/components/Code';
import Input from '@/components/Input';
import AlertDialog from '@/components/AlertDialog';

export default function Home() {
  return (
    <div className="w-[80%] mx-auto">
      <Header />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block">
          <img src="/chubbs/2.svg" />
        </div>
        <div className="space-y-5">
          <div className="flex flex-col items-center">
            <img src="/cheese.png" className="w-[100px]" />
            <img src="/text-logo.png" className="w-[200px]" />
          </div>
          <div className="space-x-2.5 flex items-center justify-center">
            <Link href="/docs/getting-started"><Button colorScheme='blue'>Get Started</Button></Link>
            <Link href="https://github.com/hn-104/css-materials"><Button colorScheme='gray'><FaGithub className="mr-2.5 text-lg" />GitHub</Button></Link>
          </div>
          <p className="opacity-50">A Collection of Beginner-Friendly, Easy-to-Use Components!</p>
          <Card title="CSS Materials Launches Beta Version!">
            <div className="flex flex-col h-20">
              <p className="opacity-50 text-sm">Amazing Collection of Easy-to-Use Components!</p>
              <p className="mt-auto text-sm">2024-07-31</p>
            </div>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card title="XXXXX XXXXX XXXXX XXXXX">
          <div className="flex flex-col h-20">
            <p className="opacity-50 text-sm">XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX</p>
            <p className="mt-auto text-sm">20XX-XX-XX</p>
          </div>
        </Card>
        <Card title="XXXXX XXXXX XXXXX XXXXX">
          <div className="flex flex-col h-20">
            <p className="opacity-50 text-sm">XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX</p>
            <p className="mt-auto text-sm">20XX-XX-XX</p>
          </div>
        </Card>
        <Card title="XXXXX XXXXX XXXXX XXXXX">
          <div className="flex flex-col h-20">
            <p className="opacity-50 text-sm">XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX</p>
            <p className="mt-auto text-sm">20XX-XX-XX</p>
          </div>
        </Card>
      </div>
    </div>
  );
}