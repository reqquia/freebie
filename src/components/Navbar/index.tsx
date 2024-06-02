'use client';
import React, { useState } from 'react';
import { BellDot, MessageSquareDot, Moon, Search, Sun } from 'lucide-react';

import Flags from '../Flags';
import Profile from '../Profile';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav className='w-full bg-white text-zinc-900 p-4 shadow-xl'>
      <div className='flex justify-between items-center'>
        <div>
          <Search size={20} className='hover:text-purple-500 cursor-pointer' />
        </div>
        <div className='flex justify-end items-center gap-4'>
          <Flags />
          {open ? (
            <Sun
              size={20}
              className='cursor-pointer hover:text-purple-500'
              onClick={() => setOpen(!open)}
            />
          ) : (
            <Moon
              size={20}
              className='cursor-pointer hover:text-purple-500'
              onClick={() => setOpen(!open)}
            />
          )}
          <MessageSquareDot
            size={20}
            className='hover:text-purple-500 cursor-pointer'
          />
          <BellDot size={20} className='hover:text-purple-500 cursor-pointer' />

          <div className='flex items-center gap-2'>
            <div className='text-end'>
              <h1 className='text-[14px] text-zinc-900 font-[600] mb-0 leading-normal'>
                Lucas Réquia
              </h1>
              <p className='text-xs text-zinc-400 leading-normal'>Admin</p>
            </div>
            <Profile avatar={'/avatar.png'} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
