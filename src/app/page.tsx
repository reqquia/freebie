import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import { Sun } from 'lucide-react';
import General from './dashboard/General/page';
import Climate from '@/components/Climate';
const Clock = dynamic(() => import('../components/Clock'), { ssr: false });

export default function Home() {
  return (
    <section>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-2xl font-bold'>👋 Olá Lucas!</h2>
          <p className='text-md text-zinc-600'> Bem-vindo ao seu dashboard.</p>
        </div>
        <Climate temperature={25} />
        <Clock />
      </div>
      <General />
    </section>
  );
}
